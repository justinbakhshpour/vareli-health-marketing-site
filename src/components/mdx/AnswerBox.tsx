import type { ReactNode } from "react";

export type AnswerBoxProps = {
  /** Heading for the box. Defaults to "The short answer". */
  title?: string;
  /**
   * Heading level, so the box slots into the document outline correctly.
   * Defaults to `h2` — the right level directly beneath an article title.
   */
  as?: "h2" | "h3";
  children: ReactNode;
};

/**
 * The inverted summary box that carries an article's direct answer up near the
 * top, before the argument that supports it.
 *
 * Inherited body styles are overridden for legibility on a dark ground: copy
 * lightens to zinc-300 and links pick up the lighter cyan rather than the teal
 * used on white.
 */
export default function AnswerBox({
  title = "The short answer",
  as: Heading = "h2",
  children,
}: AnswerBoxProps) {
  return (
    <aside
      aria-label={title}
      className="my-10 rounded-2xl bg-zinc-900 px-6 py-7 sm:px-8 sm:py-8 [&_p]:text-[15px] [&_p]:leading-[1.75] [&_p]:text-zinc-300 [&_li]:text-[15px] [&_li]:leading-[1.75] [&_li]:text-zinc-300 [&_strong]:text-white [&_a]:text-[#3CC3E0] [&_li>span:first-child]:bg-[#3CC3E0] [&_p:last-child]:mb-0 [&_ul:last-child]:mb-0"
    >
      <Heading className="mb-3 text-[13px] font-semibold uppercase tracking-widest text-[#3CC3E0]">
        {title}
      </Heading>
      {children}
    </aside>
  );
}
