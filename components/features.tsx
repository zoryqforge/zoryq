import { Nfc, QrCode, IdCard, RefreshCw, Link2, Sparkles } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const features = [
  {
    icon: Nfc,
    title: 'One-Tap Sharing',
    desc: 'Share your digital identity instantly using NFC.',
  },
  {
    icon: QrCode,
    title: 'QR Code Access',
    desc: "People can scan your card when NFC isn't available.",
  },
  {
    icon: IdCard,
    title: 'Digital Profile',
    desc: 'Create a professional profile containing your important information.',
  },
  {
    icon: RefreshCw,
    title: 'Easy Updates',
    desc: 'Change your details anytime without printing a new card.',
  },
  {
    icon: Link2,
    title: 'Social & Business Links',
    desc: 'Connect your website, social media, portfolio, booking links and more.',
  },
  {
    icon: Sparkles,
    title: 'Professional Design',
    desc: 'Make every introduction feel polished and memorable.',
  },
]

export function Features() {
  return (
    <section id="features" className="relative overflow-hidden py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,#f6f1ff,transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Features"
          title="Everything You Need. One Smart Card."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={(i % 3) * 100}>
              <div className="group h-full rounded-3xl border border-neutral-200/80 bg-white p-7 shadow-lg shadow-brand-purple/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-purple/20 hover:shadow-xl hover:shadow-brand-purple/10">
                <span className="grid size-12 place-items-center rounded-2xl bg-brand-purple/10 text-brand-purple transition-colors group-hover:bg-gradient-brand group-hover:text-white">
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
      </div>
    </section>
  )
}
