import { source } from "@/lib/source"
import {
  DocsBody,
  DocsPage,
  DocsTitle,
  DocsDescription,
} from "fumadocs-ui/layouts/docs/page"
import { notFound } from "next/navigation"
import { getMDXComponents } from "@/components/mdx-components"
import { createRelativeLink } from "fumadocs-ui/mdx"
import type { Metadata } from "next"

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>
}) {
  const { slug } = await props.params
  const page = source.getPage(slug)
  if (!page) notFound()

  const MDX = page.data.body

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      tableOfContent={{ style: "clerk" }}
    >
      <header className="mb-16 pt-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600 border border-white/5 px-2 py-1">
            Resafe / {slug?.[0] || "Docs"}
          </span>
        </div>
        <DocsTitle className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[0.9] mb-6">
          {page.data.title}
        </DocsTitle>
        {page.data.description && (
          <DocsDescription className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-2xl">
            {page.data.description}
          </DocsDescription>
        )}
      </header>
      <DocsBody className="text-zinc-400 prose-invert max-w-none prose-headings:text-white prose-headings:font-medium prose-headings:tracking-tight prose-headings:border-none">
        <MDX
          components={getMDXComponents({ a: createRelativeLink(source, page) })}
        />
      </DocsBody>
    </DocsPage>
  )
}

export async function generateStaticParams() {
  return source.generateParams()
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>
}): Promise<Metadata> {
  const { slug } = await params
  const page = source.getPage(slug)
  if (!page) return { title: "Not Found" }

  return {
    title: `Resafe ▪ ${page.data.title}`,
    description: page.data.description,
    keywords: [
      "resafe",
      "redos",
      "regex",
      "security",
      "vulnerability",
      "performance",
    ],
    authors: [{ name: "ofabiodev", url: "https://github.com/ofabiodev" }],
    icons: {
      icon: "https://raw.githubusercontent.com/ofabiodev/resafe/main/.github/assets/logo.svg",
    },
  }
}
