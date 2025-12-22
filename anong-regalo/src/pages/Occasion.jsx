import React from 'react'
import OccassionBox from '../components/OccassionBox'
import Christmas from '../assets/christmas.webp'
import Birthday from '../assets/birthday.webp'
import Anniverssary from '../assets/anniversarry.jpg'
import FathersDay from '../assets/fathers-day.jpg'
import MothersDay from '../assets/mothers-day.jpg'
import Valentines from '../assets/valentines.png'
import Wedding from '../assets/wedding.webp'
import Graduation from '../assets/graduation.avif'
const Occasion = () => {
  return (
    <section className='w-full min-h-screen flex justify-center'>
        <div className='w-full max-w-6xl p-5 flex flex-col'>
            
            <h1 className='text-center text-[#D32F2F] text-xl md:text-2xl mb-5 whitespace-nowrap'>Anong Occasion?</h1>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3'>
            <OccassionBox title="Christmas" background={Christmas} url={'test lang muna'}/>
            <OccassionBox title="Birthday" background={Birthday} url={'test lang muna'}/>
            <OccassionBox title="Anniversary" background={Anniverssary} url={'test lang muna'}/>
            <OccassionBox title="Valentines" background={Valentines} url={'test lang muna'}/>
            <OccassionBox title="Father's Day" background={FathersDay} url={'test lang muna'}/>
            <OccassionBox title="Mother's Day" background={MothersDay} url={'test lang muna'}/>
            <OccassionBox title="Wedding" background={Wedding} url={'test lang muna'}/>
            <OccassionBox title="Graduation" background={Graduation} url={'test lang muna'}/>
               
            </div>
        </div>
      
    </section>
  )
}

export default Occasion
