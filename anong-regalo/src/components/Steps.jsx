import React from 'react'
import useUser from '../store/userInformation'
const Steps = () => {
    const { occasion, person, occasionPicture } = useUser()
  return (
    <section className='w-full h-[150px] flex justify-center mt-10 px-3'>
        <div className='w-full h-full md:w-[40%] flex items-center  justify-center px-2'>
            <div className='flex flex-col items-center gap-2 '>
                <div className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-gray-200 rounded-full flex justify-center items-center text-1xl  text-[#D32F2F] border-2 border-[#D32F2F]'>
                    {occasion !== null && occasionPicture !== null ? (
                        <img src={occasionPicture} alt="" className='w-full h-full rounded-full object-cover' />
                    ) : (
                        <p>1</p>
                    )}
                </div>
             
                <p className='text-1xl text-[#D32F2F]'>Event</p>
            </div>  
            <div className={`h-px w-8 sm:w-16 md:w-[200px]  mb-10 ml-3 mr-3 shrink-0 ${occasion !== null && person === null ? `bg-[#D32F2F]` : `bg-gray-300`}`}></div>
            <div className='flex flex-col items-center gap-2 '>
                <div className={`w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-gray-200 rounded-full flex justify-center items-center text-1xl border-2 ${occasion !== null && person === null ? `border-[#D32F2F] text-[#D32F2F]` : null}`}>2</div>
                <p className={occasion !== null && person === null ? `text-[#D32F2F]` : null}>Person</p>
            </div>  

             <div className='h-px w-8 sm:w-16 md:w-[200px] bg-gray-300 mb-10 ml-3 mr-3 shrink-0'></div>
            <div className='flex flex-col items-center gap-2 '>
                <div className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-gray-200 rounded-full flex justify-center items-center text-1xl '>3</div>
                <p className='text-1xl '>Details</p>
            </div>  

                 <div className='h-px w-8 sm:w-16 md:w-[200px] bg-gray-300 mb-10 ml-3 mr-3 shrink-0'></div>
            <div className='flex flex-col items-center gap-2 '>
                <div className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-gray-200 rounded-full flex justify-center items-center text-1xl '>4</div>
                <p className='text-1xl'>Ideas</p>
            </div>  
      
        </div>
          
    </section>
  )
}

export default Steps
