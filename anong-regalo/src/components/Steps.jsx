import React from 'react'
import useUser from '../store/userInformation'

const CheckIcon = ({ className = '' }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <path
            d="M20 6L9 17l-5-5"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

const Steps = () => {
    const { occasion, person, occasionPicture, personPicture, loading, ideas, isFormComplete} = useUser()
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
            <div className={`h-px w-8 sm:w-16 md:w-[200px]  mb-10 ml-3 mr-3 shrink-0 ${occasion !== null ? `bg-[#D32F2F]` : `bg-gray-300`}`}></div>
            <div className='flex flex-col items-center gap-2 '>
                <div className={`w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-gray-200 rounded-full flex justify-center items-center text-1xl border-2 ${occasion !== null ? `border-[#D32F2F] text-[#D32F2F]` : null}`}>
                    {person !== null && personPicture !== null ? (
                        <img src={personPicture} alt="" className='w-full h-full rounded-full object-cover' />
                    ) : (
                        <p>2</p>
                    )}
                </div>
                <p className={occasion !== null ? `text-[#D32F2F] ` : null}>Person</p>
            </div>  

             <div className={`h-px w-8 sm:w-16 md:w-[200px]  mb-10 ml-3 mr-3 shrink-0 ${person !== null ? `bg-[#d32f2f]` : `bg-gray-200`}`}></div>
            <div className={`flex flex-col items-center gap-2  `}>
                <div className={`w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full flex justify-center items-center text-1xl border ${isFormComplete ? `bg-[#d32f2f] border-[#d32f2f] text-white` : person !== null ? `bg-gray-200 border-[#D32F2F] text-[#D32F2F]` : `bg-gray-200 border-transparent`}`}>
                    {isFormComplete ? <CheckIcon className='w-5 h-5 md:w-6 md:h-6' /> : "3"}
                </div>
                <p className={person !== null ? `text-[#D32F2F]` : null}>Details</p>
            </div>  

                 <div className={`h-px w-8 sm:w-16 md:w-[200px] mb-10 ml-3 mr-3 shrink-0 ${isFormComplete ? `bg-[#d32f2f]` : `bg-gray-200`}`}></div>
            <div className='flex flex-col items-center gap-2 '>
                <div className={`w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full flex justify-center items-center text-1xl border ${ideas.length > 0 ? `bg-[#d32f2f] border-[#d32f2f] text-white` : isFormComplete ? `bg-gray-200 border-[#d32f2f] text-[#d32f2f]` : `bg-gray-200 border-transparent`}`}>
                    {ideas.length > 0 ? <CheckIcon className='w-5 h-5 md:w-6 md:h-6' /> : "4"}
                </div>
                <p className={isFormComplete ? `text-[#d32f2f]` : null}>Ideas</p>
            </div>  
      
        </div>
          
    </section>
  )
}

export default Steps
