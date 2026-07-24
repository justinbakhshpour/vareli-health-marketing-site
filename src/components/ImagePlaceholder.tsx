type Props = {
  /** Descriptive alt text for the real screenshot that will replace this block. */
  alt: string;
  /** Short caption rendered under the image once swapped in. */
  caption?: string;
  /** Intended file path, e.g. /images/insights/readiness-checklist.png */
  src?: string;
};

/**
 * Placeholder for a screenshot that has not been captured yet.
 *
 * To publish the real asset: drop the file in `public/images/insights/`, then
 * replace this component with a `next/image` <Image> using the same alt text.
 */
export default function ImagePlaceholder({ alt, caption, src }: Props) {
  return (
    <figure className="my-8">
      <div
        role="img"
        aria-label={alt}
        className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-zinc-300 bg-zinc-50 px-6 py-12 text-center"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          aria-hidden="true"
          className="text-zinc-400"
        >
          <rect
            x="1.75"
            y="3.75"
            width="18.5"
            height="14.5"
            rx="2.25"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="7.5" cy="8.5" r="1.5" fill="currentColor" />
          <path
            d="M2.5 15.5L7.5 11L11.5 14.5L15 11.5L19.5 15.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
          Screenshot placeholder
        </span>
        <span className="max-w-md text-[13px] leading-relaxed text-zinc-500">
          {alt}
        </span>
        {src && (
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[11px] text-zinc-500">
            {src}
          </code>
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 text-[13px] leading-relaxed text-zinc-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
