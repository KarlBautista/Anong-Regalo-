import React, { useState } from 'react'
import useUser from '../store/userInformation'
import IdeasBox from '../components/IdeasBox';
import { useNavigate } from 'react-router-dom';
import { t } from '../i18n/t'
import { getGiftRecommendations } from '../components/GetGiftRecommedations';
import Loading from '../components/Loading'
const Ideas = () => {
  const {
    ideas,
    person,
    clearIdeas,
    lang,
    loading,
    setLoading,
    lastFormData,
    setIdeas,
    recommendationsError,
    setRecommendationsError,
  } = useUser();
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const sample = {
      name: "sample",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, ab. Quos ipsam aspernatur placeat rerum? Molestiae, consequuntur! Aut voluptatem illo obcaecati quam ipsam! Nesciunt inventore nemo blanditiis praesentium facilis porro?",
      estimated_price_php: 1500,
      search_query: "sample"

  }

  const handleBack = () => {
    clearIdeas();
    navigate(-1);
  }

  const handleRetry = async (e) => {
    e.preventDefault()
    if (!lastFormData) {
      setRecommendationsError('Nothing to retry yet. Please submit the Details form first.')
      return
    }

    setLoading(true)
    setRecommendationsError(null)
    try {
      const response = await getGiftRecommendations({
        ...lastFormData,
        refinement: input?.trim() || '',
      })
      if (Array.isArray(response) && response.length > 0) {
        setIdeas(response)
      } else {
        setRecommendationsError('No recommendations returned. Please try again.')
      }
    } catch (err) {
      setRecommendationsError(err?.message ? String(err.message) : 'Retry failed')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <Loading />
  }
  return (
    <div className='w-full min-h-screen px-4 py-6'>
      
      <div className='w-full max-w-4xl mx-auto'>
          <div className='w-full flex items-center mb-5'>
            <button
              type='button'
              aria-label='Back'
              onClick={() => handleBack()}
              className='w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#D32F2F] text-white flex items-center justify-center text-xl leading-none cursor-pointer'
            >
              <span aria-hidden='true' className='text-3xl'>
                {`<`}
              </span>
            </button>
          </div>
        <h1 className='text-center px-3 text-2xl md:text-3xl font-semibold leading-tight'>
          {t(lang, 'ideas.title', { person })}
        </h1>
        <p className='mt-3 text-center px-3 text-sm md:text-base leading-relaxed  text-gray-400'>
          {t(lang, 'ideas.subtitle')}
        </p>
      </div>

      <div className='w-full max-w-4xl mx-auto mt-6 flex flex-col items-center gap-5'>
        {(Array.isArray(ideas) && ideas.length > 0 ? ideas : [sample, sample, sample]).map((idea, idx) => (
          <IdeasBox key={idx} idea={idea} />
        ))}
      </div>
      <div className='w-full max-w-4xl mx-auto mt-8 flex justify-center'>
        <form onSubmit={handleRetry} className='w-full max-w-md flex justify-center flex-col items-center'>
          <label htmlFor='custom-input' className='block text-lg mb-2 text-center'>
            {t(lang, 'ideas.inputLabel')}
          </label>
          <input
            id='custom-input'
            type='text'
            className='w-full border mb-2 border-gray-400 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D32F2F]/40 focus:border-[#D32F2F]'
            placeholder='Ex.More Expensive'
            onChange={(e) => setInput(e.target.value)}
          />
          {recommendationsError ? (
            <p className='w-full text-sm text-center text-[#D32F2F] mb-2'>{recommendationsError}</p>
          ) : null}
             <button className='border bg-[#d32f2f] px-5 py-2 rounded-md text-white'>Retry</button>
        </form>
     
      </div>
    </div>
  )
}

export default Ideas
