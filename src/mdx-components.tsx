import type { MDXComponents } from "mdx/types";
import AnswerBox from "@/components/mdx/AnswerBox";
import Callout from "@/components/mdx/Callout";
import Checklist from "@/components/mdx/Checklist";
import PerspectiveBox from "@/components/mdx/PerspectiveBox";

const components: MDXComponents = {
  // Article-body components, available to every MDX file without an import.
  AnswerBox,
  Callout,
  Checklist,
  PerspectiveBox,

  // `id` is forwarded so the ids rehype-slug generates survive the override and
  // in-article anchor links resolve. Dropping it silently breaks every #link.
  h2: ({ id, children }) => (
    <h2
      id={id}
      className="text-[22px] font-bold text-zinc-900 leading-[1.25] tracking-[-0.015em] mt-10 mb-4 scroll-mt-24"
    >
      {children}
    </h2>
  ),
  h3: ({ id, children }) => (
    <h3
      id={id}
      className="text-[18px] font-semibold text-zinc-900 leading-[1.3] mt-8 mb-3 scroll-mt-24"
    >
      {children}
    </h3>
  ),
  h4: ({ id, children }) => (
    <h4
      id={id}
      className="text-[12px] font-semibold text-[#0F6674] uppercase tracking-widest mt-8 mb-3 scroll-mt-24"
    >
      {children}
    </h4>
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
  a: ({ href, children }) => {
    // Citations point off-site: open in a new tab and sever the opener link.
    const isExternal = /^https?:\/\//.test(href ?? "");
    return (
      <a
        href={href}
        className="text-[#0F6674] hover:underline underline-offset-2 font-medium"
        {...(isExternal && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
      >
        {children}
      </a>
    );
  },
  hr: () => (
    <hr className="my-10 border-zinc-200" />
  ),

  // Tables scroll inside their own container so a wide comparison never forces
  // the page body to scroll sideways on a phone.
  table: ({ children }) => (
    <div className="my-8 -mx-4 sm:mx-0 overflow-x-auto">
      <table className="w-full min-w-[520px] border-collapse text-left text-[14px]">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="border-b border-zinc-300">{children}</thead>
  ),
  tbody: ({ children }) => (
    <tbody className="divide-y divide-zinc-200">{children}</tbody>
  ),
  th: ({ children }) => (
    <th
      scope="col"
      className="px-3 py-3 align-top font-semibold text-zinc-900 first:pl-4 sm:first:pl-3"
    >
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-3 py-3 align-top text-zinc-600 leading-[1.6] first:pl-4 sm:first:pl-3">
      {children}
    </td>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
