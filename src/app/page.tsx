import Link from 'next/link'
import { Show, UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <header className="flex items-center justify-between border-b border-[#e2e8f0] px-8 py-5">
        <Link href="/" className="text-lg font-semibold tracking-tight text-[#0f172a]">
          pipelined
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/community" className="text-[#64748b] hover:text-[#0f172a]">
            Community
          </Link>
          <Show when="signed-out">
            <Link href="/sign-in" className="text-[#64748b] hover:text-[#0f172a]">
              Sign in
            </Link>
            <Link
              href="/sign-up"
              className="rounded-md bg-[#6366f1] px-3 py-1.5 text-white hover:bg-[#4f46e5]"
            >
              Get started
            </Link>
          </Show>
          <Show when="signed-in">
            <Link
              href="/dashboard"
              className="rounded-md bg-[#6366f1] px-3 py-1.5 text-white hover:bg-[#4f46e5]"
            >
              Open dashboard
            </Link>
            <UserButton />
          </Show>
        </nav>
      </header>
      <section className="mx-auto max-w-3xl px-8 py-24 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-[#0f172a] sm:text-5xl">
          Track your CS recruiting pipeline.
        </h1>
        <p className="mt-5 text-lg text-[#64748b]">
          Stop managing applications in spreadsheets. pipelined gives you a visual pipeline,
          analytics, and a community-powered question bank — for free.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Show when="signed-out">
            <Link
              href="/sign-up"
              className="rounded-md bg-[#6366f1] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#4f46e5]"
            >
              Get started free →
            </Link>
          </Show>
          <Show when="signed-in">
            <Link
              href="/dashboard"
              className="rounded-md bg-[#6366f1] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#4f46e5]"
            >
              Go to dashboard →
            </Link>
          </Show>
          <Link
            href="/community"
            className="rounded-md border border-[#e2e8f0] bg-white px-5 py-2.5 text-sm font-medium text-[#0f172a] hover:bg-[#f8fafc]"
          >
            View question bank
          </Link>
        </div>
        <p className="mt-12 text-xs text-[#94a3b8]">
          Day 1 scaffold. Full marketing page lands in Day 6.
        </p>
      </section>
    </main>
  )
}
