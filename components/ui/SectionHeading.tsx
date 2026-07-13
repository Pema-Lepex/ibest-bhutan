import Reveal from "@/components/common/Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  /** Highlighted tail of the title, rendered in the accent colour. */
  highlight?: string;
  subtitle?: string;
  align?: "center" | "left";
  /** Use on dark backgrounds. */
  invert?: boolean;
}

// The eyebrow / heading / subtitle stack that opens every section.
export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "center",
  invert = false,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal
      className={
        centered ? "mx-auto max-w-3xl 5xl:max-w-5xl text-center" : "max-w-2xl"
      }
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] ${
            invert ? "text-accent-400" : "text-accent-600"
          }`}
        >
          <span className="h-px w-6 bg-current" />
          {eyebrow}
        </span>
      )}

      <h2
        className={`mt-4 text-3xl font-bold leading-tight md:text-4xl lg:text-[2.75rem] 4xl:text-6xl ${
          invert ? "text-white" : "text-primary-500"
        }`}
      >
        {title}
        {highlight && <span className="text-accent-500"> {highlight}</span>}
      </h2>

      {subtitle && (
        <p
          className={`mt-5 text-base leading-relaxed md:text-lg 4xl:text-2xl ${
            invert ? "text-white/70" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
