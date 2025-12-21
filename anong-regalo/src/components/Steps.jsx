import React from 'react'

const Steps = () => {
  return (
    <section className='w-full h-[150px] flex justify-center mt-10 px-3'>
        <div className='w-full h-full md:w-[40%] flex items-center  justify-center px-2'>
            <div className='flex flex-col items-center gap-2 '>
                <div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] bg-gray-200 rounded-full flex justify-center items-center text-1xl md:text-2xl text-[#D32F2F] border border-[#D32F2F]'>1</div>
                <p className='text-1xl md:text-2xl'>Event</p>
            </div>  
            <div className='h-px w-8 sm:w-16 md:w-[200px] bg-gray-300 mb-10 ml-3 mr-3 shrink-0'></div>
            <div className='flex flex-col items-center gap-2 '>
                <div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] bg-gray-200 rounded-full flex justify-center items-center text-1xl md:text-2xl'>2</div>
                <p className='text-1xl md:text-2xl'>Person</p>
            </div>  

             <div className='h-px w-8 sm:w-16 md:w-[200px] bg-gray-300 mb-10 ml-3 mr-3 shrink-0'></div>
            <div className='flex flex-col items-center gap-2 '>
                <div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] bg-gray-200 rounded-full flex justify-center items-center text-1xl md:text-2xl'>3</div>
                <p className='text-1xl md:text-2xl'>Details</p>
            </div>  

                 <div className='h-px w-8 sm:w-16 md:w-[200px] bg-gray-300 mb-10 ml-3 mr-3 shrink-0'></div>
            <div className='flex flex-col items-center gap-2 '>
                <div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] bg-gray-200 rounded-full flex justify-center items-center text-1xl md:text-2xl'>4</div>
                <p className='text-1xl md:text-2xl'>Ideas</p>
            </div>  
      
        </div>
          
    </section>
  )
}

export default Steps
