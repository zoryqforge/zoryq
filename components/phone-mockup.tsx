import Image from 'next/image'
import { Mail, Phone, Globe, MapPin, Share2, UserPlus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { LinkedinIcon, InstagramIcon, XIcon } from './social-icons'

const socials = [
  { icon: LinkedinIcon, label: 'LinkedIn' },
  { icon: InstagramIcon, label: 'Instagram' },
  { icon: XIcon, label: 'X' },
]

const details = [
  { icon: Phone, text: '+254 101 832 312' },
  { icon: Mail, text: 'david@zoryq.com' },
  { icon: Globe, text: 'www.zoryq.com' },
  { icon: MapPin, text: 'Nairobi, Kenya' },
]

export function PhoneMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative w-[290px] rounded-[2.75rem] border-[6px] border-neutral-900 bg-neutral-900 shadow-2xl shadow-brand-purple/25',
        className,
      )}
    >
      {/* notch */}
      <div className="absolute left-1/2 top-2.5 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-neutral-900" />

      <div className="relative overflow-hidden rounded-[2.25rem] bg-white">
        {/* header banner */}
        <div className="relative h-28 bg-gradient-brand">
          <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_80%_-20%,white,transparent_60%)]" />
        </div>

        <div className="px-5 pb-6">
          {/* avatar */}
          <div className="-mt-12 flex flex-col items-center text-center">
            <div className="size-24 overflow-hidden rounded-full border-4 border-white bg-neutral-100 shadow-md">
              <Image
                src="/images/david-avatar.png"
                alt="Shem Collins"
                width={96}
                height={96}
                className="size-full object-cover"
              />
            </div>
            <h3 className="mt-3 text-lg font-bold text-neutral-900">
              Shem Collins
            </h3>
            <p className="text-sm font-medium text-brand-orange">
              Marketing Consultant
            </p>
            <p className="mt-2 text-pretty px-1 text-xs leading-relaxed text-neutral-500">
              Helping brands grow through smart, human-first marketing.
            </p>
          </div>

          {/* details */}
          <ul className="mt-5 space-y-2.5">
            {details.map(({ icon: Icon, text }) => (
              <li
                key={text}
                className="flex items-center gap-3 rounded-xl bg-neutral-50 px-3 py-2.5"
              >
                <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-brand-purple/10 text-brand-purple">
                  <Icon className="size-3.5" />
                </span>
                <span className="text-xs font-medium text-neutral-700">
                  {text}
                </span>
              </li>
            ))}
          </ul>

          {/* socials */}
          <div className="mt-4 flex justify-center gap-3">
            {socials.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="grid size-9 place-items-center rounded-full border border-neutral-200 text-neutral-600"
                aria-label={label}
              >
                <Icon className="size-4" />
              </span>
            ))}
          </div>

          {/* actions */}
          <div className="mt-5 space-y-2.5">
            <div className="flex items-center justify-center gap-2 rounded-xl bg-brand-purple py-3 text-sm font-semibold text-white">
              <UserPlus className="size-4" />
              Save Contact
            </div>
            <div className="flex items-center justify-center gap-2 rounded-xl bg-brand-orange/10 py-3 text-sm font-semibold text-brand-orange">
              <Share2 className="size-4" />
              Share Profile
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
