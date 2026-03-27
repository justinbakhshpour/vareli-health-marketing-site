import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => (
      <h2 className="text-[22px] font-bold text-zinc-900 leading-[1.25] tracking-[-0.015em] mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-[18px] font-semibold text-zinc-900 leading-[1.3] mt-8 mb-3">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-[17px] text-zinc-600 leading-[1.8] mb-5">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="mb-5 space-y-2 list-none pl-0">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-5 space-y-2 list-decimal pl-6 text-[17px] text-zinc-600 leading-[1.8]">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="flex gap-3 text-[17px] text-zinc-600 leading-[1.8]">
        <span className="mt-[0.6em] w-1 h-1 rounded-full bg-[#0F6674] flex-shrink-0" />
        <span>{children}</span>
      </li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 pl-5 border-l-2 border-[#0F6674]">
        <div className="text-[19px] text-zinc-700 leading-[1.7] italic font-medium">
          {children}
        </div>
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-zinc-100 text-zinc-800 px-1.5 py-0.5 rounded text-[14px] font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-zinc-950 text-zinc-300 rounded-xl p-5 overflow-x-auto text-[13px] font-mono leading-relaxed my-6">
        {children}
      </pre>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-zinc-900">{children}</strong>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-[#0F6674] hover:underline underline-offset-2 font-medium"
      >
        {children}
      </a>
    ),
    hr: () => (
      <hr className="my-10 border-zinc-200" />
    ),
    ...components,
  };
}
