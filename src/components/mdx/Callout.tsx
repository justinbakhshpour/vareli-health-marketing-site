import type { ReactNode } from "react";

export type CalloutVariant = "info" | "warning" | "important";

export type CalloutProps = {
  /** Visual and semantic weight of the note. Defaults to `info`. */
  variant?: CalloutVariant;
  /** Optional eyebrow label. Also becomes the note's accessible name. */
  title?: string;
  children: ReactNode;
};

const variantStyles: Record<CalloutVariant, { box: string; label: string }> = {
  info: {
    box: "border-[#0F6674] bg-[#0F6674]/[0.05]",
    label: "text-[#0F6674]",
  },
  warning: {
    box: "border-amber-500 bg-amber-500/[0.07]",
    label: "text-amber-700",
  },
  important: {
    box: "border-zinc-900 bg-zinc-900/[0.04]",
    label: "text-zinc-900",
  },
};

/**
 * A bordered aside for context that sits beside the argument rather than in it
 * — status notices, caveats, scope limits.
 *
 * Body copy is set one step down from the article's 17px so the note reads as
 * secondary; the trailing paragraph margin is removed so padding stays even.
 */
export default function Callout({
  variant = "info",
  title,
  children,
}: CalloutProps) {
  const styles = variantStyles[variant];

  return (
    <aside
      role="note"
      aria-label={title}
      className={`my-8 rounded-r-lg border-l-[3px] px-5 py-5 sm:px-6 ${styles.box} [&_p]:text-[15px] [&_p]:leading-[1.7] [&_li]:text-[15px] [&_li]:leading-[1.7] [&_p:last-child]:mb-0 [&_ul:last-child]:mb-0 [&_ol:last-child]:mb-0`}
    >
      {title && (
        <p
          className={`!mb-2 !text-[11px] font-semibold uppercase tracking-widest ${styles.label}`}
        >
          {title}
        </p>
      )}
      {children}
    </aside>
  );
}
