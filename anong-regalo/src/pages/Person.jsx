import React from 'react'
import PersonBox from '../components/PersonBox'
import { useNavigate } from 'react-router-dom'
import Father from '../assets/father.jpg'
import Mother from '../assets/mother.jpg'
import Daughter from '../assets/daugther.jpg'
import Son from '../assets/son.jpeg'
import Girlfriend from '../assets/girlfriend.jpg'
import Boyfriend from '../assets/boyfriend.jpg'
import Friend from '../assets/friend.avif'
import Other from '../assets/other.webp'
import useUser from '../store/userInformation'
import { t } from '../i18n/t'
const Person = () => {
  const navigate = useNavigate();
  const { clearOccasion, lang } = useUser();
  const handleBack = () => {
    clearOccasion();
    navigate(-1);
  }
  return (
    <section className='w-full min-h-screen flex justify-center'>
        <div className='w-full max-w-6xl p-5 flex flex-col'>
          <div className='w-full flex items-center'>
            <button
              type='button'
              aria-label='Back'
              onClick={() => handleBack()}
              className='w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#D32F2F] text-white flex items-center justify-center text-xl leading-none cursor-pointer transition-opacity duration-200 hover:opacity-90 active:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D32F2F]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white'
            >
              <span aria-hidden='true' className='text-3xl'>
                {`<`}
              </span>
            </button>
          </div>
            <h1 className='text-center text-[#D32F2F] text-xl md:text-2xl mb-5'>{t(lang, 'person.title')}</h1>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3'>
            <PersonBox background={Father} title="Father" url={"Test lang muna"}/>
            <PersonBox background={Mother} title="Mother" url={"Test lang muna"}/>
            <PersonBox background={Daughter} title="Daughter" url={"Test lang muna"}/>
            <PersonBox background={Son} title="Son" url={"Test lang muna"}/>
            <PersonBox background={Girlfriend} title="Girlfriend" url={"Test lang muna"}/>
            <PersonBox background={Boyfriend} title="Boyfriend" url={"Test lang muna"}/>
            <PersonBox background={Friend} title="Friend" url={"Test lang muna"}/>
            <PersonBox background={Other} title="Other" url={"Test lang muna"}/>
            </div>
        </div>
      
    </section>
  )
}

export default Person
