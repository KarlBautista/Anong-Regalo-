import React from 'react'

const Footer = () => {
  return (
  <section className='w-full h-[100px] flex justify-center border-t border-gray-300'>
    <div className='w-full md:w-[40%] h-full flex items-center justify-between px-5'>
            <div>
                <h1 className='text-1xl text-gray-600'>@2025 Karl Bautista</h1>
            </div>
      <div className='flex items-center gap-4'>
        <a href='https://www.facebook.com/karl.bautista.254770' target='_blank' rel='noreferrer' aria-label='Facebook' className='leading-none text-gray-600 hover:text-[#D32F2F] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D32F2F] focus-visible:ring-offset-2 rounded'>
          <svg viewBox='0 0 24 24' className='w-6 h-6 md:w-7 md:h-7' fill='none' stroke='currentColor' strokeWidth='1.7' strokeLinecap='round' strokeLinejoin='round'>
            <path d='M22 12a10 10 0 1 0-11.5 9.9V15h-2v-3h2v-2.3c0-2 1.2-3.2 3-3.2.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.3V12h2.2l-.4 3H13v6.9A10 10 0 0 0 22 12Z' />
          </svg>
        </a>
        <a href='https://www.linkedin.com/in/karl-bautista-86417b308/' target='_blank' rel='noreferrer' aria-label='LinkedIn' className='leading-none text-gray-600 hover:text-[#D32F2F] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D32F2F] focus-visible:ring-offset-2 rounded'>
          <svg viewBox='0 0 24 24' className='w-6 h-6 md:w-7 md:h-7' fill='none' stroke='currentColor' strokeWidth='1.7' strokeLinecap='round' strokeLinejoin='round'>
            <path d='M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z' />
            <path d='M8 11v7' />
            <path d='M8 8.5h0.01' />
            <path d='M12 18v-4.2c0-1.7 1-2.8 2.5-2.8S17 12 17 13.8V18' />
          </svg>
        </a>
        <a href='https://github.com/KarlBautista' target='_blank' rel='noreferrer' aria-label='GitHub' className='leading-none text-gray-600 hover:text-[#D32F2F] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D32F2F] focus-visible:ring-offset-2 rounded'>
          <svg viewBox='0 0 24 24' className='w-6 h-6 md:w-7 md:h-7' fill='none' stroke='currentColor' strokeWidth='1.7' strokeLinecap='round' strokeLinejoin='round'>
            <path d='M9 19c-4 1.5-4-2.5-5-3' />
            <path d='M15 19v-3.5c0-1 .3-1.7.9-2.2 3-.3 6.1-1.5 6.1-6.5 0-1.3-.5-2.4-1.3-3.3.1-.3.6-1.6-.1-3.3 0 0-1.1-.3-3.4 1.3a11.7 11.7 0 0 0-6.2 0C8.8.4 7.7.7 7.7.7c-.7 1.7-.2 3-.1 3.3C6.8 4.9 6.3 6 6.3 7.3c0 5 3.1 6.2 6.1 6.5.4.4.6.9.7 1.5' />
            <path d='M9 19v-1.5' />
          </svg>
        </a>
            </div>
        </div>
      
    </section>
  )
}

export default Footer
