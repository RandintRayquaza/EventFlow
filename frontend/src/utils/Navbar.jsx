import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full py-6 flex items-center justify-between px-8 md:px-16 lg:px-24 bg-[var(--color-bg)] text-[var(--color-text)] font-sans fixed top-0 left-0 z-50 border-b border-[var(--color-border)] backdrop-blur-sm absolute top-0 left-0 w-full h-24 flex items-center justify-between px-8 md:px-16 lg:px-24 bg-[var(--color-bg)] text-[var(--color-text)] font-sans'>
      <div className='text-2xl font-bold text-[var(--color-primary)]'>EventFlow</div>
      <div className='flex items-center gap-6'>
        <a href='#' className='text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors'>Home</a>
        <a href='#' className='text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors'>Features</a>
        <a href='#' className='text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors'>Pricing</a>
        <a href='#' className='text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors'>Contact</a>
      </div>
    </nav>
  )
}

export default Navbar