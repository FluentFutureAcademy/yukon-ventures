import { CircleAlert, CircleCheck, LoaderCircle, Send } from "lucide-react";
import { useRef, useState, type FormEvent } from "react";
import { site } from "@/content/siteContent";

type Status = "idle" | "sending" | "success" | "error";
type Values = { name: string; email: string; subject: string; message: string };
const empty: Values = { name: "", email: "", subject: "", message: "" };

const LIMITS = { name: [2, 100], email: [5, 200], subject: [2, 150], message: [10, 5000] } as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(v: Values) {
  const e: Partial<Record<keyof Values, string>> = {};
  if (v.name.trim().length < LIMITS.name[0]) e.name = "Please enter your name.";
  if (!EMAIL_RE.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (v.subject.trim().length < LIMITS.subject[0]) e.subject = "Please enter a subject.";
  const m = v.message.trim().length;
  if (m < LIMITS.message[0]) e.message = `Please write at least ${LIMITS.message[0]} characters.`;
  else if (m > LIMITS.message[1]) e.message = `Please keep your message under ${LIMITS.message[1]} characters.`;
  return e;
}

export function ContactForm() {
  const f = site.contact.form;
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const busy = useRef(false);

  const set = (k: keyof Values) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined }));
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy.current) return; // no double submit
    const form = e.currentTarget;
    const errs = validate(values);
    setErrors(errs);
    const firstInvalid = (Object.keys(empty) as (keyof Values)[]).find((k) => errs[k]);
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`#cf-${firstInvalid}`)?.focus();
      return;
    }
    // honeypot: real people never tick the hidden box
    if ((form.elements.namedItem("botcheck") as HTMLInputElement | null)?.checked) {
      setStatus("success");
      setValues(empty);
      return;
    }
    const key = import.meta.env.VITE_WEB3FORMS_KEY;
    busy.current = true;
    setStatus("sending");
    try {
      if (!key) throw new Error("VITE_WEB3FORMS_KEY is not set");
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: key,
          subject: `${f.emailSubjectPrefix}: ${values.subject.trim()}`,
          from_name: "Yukon Ventures website",
          name: values.name.trim(),
          email: values.email.trim(),
          replyto: values.email.trim(),
          message: `Subject: ${values.subject.trim()}\n\n${values.message.trim()}`,
          botcheck: false,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { success?: boolean };
      if (!res.ok || !data.success) throw new Error("Web3Forms rejected the submission");
      setStatus("success");
      setValues(empty);
    } catch (err) {
      // most common cause: VITE_WEB3FORMS_KEY missing from .env / Netlify (see README)
      if (import.meta.env.DEV) console.error("[contact form]", err);
      setStatus("error");
    } finally {
      busy.current = false;
    }
  }

  const field = (k: keyof Values, label: string, type = "text", autoComplete?: string) => (
    <div>
      <label htmlFor={`cf-${k}`} className="mb-2 block text-[13px] font-medium text-charcoal">
        {label} <span aria-hidden="true" className="text-gold-text">*</span>
      </label>
      {k === "message" ? (
        <textarea
          id={`cf-${k}`}
          name={k}
          rows={6}
          required
          maxLength={LIMITS.message[1]}
          value={values[k]}
          onChange={set(k)}
          aria-invalid={errors[k] ? "true" : undefined}
          aria-describedby={errors[k] ? `cf-${k}-err` : undefined}
          className="field resize-y"
        />
      ) : (
        <input
          id={`cf-${k}`}
          name={k}
          type={type}
          required
          autoComplete={autoComplete}
          maxLength={LIMITS[k][1]}
          value={values[k]}
          onChange={set(k)}
          aria-invalid={errors[k] ? "true" : undefined}
          aria-describedby={errors[k] ? `cf-${k}-err` : undefined}
          className="field"
        />
      )}
      {errors[k] ? (
        <p id={`cf-${k}-err`} className="mt-1.5 text-[13px] text-[#a3392b]">
          {errors[k]}
        </p>
      ) : null}
    </div>
  );

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-5" aria-describedby="cf-status">
      <div className="grid gap-5 sm:grid-cols-2">
        {field("name", f.name, "text", "name")}
        {field("email", f.email, "email", "email")}
      </div>
      {field("subject", f.subject)}
      {field("message", f.message)}

      {/* honeypot, hidden from people and assistive tech */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={status === "sending"} aria-busy={status === "sending"}>
        {status === "sending" ? (
          <>
            <LoaderCircle size={16} className="animate-spin" aria-hidden="true" />
            {f.sending}
          </>
        ) : (
          <>
            {f.submit}
            <Send size={14} strokeWidth={1.75} className="icon-arrow" aria-hidden="true" />
          </>
        )}
      </button>

      <div id="cf-status" aria-live="polite" role="status" className="min-h-[1px]">
        {status === "success" ? (
          <p className="flex items-start gap-2.5 border border-gold/60 bg-ivory p-4 text-[14.5px] text-charcoal">
            <CircleCheck size={18} className="mt-0.5 flex-none text-gold-deep" aria-hidden="true" />
            {f.success}
          </p>
        ) : null}
        {status === "error" ? (
          <p className="flex items-start gap-2.5 border border-[#a3392b]/40 bg-[#fbf3f1] p-4 text-[14.5px] text-charcoal">
            <CircleAlert size={18} className="mt-0.5 flex-none text-[#a3392b]" aria-hidden="true" />
            <span>
              Something went wrong. Please email us directly at{" "}
              <a className="underline underline-offset-2" href={`mailto:${site.contact.email}`}>
                {site.contact.email}
              </a>
              .
            </span>
          </p>
        ) : null}
      </div>
    </form>
  );
}
