import Image from 'next/image'
import { Nfc } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ZoryqLogo } from './zoryq-logo'

/** A small pure-CSS QR-style glyph so it reads as a scannable code. */
function QrGlyph({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'grid grid-cols-5 grid-rows-5 gap-[2px] rounded-md bg-white p-1.5',
        className,
      )}
      aria-hidden="true"
    >
      {[
        1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1,
        1,
      ].map((on, i) => (
        <span
          key={i}
          className={cn(
            'rounded-[1px]',
            on ? 'bg-neutral-900' : 'bg-transparent',
          )}
        />
      ))}
    </div>
  )
}

export function NfcCard({
  className,
  variant = 'white',
}: {
  className?: string
  variant?: 'white' | 'purple'
}) {
  const isPurple = variant === 'purple'
  return (
    <div
      className={cn(
        'relative aspect-[1.6/1] w-full overflow-hidden rounded-3xl border p-6 shadow-2xl',
        isPurple
          ? 'border-white/10 bg-brand-purple text-white shadow-brand-purple/40'
          : 'border-neutral-200 bg-white text-neutral-900 shadow-brand-purple/15',
        className,
      )}
    >
      {/* curved abstract lines */}
      <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-gradient-brand opacity-20 blur-2xl" />
      <div
        className={cn(
          'pointer-events-none absolute -bottom-24 -left-10 size-64 rounded-full opacity-20 blur-3xl',
          isPurple ? 'bg-brand-orange' : 'bg-brand-purple',
        )}
      />
      <svg
        className="pointer-events-none absolute inset-0 size-full opacity-[0.12]"
        viewBox="0 0 320 200"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M-20 150C60 90 120 210 200 140S320 40 360 90"
          stroke="url(#cardgrad)"
          strokeWidth="2"
        />
        <path
          d="M-20 180C60 120 140 200 220 150S320 70 360 120"
          stroke="url(#cardgrad)"
          strokeWidth="2"
        />
        <defs>
          <linearGradient id="cardgrad" x1="0" y1="0" x2="360" y2="0">
            <stop stopColor="#6d3bd4" />
            <stop offset="0.5" stopColor="#a21caf" />
            <stop offset="1" stopColor="#f56600" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-start justify-between">
          <ZoryqLogo variant={isPurple ? 'light' : 'dark'} />
          <Nfc
            className={cn(
              'size-7',
              isPurple ? 'text-brand-orange-light' : 'text-brand-orange',
            )}
          />
        </div>

        <div className="flex items-end justify-between">
          <div className="flex items-center gap-3">
            <div
              className={cn(
                'size-14 shrink-0 overflow-hidden rounded-full border-2 shadow-md',
                isPurple ? 'border-white/40' : 'border-brand-purple/20',
              )}
            >
              <Image
                src="/images/david-avatar.png"
                alt="David Mwangi"
                width={56}
                height={56}
                className="size-full object-cover"
              />
            </div>
            <div>
              <p
                className={cn(
                  'text-[11px] font-semibold uppercase tracking-[0.2em]',
                  isPurple ? 'text-white/60' : 'text-neutral-400',
                )}
              >
                The future is now
              </p>
              <p className="mt-1 text-lg font-bold">David Mwangi</p>
              <p
                className={cn(
                  'text-sm',
                  isPurple ? 'text-white/70' : 'text-neutral-500',
                )}
              >
                Marketing Consultant
              </p>
            </div>
          </div>
          <QrGlyph className="size-14" />
        </div>
      </div>
    </div>
  )
}
