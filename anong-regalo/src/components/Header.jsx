import React from 'react'
import Logo from '../assets/logo.png'
const Header = () => {
  return (
    <header className='w-full h-[70px] md:h-[100px] flex justify-center shadow-md'>
        <div className='w-full md:w-[50%] flex justify-between px-5'>
            <div className='flex flex-1 flex-nowrap items-center'>
                <img src={Logo} alt="" className='shrink-0 w-[60px] h-[60px] md:w-[100px] md:h-[100px]'/>
                <h1 className='ml-2 text-1xl md:text-2xl text-[#D32F2F] whitespace-nowrap'>Anong Regalo?</h1>
         </div>
          <div className='hidden w-[15%] md:flex md:items-center'>
                <button className='text-1xl text-white border px-5 py-2 bg-[#D32F2F] cursor-pointer whitespace-nowrap'>Hanap Regalo</button>
            </div>
        
        </div>
      
    </header>
  )
}

    export default Header
