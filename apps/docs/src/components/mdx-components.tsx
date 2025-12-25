import defaultMdxComponents from "fumadocs-ui/mdx"
import type { MDXComponents } from "mdx/types"
import { Card, Cards } from "fumadocs-ui/components/card"
import { HiArrowUpRight } from "react-icons/hi2"

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    Cards: (props) => (
      <Cards {...props} className="grid grid-cols-1 md:grid-cols-2 gap-4" />
    ),
    Card: (props) => (
      <Card
        {...props}
        className="rounded-none border border-white/8 bg-white/2 hover:bg-white/4 hover:border-white/20 transition-all group p-6 h-full"
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-start mb-4">
            {props.icon && <div className="text-white">{props.icon}</div>}
            <HiArrowUpRight className="text-zinc-700 group-hover:text-white transition-colors" />
          </div>
          {props.children}
        </div>
      </Card>
    ),
    pre: ({ children, ...props }) => (
      <pre {...props} className="nd-codeblock">
        {children}
      </pre>
    ),
    code: ({ children }) => (
      <code className="bg-white/5 px-1.5 py-0.5 font-mono text-zinc-300 text-[0.9em]">
        {children}
      </code>
    ),
    h1: (props) => (
      <h1
        {...props}
        className="text-white font-medium tracking-tight text-4xl mb-6"
      />
    ),
    h2: (props) => (
      <h2
        {...props}
        className="text-white font-medium tracking-tight text-2xl mt-12 mb-4 border-none"
      />
    ),
    hr: () => <hr className="border-white/5 my-12" />,
    button: (props) => (
      <button {...props} className="rounded-none transition-all" />
    ),
  }
}
