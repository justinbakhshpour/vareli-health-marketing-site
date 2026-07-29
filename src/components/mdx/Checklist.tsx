import type { ReactNode } from "react";

export type ChecklistProps = {
  /** Optional heading above the list. Also names the list for assistive tech. */
  title?: string;
  /**
   * Render numeric markers instead of checkboxes. Use when the items are
   * referred to by number in the surrounding prose.
   */
  ordered?: boolean;
  children: ReactNode;
};

/**
 * A carded list for things a reader is meant to work through — readiness
 * questions, vendor questions, pre-flight items.
 *
 * Takes an ordinary Markdown list as children. The marker itself is restyled in
 * `globals.css` via the `data-checklist` hook, which repurposes the bullet span
 * that the global `li` override already renders.
 */
export default function Checklist({
  title,
  ordered = false,
  children,
}: ChecklistProps) {
  return (
    <section
      aria-label={title}
      data-checklist={ordered ? "ordered" : "unordered"}
      className="my-8 rounded-xl border border-zinc-200 bg-white px-6 py-6 sm:px-8 sm:py-7 [&_li]:text-[15px] [&_li]:leading-[1.7] [&_ul:last-child]:mb-0 [&_ol:last-child]:mb-0"
    >
      {title && (
        <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-[#0F6674]">
          {title}
        </h3>
      )}
      {children}
    </section>
  );
}
