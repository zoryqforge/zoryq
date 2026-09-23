import { ArrowRight, Nfc, BadgeCheck, RefreshCw } from 'lucide-react'
import { Reveal } from './reveal'
import { PhoneMockup } from './phone-mockup'
import { NfcCard } from './nfc-card'

const benefits = [
  { icon: Nfc, label: 'One Tap Sharing' },
  { icon: BadgeCheck, label: 'Professional Identity' },
  { icon: RefreshCw, label: 'Easy Updates' },
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* soft background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,#f3ecff,transparent_45%),radial-gradient(circle_at_100%_10%,#fff0e6,transparent_40%)]" />
        <svg
          className="absolute right-0 top-0 h-full w-full opacity-40"
          viewBox="0 0 1200 700"
          fill="none"
          preserveAspectRatio="xMaxYMid slice"
          aria-hidden="true"
        >
          <path
            d="M-100 500C200 350 400 620 700 420S1100 150 1400 300"
            stroke="url(#hg)"
            strokeWidth="1.5"
          />
          <path
            d="M-100 560C200 410 450 640 750 460S1150 220 1400 360"
            stroke="url(#hg)"
            strokeWidth="1.5"
          />
          <path
            d="M-100 440C220 300 420 560 720 380S1120 120 1400 250"
            stroke="url(#hg)"
            strokeWidth="1"
          />
          <defs>
            <linearGradient id="hg" x1="0" y1="0" x2="1200" y2="0">
              <stop stopColor="#6d3bd4" stopOpacity="0.5" />
              <stop offset="0.5" stopColor="#a21caf" stopOpacity="0.5" />
              <stop offset="1" stopColor="#f56600" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pb-28 lg:pt-20">
        {/* left */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-purple/15 bg-white/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-brand-purple shadow-sm">
              <span className="size-1.5 rounded-full bg-brand-orange" />
              Smart Digital Identity
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Smart{' '}
              <span className="text-gradient-brand">Digital Business Cards</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-4 text-xl font-semibold text-neutral-800">
              Tap. Share. Connect instantly.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-neutral-600">
              Share your profile, contacts, links, social media, and services in
              one simple tap. ZORYQ helps professionals, businesses, and creators
              make every connection count.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#cta"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-purple/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-purple/30"
              >
                Get Your ZORYQ Card
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-3.5 text-sm font-semibold text-neutral-800 transition-all hover:border-brand-purple/30 hover:text-brand-purple"
              >
                See How It Works
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
              {benefits.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 text-sm font-medium text-neutral-700"
                >
                  <span className="grid size-7 place-items-center rounded-full bg-brand-purple/10 text-brand-purple">
                    <Icon className="size-4" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* right — product mockup */}
        <Reveal delay={200} className="relative">
          <div className="relative mx-auto flex max-w-md justify-center">
            {/* glow */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,#e9ddff,transparent_65%)]" />

            <div className="animate-float [perspective:1200px]">
              <div className="[transform:rotateY(-12deg)_rotateX(4deg)]">
                <PhoneMockup />
              </div>
            </div>

            {/* physical card in front */}
            <div className="absolute -bottom-6 left-1/2 w-64 -translate-x-[70%] animate-float-slow sm:w-72">
              <NfcCard variant="purple" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
