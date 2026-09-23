import { ArrowRight } from 'lucide-react'
import { Reveal } from './reveal'

export function CtaSection() {
  return (
    <section id="cta" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-purple px-6 py-16 text-center shadow-2xl shadow-brand-purple/30 sm:px-12 lg:py-20">
          {/* orange glow + curves */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 top-0 size-72 rounded-full bg-brand-orange opacity-25 blur-3xl" />
            <div className="absolute -right-16 -bottom-20 size-80 rounded-full bg-brand-magenta opacity-30 blur-3xl" />
            <svg
              className="absolute inset-0 size-full opacity-20"
              viewBox="0 0 1200 400"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M-50 260C200 160 400 340 650 240S1050 100 1250 200"
                stroke="url(#ctag)"
                strokeWidth="2"
              />
              <path
                d="M-50 320C200 220 450 360 700 280S1100 160 1250 260"
                stroke="url(#ctag)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient id="ctag" x1="0" y1="0" x2="1200" y2="0">
                  <stop stopColor="#ffffff" stopOpacity="0.4" />
                  <stop offset="1" stopColor="#ff8a3d" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Make Every Connection Count?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/75">
              Upgrade the way you share your professional identity with ZORYQ.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#home"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-brand-orange-light"
              >
                Get Your ZORYQ Card
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/10"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
