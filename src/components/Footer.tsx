'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import SectionBorder from './SectionBorder'

const NAME = 'Md Meraj Alam'
const LOCATION = 'India'

const QUOTES = [
  {
    text: 'When something is important enough, you do it even if the odds are not in your favor.',
    author: 'Elon Musk',
  },
  {
    text: 'The biggest risk is not taking any risk.',
    author: 'Mark Zuckerberg',
  },
  {
    text: 'The people who are crazy enough to think they can change the world are the ones who do.',
    author: 'Steve Jobs',
  },
  {
    text: 'I’ve decided to become the Pirate King. If I die trying, then at least I die fighting for my dream.',
    author: 'Monkey D. Luffy',
  },
  {
    text: "If you don't like your destiny, don't accept it.",
    author: 'Naruto Uzumaki',
  },
]

export default function Footer() {
  const [localTime, setLocalTime] = useState('')
  const [quoteIndex, setQuoteIndex] = useState(0)

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }
      setLocalTime(new Intl.DateTimeFormat('en-US', options).format(new Date()))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % QUOTES.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <footer className="w-full">
      {/* Rotating quote band */}
      <div className="flex min-h-[160px] select-none flex-col items-center justify-center px-4 py-12 text-center sm:px-12">
        <div className="flex min-h-[140px] w-full max-w-[580px] flex-col items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={quoteIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="flex flex-col items-center"
            >
              <span className="font-[family-name:var(--font-instrument-serif)] text-4xl leading-none text-neutral-300 dark:text-neutral-600">
                &ldquo;
              </span>
              <p className="mx-auto -mt-2 max-w-md font-[family-name:var(--font-instrument-serif)] text-[20px] italic leading-snug text-neutral-800 dark:text-neutral-100 sm:text-[22px]">
                {QUOTES[quoteIndex].text}
              </p>
              <p className="mt-4 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500">
                — {QUOTES[quoteIndex].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <SectionBorder className="mt-0 pt-0" />

      {/* Bottom bar */}
      <div className="px-4 py-8 text-center sm:px-12">
        <p className="text-[14.5px] text-neutral-500 dark:text-neutral-400">
          Designed &amp; Developed by{' '}
          <span className="font-semibold text-neutral-800 dark:text-neutral-100">{NAME}</span>
        </p>
        <p className="mt-1.5 font-mono text-[12px] text-neutral-400 dark:text-neutral-500">
          © {new Date().getFullYear()} All rights reserved.
        </p>
        <p className="mt-2.5 flex items-center justify-center gap-2 font-mono text-[12px] text-neutral-400 dark:text-neutral-500">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          {LOCATION} · {localTime || 'IST'}
        </p>
      </div>
    </footer>
  )
}
