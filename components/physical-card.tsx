import { Nfc, ArrowRight } from 'lucide-react'
import { Reveal } from './reveal'
import { NfcCard } from './nfc-card'

export function PhysicalCard() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#faf7ff,#ffffff)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal className="flex justify-center">
          <div className="relative w-full max-w-md [perspective:1400px]">
            <div className="absolute inset-0 -z-10 scale-110 bg-[radial-gradient(circle_at_center,#efe6ff,transparent_60%)]" />
            <div className="animate-float [transform:rotateY(-14deg)_rotateX(6deg)]">
              <NfcCard variant="white" />
            </div>
            <div className="mt-6 translate-x-8 animate-float-slow [transform:rotateY(-14deg)_rotateX(6deg)]">
              <NfcCard variant="purple" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">
            Physical Card
          </span>
          <h2 className="mt-2 text-balance text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
            Your Business Card, Reimagined.
          </h2>
          <p className="mt-4 text-pretty text-lg font-medium text-neutral-700">
            Elegant on the outside. Powerful on the inside.
          </p>
          <p className="mt-4 max-w-lg text-pretty text-base leading-relaxed text-neutral-600">
            A premium white finish with a subtle purple and orange curved design,
            embedded NFC and a scannable QR code. One card that carries your
            entire digital identity.
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href="#cta"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-purple/25 transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Order Your Card
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500">
              <Nfc className="size-4 text-brand-orange" />
              Tap or scan to connect.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
