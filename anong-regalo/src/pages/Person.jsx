import React from 'react'
import PersonBox from '../components/PersonBox'
import Father from '../assets/father.jpg'
import Mother from '../assets/mother.jpg'
import Daughter from '../assets/daugther.jpg'
import Son from '../assets/son.jpeg'
import Girlfriend from '../assets/girlfriend.jpg'
import Boyfriend from '../assets/boyfriend.jpg'
import Friend from '../assets/friend.avif'
import Other from '../assets/other.webp'
const Person = () => {
 
  return (
    <section className='w-full min-h-screen flex justify-center'>
        <div className='w-full max-w-6xl p-5 flex flex-col'>
            <h1 className='text-center text-[#D32F2F] text-xl md:text-2xl mb-5 whitespace-nowrap'>Sino ang pagbibigyan mo?</h1>
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
