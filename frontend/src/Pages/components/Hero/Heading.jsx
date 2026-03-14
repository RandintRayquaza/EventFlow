import React from 'react'

const Heading = () => {
  return (
    
          <h1 
            className='text-6xl sm:text-7xl md:text-[7.5rem] lg:text-[9rem] font-black tracking-tighter leading-[0.85] text-[var(--color-text)]'
            style={{ fontFamily: "'Geist', sans-serif" }}
          >
            Zero Chaos. <br />
            <span className='font-light italic tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]'>
              Total Control.
            </span>
          </h1>
          
  )
}

export default Heading