import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

// Plugins are named as strings, not imported: Turbopack resolves them in Rust
// and cannot accept JavaScript functions as loader options.
const withMDX = createMDX({
  options: {
    // GFM for Markdown tables, which MDX does not parse on its own. No existing
    // article uses the other syntax it enables (strikethrough, footnotes, task
    // lists, bare-URL autolinks), so enabling it changes nothing already written.
    remarkPlugins: ["remark-gfm"],
    // Gives every heading a stable id so an article can link to its own
    // sections. Purely additive — no existing markup changes.
    rehypePlugins: ["rehype-slug"],
  },
});

export default withMDX(nextConfig);
