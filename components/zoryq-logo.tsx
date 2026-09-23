import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  /** color of the wordmark text */
  variant?: 'dark' | 'light'
}

export function ZoryqLogo({ className, variant = 'dark' }: LogoProps) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <span className="grid size-9 place-items-center rounded-xl bg-gradient-brand shadow-lg shadow-brand-purple/25">
        <svg
          viewBox="0 0 24 24"
          className="size-5 text-white"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M6 6h12L8 18h10"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span
        className={cn(
          'text-xl font-extrabold tracking-tight',
          variant === 'dark' ? 'text-brand-purple' : 'text-white',
        )}
      >
        ZORYQ
      </span>
    </span>
  )
}
