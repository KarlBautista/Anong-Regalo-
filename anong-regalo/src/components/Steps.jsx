import React from 'react'
import useUser from '../store/userInformation'
import { t } from '../i18n/t'
import { useLocation } from 'react-router-dom'

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
    const { occasion, person, occasionPicture, personPicture, loading, ideas, isFormComplete, lang} = useUser()
    const location = useLocation();
    if (location.pathname === "/") return null;
  return (
    <section className='w-full flex justify-center mt-6 px-3'>
        <div className='w-full max-w-4xl'>
            <div className='w-full flex items-start justify-between gap-2'>
                <div className='flex flex-col items-center gap-2 shrink-0 w-16 sm:w-20'>
                    <div className='w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gray-200 rounded-full flex justify-center items-center text-base text-[#D32F2F] border-2 border-[#D32F2F]'>
                        {occasion !== null && occasionPicture !== null ? (
                            <img src={occasionPicture} alt="" className='w-full h-full rounded-full object-cover' />
                        ) : (
                            <p>1</p>
                        )}
                    </div>
                    <p className='text-xs sm:text-sm text-[#D32F2F] text-center'>{t(lang, 'steps.event')}</p>
                </div>

                <div
                    aria-hidden='true'
                    className={`mt-5 sm:mt-6 flex-1 h-px ${occasion !== null ? `bg-[#D32F2F]` : `bg-gray-300`}`}
                />

                <div className='flex flex-col items-center gap-2 shrink-0 w-16 sm:w-20'>
                    <div className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gray-200 rounded-full flex justify-center items-center text-base border-2 ${occasion !== null ? `border-[#D32F2F] text-[#D32F2F]` : `border-gray-200 text-[#D32F2F]`}`}>
                        {person !== null && personPicture !== null ? (
                            <img src={personPicture} alt="" className='w-full h-full rounded-full object-cover' />
                        ) : (
                            <p>2</p>
                        )}
                    </div>
                    <p className={`text-xs sm:text-sm text-center ${occasion !== null ? `text-[#D32F2F]` : `text-gray-400`}`}>{t(lang, 'steps.person')}</p>
                </div>

                <div
                    aria-hidden='true'
                    className={`mt-5 sm:mt-6 flex-1 h-px ${person !== null ? `bg-[#d32f2f]` : `bg-gray-200`}`}
                />

                <div className='flex flex-col items-center gap-2 shrink-0 w-16 sm:w-20'>
                    <div className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex justify-center items-center text-base border ${isFormComplete ? `bg-[#d32f2f] border-[#d32f2f] text-white` : person !== null ? `bg-gray-200 border-[#D32F2F] text-[#D32F2F]` : `bg-gray-200 border-transparent text-[#D32F2F]`}`}>
                        {isFormComplete ? <CheckIcon className='w-5 h-5 md:w-6 md:h-6' /> : "3"}
                    </div>
                    <p className={`text-xs sm:text-sm text-center ${person !== null ? `text-[#D32F2F]` : `text-gray-400`}`}>{t(lang, 'steps.details')}</p>
                </div>

                <div
                    aria-hidden='true'
                    className={`mt-5 sm:mt-6 flex-1 h-px ${isFormComplete ? `bg-[#d32f2f]` : `bg-gray-200`}`}
                />

                <div className='flex flex-col items-center gap-2 shrink-0 w-16 sm:w-20'>
                    <div className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex justify-center items-center text-base border ${ideas.length > 0 ? `bg-[#d32f2f] border-[#d32f2f] text-white` : isFormComplete ? `bg-gray-200 border-[#d32f2f] text-[#d32f2f]` : `bg-gray-200 border-transparent text-[#D32F2F]`}`}>
                        {ideas.length > 0 ? <CheckIcon className='w-5 h-5 md:w-6 md:h-6' /> : "4"}
                    </div>
                    <p className={`text-xs sm:text-sm text-center ${isFormComplete ? `text-[#d32f2f]` : `text-gray-400`}`}>{t(lang, 'steps.ideas')}</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Steps
