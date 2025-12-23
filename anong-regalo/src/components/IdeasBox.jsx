import React from 'react'

const IdeasBox = ({ idea }) => {

    const handleSearch = () => {
          const url = `https://shopee.ph/search?${encodeURIComponent(idea.search_query)}`;
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

      <div className="flex-none w-full bg-[#D32F2F] flex justify-center items-center px-4 py-3 cursor-pointer"
      onClick={() => handleSearch()}>
        <h1 className="text-white text-sm md:text-lg text-center">{'> Tingnan ang Image at Options sa Pagbili'}</h1>
      </div>
    </div>

  )
}

export default IdeasBox
