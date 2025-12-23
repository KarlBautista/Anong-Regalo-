import React from 'react'
import Logo from '../assets/logo.png'
import useUser from '../store/userInformation'
import { t } from '../i18n/t'
import { useNavigate } from 'react-router-dom'
const Header = () => {
  const navigate = useNavigate()
  const { lang, setLang, clearOccasion, clearPerson, clearIdeas } = useUser()

  const handleHome = () => {
    clearOccasion();
    clearPerson();
    clearIdeas();
    navigate("/");
  }
  return (
  <header className='w-full min-h-17.5 md:min-h-25 flex justify-center shadow-md py-2'>
    <div className='w-full md:w-[50%] flex flex-wrap items-center justify-between px-5 gap-3'>
      <div
        className='flex flex-1 flex-nowrap items-center min-w-0 cursor-pointer transition-opacity duration-200 hover:opacity-90 active:opacity-80'
        onClick={() => handleHome()}
      >
        <img src={Logo} alt="" className='shrink-0 w-10 h-10 md:w-15 md:h-15'/>
                <h1 className='ml-2 text-1xl md:text-2xl text-[#D32F2F] whitespace-nowrap font-bold'>Anong Regalo?</h1>
         </div>

          <div className='flex items-center gap-2'>
            <div className='inline-flex rounded-full border border-gray-200 bg-white p-1'>
              <button
                type='button'
                onClick={() => setLang('tl')}
                className={`px-3 py-2 rounded-full text-xs sm:text-sm cursor-pointer transition-colors duration-200 ${lang === 'tl' ? 'bg-[#D32F2F] text-white hover:opacity-90' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                {t(lang, 'lang.tagalog')}
              </button>
              <button
                type='button'
                onClick={() => setLang('en')}
                className={`px-3 py-2 rounded-full text-xs sm:text-sm cursor-pointer transition-colors duration-200 ${lang === 'en' ? 'bg-[#D32F2F] text-white hover:opacity-90' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                {t(lang, 'lang.english')}
              </button>
            </div>

            
          </div>
        
        </div>
      
    </header>
  )
}

    export default Header
