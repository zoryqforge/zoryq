import { Phone, Mail, MapPin } from 'lucide-react'
import { ZoryqLogo } from './zoryq-logo'
import {
  LinkedinIcon,
  InstagramIcon,
  XIcon,
  FacebookIcon,
} from './social-icons'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#cta' },
]

const contact = [
  { icon: Phone, text: '+254 101 832 312' },
  { icon: Mail, text: 'hello@zoryq.com' },
  { icon: MapPin, text: 'Nairobi, Kenya' },
]

const socials = [
  { icon: LinkedinIcon, label: 'LinkedIn' },
  { icon: InstagramIcon, label: 'Instagram' },
  { icon: XIcon, label: 'X' },
  { icon: FacebookIcon, label: 'Facebook' },
]

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-brand-purple text-white">
      <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-brand-orange opacity-10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <ZoryqLogo variant="light" />
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-orange-light">
              The Future Is Now
            </p>
            <p className="mt-4 max-w-sm text-pretty text-sm leading-relaxed text-white/70">
              Smart digital business cards for modern professionals, businesses
              and creators.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors hover:bg-brand-orange hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white/90">
              Explore
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white/90">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              {contact.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-center gap-3 text-sm text-white/70"
                >
                  <Icon className="size-4 text-brand-orange-light" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/60">
            © 2026 ZORYQ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
