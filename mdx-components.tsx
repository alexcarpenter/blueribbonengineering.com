import type { MDXComponents } from "mdx/types";
import { Code as code } from "@/components/mdx/code";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    code,
  };
}
