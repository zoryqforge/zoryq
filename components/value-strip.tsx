import { Zap, BadgeCheck, RefreshCw, Leaf } from 'lucide-react'
import { Reveal } from './reveal'

const items = [
  {
    icon: Zap,
    title: 'One Tap Sharing',
    desc: 'Instantly share your digital profile.',
  },
  {
    icon: BadgeCheck,
    title: 'Professional Identity',
    desc: 'Make a strong impression everywhere you connect.',
  },
  {
    icon: RefreshCw,
    title: 'Easy Updates',
    desc: 'Update your information without replacing your card.',
  },
  {
    icon: Leaf,
    title: 'No Paper Waste',
    desc: 'A smarter way to share your contact details.',
  },
]

export function ValueStrip() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-4 rounded-3xl border border-neutral-200/80 bg-white p-6 shadow-xl shadow-brand-purple/5 sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, desc }, i) => (
          <Reveal
            key={title}
            delay={i * 80}
            className="flex items-start gap-3.5"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-brand text-white shadow-md shadow-brand-purple/20">
              <Icon className="size-5" />
            </span>
            <div>
              <h3 className="text-[13px] font-bold uppercase tracking-wide text-neutral-900">
                {title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                {desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
