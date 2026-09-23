'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ZoryqLogo } from './zoryq-logo'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'border-b border-neutral-200/70 bg-white/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-white/0',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" aria-label="ZORYQ home">
          <ZoryqLogo />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-neutral-600 transition-colors hover:text-brand-purple"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#cta"
          className="hidden rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-purple/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-purple/30 md:inline-flex"
        >
          Get Your Card
        </a>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-lg text-neutral-700 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-neutral-200/70 bg-white transition-[max-height] duration-300 md:hidden',
          open ? 'max-h-96' : 'max-h-0 border-t-0',
        )}
      >
        <ul className="space-y-1 px-4 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-neutral-700 hover:bg-neutral-50"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-gradient-brand px-5 py-3 text-center text-base font-semibold text-white"
            >
              Get Your Card
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
