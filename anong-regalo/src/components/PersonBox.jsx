import React, { useState } from 'react'
import useUser from '../store/userInformation';
import { useNavigate } from 'react-router-dom'
const PersonBox = ({ background, title, url }) => {
    const { setPerson } = useUser();
    const navigate = useNavigate();
    const handleOnClick = () => {
      setPerson(title, background);
      navigate(`/details/${title}`);
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
