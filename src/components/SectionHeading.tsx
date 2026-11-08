import { cn } from "@/lib/utils";

export function SectionHeading({
  label,
  heading,
  intro,
  align = "center",
  id,
  className,
}: {
  label: string;
  heading: string;
  intro?: string | readonly string[];
  align?: "center" | "left";
  id?: string;
  className?: string;
}) {
  const paras = intro ? (Array.isArray(intro) ? intro : [intro]) : [];
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-[720px] text-center" : "max-w-[620px]", className)}>
      <p className="label">{label}</p>
      <h2 id={id} className="mt-4 text-[40px] font-medium leading-[1.08] sm:text-[48px] lg:text-[54px]">
        {heading}
      </h2>
      <span className={cn("rule-gold mt-6", align === "center" && "mx-auto")} aria-hidden="true" />
      {paras.map((p) => (
        <p key={p} className="mt-6 text-[17px] leading-[1.7]">
          {p}
        </p>
      ))}
    </div>
  );
}
