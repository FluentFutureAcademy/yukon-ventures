import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { site } from "@/content/siteContent";

export type LegalDoc = "privacy" | "terms";

/** Native modal <dialog>: traps focus, closes on Escape, restores focus on close. */
export function LegalModal({ doc, onClose }: { doc: LegalDoc | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);

  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    // native listener: fires for Escape, the close button and backdrop clicks alike
    const handle = () => {
      document.body.style.overflow = "";
      onCloseRef.current();
    };
    d.addEventListener("close", handle);
    return () => d.removeEventListener("close", handle);
  }, []);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (doc && !d.open) {
      d.showModal();
      document.body.style.overflow = "hidden";
    }
    if (!doc && d.open) d.close();
  }, [doc]);

  const content = doc ? site.legal[doc] : null;
  return (
    <dialog
      ref={ref}
      aria-labelledby="legal-title"
      onClick={(e) => e.target === ref.current && ref.current?.close()}
      className="m-auto max-h-[88svh] w-[min(720px,calc(100vw-32px))] overflow-hidden rounded-[2px] border border-line bg-ivory p-0 text-grey shadow-2xl backdrop:bg-charcoal/50 backdrop:backdrop-blur-[2px]"
    >
      {content ? (
        <div className="flex max-h-[88svh] flex-col">
          <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-5 sm:px-8">
            <div>
              <h2 id="legal-title" className="text-[30px] font-semibold leading-tight">
                {content.title}
              </h2>
              <p className="mt-1 text-[13px]">Last updated: {site.legal.lastUpdated}</p>
            </div>
            <button
              type="button"
              autoFocus
              onClick={() => ref.current?.close()}
              className="-mr-2 grid h-11 w-11 flex-none place-items-center text-charcoal"
              aria-label="Close"
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>
          <div className="space-y-6 overflow-y-auto px-6 py-6 text-[15px] leading-[1.7] sm:px-8">
            {content.sections.map((s) => (
              <section key={s.heading}>
                <h3 className="font-sans text-[15px] font-semibold text-charcoal">{s.heading}</h3>
                <p className="mt-1.5">{s.body}</p>
              </section>
            ))}
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
