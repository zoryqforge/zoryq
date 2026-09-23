import { Briefcase, Building2, Rocket, Palette } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const audiences = [
  {
    icon: Briefcase,
    title: 'Professionals',
    desc: 'Networking made simple and memorable.',
  },
  {
    icon: Building2,
    title: 'Businesses',
    desc: 'Give your team a consistent digital identity.',
  },
  {
    icon: Rocket,
    title: 'Entrepreneurs',
    desc: 'Share your brand and services wherever you go.',
  },
  {
    icon: Palette,
    title: 'Creators',
    desc: 'Connect audiences to your content, platforms and services.',
  },
]

export function WhoItsFor() {
  return (
    <section
      id="use-cases"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <SectionHeading
        eyebrow="Use Cases"
        title="Built for People Who Connect."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {audiences.map(({ icon: Icon, title, desc }, i) => (
          <Reveal key={title} delay={i * 90}>
            <div className="group relative h-full overflow-hidden rounded-3xl border border-neutral-200/80 bg-white p-7 text-center shadow-lg shadow-brand-purple/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-purple/10">
              <div className="pointer-events-none absolute -top-10 left-1/2 size-32 -translate-x-1/2 rounded-full bg-gradient-brand opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-10" />
              <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-gradient-brand text-white shadow-lg shadow-brand-purple/20">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-neutral-900">
                {title}
              </h3>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-neutral-500">
                {desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
