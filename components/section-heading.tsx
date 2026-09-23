import { cn } from '@/lib/utils'
import { Reveal } from './reveal'

interface Props {
  eyebrow?: string
  title: string
  subtitle?: string
  className?: string
  align?: 'center' | 'left'
  invert?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
  align = 'center',
  invert = false,
}: Props) {
  return (
    <Reveal
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'text-xs font-semibold uppercase tracking-[0.18em]',
            invert ? 'text-brand-orange-light' : 'text-brand-orange',
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'mt-2 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl',
          invert ? 'text-white' : 'text-neutral-900',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-3 text-pretty text-base leading-relaxed',
            invert ? 'text-white/70' : 'text-neutral-500',
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
