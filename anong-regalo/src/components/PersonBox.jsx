import React from 'react'

const PersonBox = ({ background, title, url }) => {
    const handleOnClick = () => {
      setOccassion(title);
      navigate("/person");
      console.log("nagana naman")
    }
  return (
   <div
      className='relative w-full aspect-square bg-black bg-cover bg-center overflow-hidden cursor-pointer rounded-lg'
      style={{ backgroundImage: `url(${background})` }}
      onClick={handleOnClick}
    >
      <div className='absolute inset-0 bg-black/40' />
      <h2 className='absolute inset-0 flex items-center justify-center text-white text-center text-xl md:text-2xl lg:text-3xl px-3'>
        {title}
      </h2>
    </div>
  )
}

export default PersonBox
