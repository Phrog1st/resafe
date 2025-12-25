import { HomeLayout } from "fumadocs-ui/layouts/home"
import { baseOptions } from "@/lib/layout.shared"
import type { Metadata } from "next"

export default function Layout({ children }: LayoutProps<"/">) {
  return <HomeLayout {...baseOptions()}>{children}</HomeLayout>
}

export const metadata: Metadata = {
  title: "Resafe",
  icons: {
    icon: "https://raw.githubusercontent.com/ofabiodev/resafe/main/.github/assets/logo.svg",
  },
  description:
    "Detects ReDoS vulnerabilities in regexes using Thompson NFA construction and spectral radius analysis. Stop catastrophic backtracking before it freezes your event loop.",
  keywords: [
    "regex",
    "redos",
    "regexp",
    "security",
    "vulnerability",
    "performance",
    "analyzer",
    "validation",
    "backtracking",
    "lightweight",
  ],
  authors: [
    {
      name: "ofabiodev",
      url: "https://github.com/ofabiodev",
    },
  ],
}
