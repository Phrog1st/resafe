"use client"

import { useState } from "react"
import { SiGithub } from "react-icons/si"
import {
  HiOutlineShieldCheck,
  HiOutlineCpuChip,
  HiOutlineCodeBracket,
  HiOutlineClipboard,
  HiCheck,
} from "react-icons/hi2"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const [copied, setCopied] = useState(false)
  const npmCommand = "npm i resafe"

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(npmCommand)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy!", err)
    }
  }

  return (
    <div className="min-h-screen bg-[#080808] text-zinc-400 font-sans selection:bg-white selection:text-black">
      <nav className="fixed top-0 w-full z-50 px-8 h-20 flex items-center justify-between border-b border-white/5 bg-[#080808]/80 backdrop-blur-md">
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
        <div className="flex items-center gap-8">
          <Link
            href="https://github.com/ofabiodev/resafe"
            className="hover:text-white transition-colors"
          >
            <SiGithub size={18} />
          </Link>
          <Link
            href="/docs"
            className="text-[10px] font-bold text-white tracking-[0.2em] border border-white/10 px-4 py-2 rounded-none hover:bg-white hover:text-black transition-all"
          >
            DOCUMENTATION
          </Link>
        </div>
      </nav>

      <main className="pt-44">
        <section className="px-8 max-w-5xl mx-auto">
          <div className="space-y-12">
            <h1 className="text-6xl md:text-8xl font-medium text-white tracking-tight leading-[1.1]">
              Intelligent <br />
              <span className="text-zinc-700">ReDoS Detection.</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <p className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-md">
                Mathematical ReDoS detection using Thompson NFA construction,
                epsilon transition elimination, and spectral radius analysis to
                identify exponential backtracking patterns.
              </p>

              <div className="space-y-6">
                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="w-full group flex items-center justify-between p-4 border border-white/8 bg-white/2 hover:bg-white/4 hover:border-white/20 transition-all cursor-pointer outline-none"
                >
                  <div className="flex items-center gap-4">
                    <HiOutlineCodeBracket className="text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                    <code className="text-sm font-mono text-zinc-300">
                      {npmCommand}
                    </code>
                  </div>
                  <div className="flex items-center justify-center w-5 h-5">
                    {copied ? (
                      <HiCheck className="text-green-500 animate-in zoom-in duration-300" />
                    ) : (
                      <HiOutlineClipboard className="text-zinc-700 group-hover:text-white transition-colors" />
                    )}
                  </div>
                </button>

                <div className="flex gap-3">
                  {[
                    "Spectral Analysis",
                    "Thompson NFA",
                    "Zero False Positives",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-600 border border-white/8 px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-40 px-8 border-t border-white/5">
          <div className="max-w-5xl mx-auto py-24 grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <HiOutlineShieldCheck className="text-white w-5 h-5" />,
                title: "Spectral Analysis",
                desc: "Constructs Thompson NFA, eliminates epsilon transitions, and computes spectral radius of adjacency matrix to detect exponential growth.",
              },
              {
                icon: <HiOutlineCpuChip className="text-white w-5 h-5" />,
                title: "Deterministic Detection",
                desc: "Analyzes automaton structure mathematically without executing test strings. Eigenvalue > 1 indicates exponential backtracking vulnerability.",
              },
              {
                icon: (
                  <div className="w-5 h-5 border border-white rounded-none flex items-center justify-center text-[9px] font-bold text-white">
                    λ
                  </div>
                ),
                title: "Eigenvalue Analysis",
                desc: "Uses power iteration to compute largest eigenvalue of transition matrix. Mathematical proof guarantees accurate ReDoS detection.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group space-y-4 p-6 -m-6 border border-transparent hover:border-white/5 hover:bg-white/1 transition-all"
              >
                {feature.icon}
                <h3 className="text-white font-medium">{feature.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-8 pb-32">
          <div className="max-w-5xl mx-auto bg-white/2 border border-white/8 p-12 rounded-none flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <h4 className="text-white font-medium text-2xl tracking-tight">
                Prevent ReDoS attacks. Secure by default.
              </h4>
              <p className="text-zinc-500 text-sm">
                Stop catastrophic backtracking before it freezes your event
                loop.
              </p>
            </div>
            <Link
              href="/docs"
              className="whitespace-nowrap bg-white text-black px-10 py-4 font-bold text-[11px] tracking-[0.2em] hover:bg-zinc-200 transition-all rounded-none"
            >
              GET STARTED
            </Link>
          </div>
        </section>
      </main>

      <footer className="px-8 py-12 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-mono tracking-[0.4em] text-zinc-700 uppercase">
            {/** biome-ignore lint/suspicious/noCommentText: copyright notice with comment syntax */}
            © 2024 Resafe // ReDoS Protection
          </div>
          <div className="flex gap-8 text-[10px] font-mono tracking-[0.2em] uppercase">
            {["GitHub", "NPM", "Docs"].map((link) => (
              <Link
                key={link}
                href="#"
                className="hover:text-white transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
