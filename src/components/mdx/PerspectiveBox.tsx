import type { ReactNode } from "react";

export type PerspectiveBoxProps = {
  /** Heading for the box. Defaults to "The Vareli perspective". */
  title?: string;
  /** Eyebrow above the heading. Defaults to "Perspective". */
  eyebrow?: string;
  children: ReactNode;
};

/**
 * A labelled box for Vareli's own reading of the material, kept visually
 * quieter than the surrounding argument so an educational article does not
 * tip into a pitch. The label is the point: the reader should be able to tell
 * at a glance where reporting stops and opinion starts.
 */
export default function PerspectiveBox({
  title = "The Vareli perspective",
  eyebrow = "Perspective",
  children,
}: PerspectiveBoxProps) {
  return (
    <aside
      aria-label={title}
      className="my-12 rounded-2xl border border-[#0F6674]/25 bg-[#0F6674]/[0.03] px-6 py-7 sm:px-8 sm:py-8 [&_p]:text-[16px] [&_p]:leading-[1.75] [&_li]:text-[16px] [&_p:last-child]:mb-0 [&_ul:last-child]:mb-0"
    >
      <p className="!mb-2 !text-[11px] !leading-normal font-semibold uppercase tracking-widest text-[#0F6674]">
        {eyebrow}
      </p>
      <h2 className="mb-4 text-[19px] font-bold leading-[1.3] tracking-[-0.01em] text-zinc-900">
        {title}
      </h2>
      {children}
    </aside>
  );
}
