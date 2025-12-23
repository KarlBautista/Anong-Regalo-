import React from 'react'
import useUser from '../store/userInformation'
import IdeasBox from '../components/IdeasBox';
const Ideas = () => {
  const { ideas, person} = useUser();
  console.log("ito nga mga ideas", ideas);
  const sample = {
      name: "sample",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, ab. Quos ipsam aspernatur placeat rerum? Molestiae, consequuntur! Aut voluptatem illo obcaecati quam ipsam! Nesciunt inventore nemo blanditiis praesentium facilis porro?",
      estimated_price_php: 1500,
      search_query: "sample"

  }
  return (
    <div className='w-full min-h-screen px-4 py-6'>
      <div className='w-full max-w-4xl mx-auto'>
        <h1 className='text-center px-3 text-2xl md:text-3xl font-semibold leading-tight'>
          {`Ito ang mga Perfect na Regalo para sa ${person} mo!`}
        </h1>
        <p className='mt-3 text-center px-3 text-sm md:text-base leading-relaxed  text-gray-400'>
          These recommendations are generated entirely by AI, carefully selected based on the information you provided. Each suggestion is tailored to help you find the perfect gift quickly and easily, saving you time and effort.
        </p>
      </div>

      <div className='w-full max-w-4xl mx-auto mt-6 flex flex-col items-center gap-5'>
        {(Array.isArray(ideas) && ideas.length > 0 ? ideas : [sample, sample, sample]).map((idea, idx) => (
          <IdeasBox key={idx} idea={idea} />
        ))}
      </div>
    </div>
  )
}

export default Ideas
