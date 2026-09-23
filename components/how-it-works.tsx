import { Nfc, Share2, Users } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const steps = [
  {
    num: '01',
    title: 'Tap',
    icon: Nfc,
    desc: 'Simply tap your ZORYQ card against a compatible smartphone.',
  },
  {
    num: '02',
    title: 'Share',
    icon: Share2,
    desc: 'Your digital profile opens instantly with your contact details and links.',
  },
  {
    num: '03',
    title: 'Connect',
    icon: Users,
    desc: 'Let people save your contact, visit your links, or connect with your services.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <SectionHeading
        eyebrow="How It Works"
        title="How ZORYQ Works"
        subtitle="Connect with anyone in seconds."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {steps.map(({ num, title, icon: Icon, desc }, i) => (
          <Reveal key={num} delay={i * 120}>
            <div className="group relative h-full overflow-hidden rounded-3xl border border-neutral-200/80 bg-white p-8 shadow-lg shadow-brand-purple/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-purple/20 hover:shadow-xl hover:shadow-brand-purple/10">
              <span className="pointer-events-none absolute -right-2 -top-4 text-8xl font-extrabold text-neutral-100 transition-colors group-hover:text-brand-purple/10">
                {num}
              </span>
              <div className="relative">
                <span className="grid size-14 place-items-center rounded-2xl bg-gradient-brand text-white shadow-lg shadow-brand-purple/25">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-6 text-xl font-bold text-neutral-900">
                  {title}
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-neutral-500">
                  {desc}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
