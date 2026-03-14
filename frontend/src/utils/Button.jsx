import React from 'react'

const Button = ({ children }) => {
  return (
      <button className='group px-10 py-4 flex items-center gap-3 rounded-full bg-[var(--color-primary)] text-[var(--color-bg)] font-semibold hover:bg-[var(--color-primary-hover)] transition-colors'>
        {children}
              </button>
  )
}

export default Button