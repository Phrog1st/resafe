import { source } from "@/lib/source"
import { DocsLayout } from "fumadocs-ui/layouts/docs"
import { baseOptions } from "@/lib/layout.shared"
import type { ReactNode } from "react"
import Image from "next/image"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions}
      nav={{
        title: (
          <div className="flex items-center gap-2">
            <Image
              src="https://raw.githubusercontent.com/ofabiodev/resafe/main/.github/assets/logo.svg"
              width={25}
              height={25}
              alt="R"
            />
            <span className="text-white font-medium tracking-tighter text-lg">
              RESAFE
            </span>
          </div>
        ),
      }}
      sidebar={{
        collapsible: false,
      }}
    >
      {children}
    </DocsLayout>
  )
}
