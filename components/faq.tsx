'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const faqs = [
  {
    q: 'What is a ZORYQ digital business card?',
    a: 'ZORYQ is a smart NFC-enabled business card linked to your online profile. Instead of handing over paper, you share a complete digital identity — contacts, links and services — with a single tap or scan.',
  },
  {
    q: 'How does NFC sharing work?',
    a: 'Your card has a tiny NFC chip inside. When you tap it against a compatible smartphone, your ZORYQ profile opens instantly in the browser — no app required for the person receiving it.',
  },
  {
    q: 'Can someone use my card without NFC?',
    a: 'Yes. Every ZORYQ card includes a QR code. If a phone does not support NFC, people can simply scan the code to open your profile.',
  },
  {
    q: 'Can I update my information later?',
    a: 'Absolutely. Your profile lives online, so you can update your details, links and photo anytime. Your card keeps working — no reprinting needed.',
  },
  {
    q: 'Can I use ZORYQ for my business team?',
    a: 'Yes. ZORYQ is built for teams too. Give everyone a consistent, branded digital identity and manage profiles from one place.',
  },
  {
    q: "Do I need an app to receive someone's profile?",
    a: 'No app is required. ZORYQ profiles open directly in any modern web browser, so anyone can view and save your details instantly.',
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200/80 bg-white transition-colors hover:border-brand-purple/20">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-base font-semibold text-neutral-900">{q}</span>
        <span
          className={cn(
            'grid size-8 shrink-0 place-items-center rounded-full bg-brand-purple/10 text-brand-purple transition-transform duration-300',
            open && 'rotate-45 bg-gradient-brand text-white',
          )}
        >
          <Plus className="size-4" />
        </span>
      </button>
      <div
        className={cn(
          'grid transition-all duration-300 ease-out',
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-pretty text-sm leading-relaxed text-neutral-500">
            {a}
          </p>
        </div>
      </div>
    </div>
  )
}

export function Faq() {
  return (
    <section
      id="faq"
      className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently Asked Questions"
      />
      <div className="mt-12 space-y-3">
        {faqs.map((item, i) => (
          <Reveal key={item.q} delay={i * 60}>
            <FaqItem {...item} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
