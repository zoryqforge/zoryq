import { Check } from 'lucide-react'
import { Reveal } from './reveal'
import { PhoneMockup } from './phone-mockup'

const includes = [
  'Profile photo, name & job title',
  'Short bio that tells your story',
  'Phone, email, website & location',
  'All your social & business links',
  'Save Contact & Share Profile actions',
]

export function ProfileShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">
            Digital Profile
          </span>
          <h2 className="mt-2 text-balance text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
            Your Entire Professional Identity. In One Place.
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-neutral-600">
            Give people more than a phone number. Give them a complete digital
            profile they can explore, save and share.
          </p>

          <ul className="mt-8 space-y-3.5">
            {includes.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-purple/10 text-brand-purple">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium text-neutral-700">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-full bg-brand-purple px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-purple/25 transition-all hover:-translate-y-0.5"
            >
              Create Your Profile
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full bg-brand-orange/10 px-6 py-3.5 text-sm font-semibold text-brand-orange transition-all hover:bg-brand-orange/15"
            >
              Explore Features
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="order-1 flex justify-center lg:order-2">
          <div className="relative">
            <div className="absolute inset-0 -z-10 scale-125 bg-[radial-gradient(circle_at_center,#efe6ff,transparent_65%)]" />
            <div className="animate-float">
              <PhoneMockup />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
