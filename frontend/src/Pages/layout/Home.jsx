import React from 'react'
import { ArrowRight } from 'lucide-react'
import AmbientGlow from '../components/Hero/AmbientGlow'
import Heading from '../components/Hero/Heading'
import Para from '../components/Hero/Para'
import Button from '../../utils/Button'

const Home = () => {
  return (
    <div className='h-screen max-h-screen overflow-hidden w-full flex flex-col bg-[var(--color-bg)] text-[var(--color-text)] font-sans relative'>

      {/* Reserved Space for Navbar */}
      <div className='w-full h-24 shrink-0'></div>

      {/* Hero Section */}
      <main className='flex-1 flex flex-col items-center justify-center px-6 pb-24 relative'>
        <AmbientGlow />


        <div className='max-w-6xl w-full flex flex-col items-center text-center gap-8 md:gap-12 relative z-10'>

          <div className='inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[var(--color-surface)]/50 backdrop-blur-sm border border-[var(--color-border)] text-xs md:text-sm font-semibold tracking-widest text-[var(--color-text-muted)] uppercase'>
            <span className='w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse shadow-[0_0_10px_var(--color-accent)]'></span>

          </div>

          <Heading />
          <Para />
          {/* Reserved Space for CTAs */}
          <div className='flex items-center gap-4 mt-6'>
            <Button>   Get Started
              <ArrowRight size={20} className='group-hover:translate-x-1 transition-transform' /></Button>
          </div>

        </div>
      </main>
    </div>
  )
}

export default Home