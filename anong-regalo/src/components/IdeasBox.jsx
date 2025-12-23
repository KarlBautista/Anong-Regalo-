import React from 'react'
import useUser from '../store/userInformation'
import { t } from '../i18n/t'

const IdeasBox = ({ idea }) => {
  const { lang } = useUser()

    const handleSearch = () => {
          const url = `https://shopee.ph/search?keyword=${encodeURIComponent(idea.search_query)}`;
          window.open(url, "_blank")
    }   
  return (
    <div className="w-full min-h-[250px] flex flex-col border border-gray-500 rounded-2xl overflow-hidden">
      <div className="flex-none border-b-2 border-[#D32F2F] flex justify-center items-center px-4 py-3">
        <h1 className="text-xl md:text-2xl text-[#D32F2F] font-bold text-center">{idea.name}</h1>
      </div>
        
      <div className="flex-1 px-4 py-4 text-left text-sm md:text-base leading-relaxed">
        {idea.description}
       
      </div>

      <div className='flex-1 text-center text-sm md:text-base leading-relaxed text-[#d32f2f]'>
        {t(lang, 'ideasBox.estimated', { price: idea.estimated_price_php })}
      </div>

      <div
        className="flex-none w-full bg-[#D32F2F] flex justify-center items-center px-4 py-3 cursor-pointer transition-opacity duration-200 hover:opacity-90 active:opacity-80"
        onClick={() => handleSearch()}
      >
        <h1 className="text-white text-sm md:text-lg text-center">{t(lang, 'ideasBox.cta')}</h1>
      </div>
    </div>

  )
}

export default IdeasBox
