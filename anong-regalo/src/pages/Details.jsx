import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { getGiftRecommendations } from '../components/GetGiftRecommedations';
import Loading from '../components/Loading'
import useUser from '../store/userInformation';
import { t } from '../i18n/t'
const Details = () => {
    const [form, setForm] = useState({
        age: '',
        interests: [''],
        giftCategory: '',
        giftStyle: '',
        priceRange: '',
    });
   
    const {
        occasion,
        person,
        setIdeas,
        ideas,
        setLoading,
        loading,
        setFormIsComplete,
        clearPerson,
        lang,
        setLastFormData,
        setRecommendationsError,
    } = useUser(); 
   
    const { title } = useParams();
    const navigate = useNavigate();
    

    const addInterestField = () => {
        setForm((prev) => ({ ...prev, interests: [...prev.interests, ''] }))
    }

    const updateInterest = (index, value) => {
        setForm((prev) => ({
            ...prev,
            interests: prev.interests.map((item, i) => (i === index ? value : item)),
        }))
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const handlePriceRange = (priceRange) => {
        setForm((prev) => ({ ...prev, priceRange }))
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const formData = {
                occasion: occasion,
                person: person,
                age: form.age,
                interest: form.interests,
                giftCategory: form.giftCategory,
                giftStyle: form.giftStyle,
                priceRange: form.priceRange,
            }

            setLastFormData(formData)
            setRecommendationsError(null)
            setFormIsComplete(true);
            
            const response = await getGiftRecommendations(formData);
            if (Array.isArray(response) && response.length > 0) {
                setIdeas(response);
                setRecommendationsError(null)
                navigate('/ideas');
            }
            
       
           
        } catch (err) {
            console.error(`Something went wrong getting data from GEMINI: ${err.message}`);
            setRecommendationsError(err?.message ? String(err.message) : 'Failed to get recommendations')
            return;
        } finally {
            setLoading(false);
        }
    }

  if (loading) {
    return <Loading />
  }
  
  const handleBack = () => {
    clearPerson();
    navigate(-1)
  }

  return (
  <section className='w-full md:min-h-screen flex justify-center'>
        <div className='w-full max-w-6xl p-5 flex flex-col  items-center'>
              <div className='w-full flex items-center'>
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
            <h1 className='text-center text-[#D32F2F] text-xl md:text-2xl mb-5'>{t(lang, 'details.title')}</h1>
            <form onSubmit={handleOnSubmit} className='w-full max-w-xl md:max-w-none md:w-[50%] h-auto border-2 border-[#D32F2F] rounded-lg p-4 sm:p-5 flex flex-col gap-5'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="">{t(lang, 'details.ageLabel', { title })} <span className='text-gray-500'>{t(lang, 'details.optional')}</span></label>
                    <div className='flex flex-col sm:flex-row gap-2 sm:gap-3 sm:items-center'>
                                             <input
                                                 type="text"
                                                 name="age"
                                                 value={form.age}
                                                 onChange={handleOnChange}
                                                 className='border w-full sm:w-[80%] px-4 py-2 rounded-sm border-gray-500'
                                                 placeholder='Ex. 18'
                                             />
                                             <span>{t(lang, 'details.yearsOld')}</span>
                    </div>
                </div>

                <div className='flex flex-col gap-1'>
                    <label htmlFor="">{t(lang, 'details.tasteLabel', { title })} <span className='text-gray-500'>{t(lang, 'details.optional')}</span></label>
                                        <div className='flex flex-col gap-3'>
                                            <div className='flex flex-wrap gap-3 items-center'>
                                                <input
                                                    type="text"
                                                    className='border flex-1 min-w-[220px] px-4 py-2 rounded-sm border-gray-500'
                                                    placeholder='Ex. Instruments'
                                                    value={form.interests[0]}
                                                    onChange={(e) => updateInterest(0, e.target.value)}
                                                />
                                                <button
                                                    type="button"
                                                    aria-label="Add interest"
                                                    onClick={addInterestField}
                                                    className={`h-10 w-10 items-center justify-center rounded-full border-2 border-[#D32F2F] text-[#D32F2F] hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#D32F2F]/40
                                                    ${form.interests.length > 2 ? `hidden` : `inline-flex `}`}
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        className='h-5 w-5'
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        aria-hidden="true"
                                                    >
                                                        <path d="M12 5v14" />
                                                        <path d="M5 12h14" />
                                                    </svg>
                                                </button>
                                            </div>

                                            {form.interests.slice(1).map((value, i) => {
                                                const index = i + 1
                                                return (
                                                    <input
                                                        key={index}
                                                        type="text"
                                                        className='border w-full px-4 py-2 rounded-sm border-gray-500'
                                                        placeholder='Ex. Instruments'
                                                        value={value}
                                                        onChange={(e) => updateInterest(index, e.target.value)}
                                                    />
                                                )
                                            })}
                                        </div>
                </div>
                 <div className='flex flex-col gap-1'>
                          <label htmlFor="">{t(lang, 'details.giftCategory')} <span className='text-gray-500'>{t(lang, 'details.optional')}</span></label>
                    <div className='flex gap-3 items-center'>
                       <input
                         type="text"
                         name="giftCategory"
                         value={form.giftCategory}
                         onChange={handleOnChange}
                         className='border w-full px-4 py-2 rounded-sm border-gray-500'
                         placeholder='Ex. Video Games'
                       />
                </div>
                </div>   

                <div className='flex flex-col gap-1'>
                    <label htmlFor="">{t(lang, 'details.giftStyle')} <span className='text-gray-500'>{t(lang, 'details.optional')}</span></label>
                    <div className='flex gap-3 items-center'>
                                             <input
                                                 type="text"
                                                 name="giftStyle"
                                                 value={form.giftStyle}
                                                 onChange={handleOnChange}
                                                 className='border w-full px-4 py-2 rounded-sm border-gray-500'
                                                 placeholder='Ex. Something funny, useful, classy'
                                             />
                </div>
                </div>    

                  <div className='flex flex-col gap-1'>
                                        <label htmlFor="">{t(lang, 'details.priceRange')} <span className='text-gray-500'>{t(lang, 'details.optional')}</span></label>
                    <div className='grid grid-cols-2 sm:grid-cols-4 gap-2'>
                        <button type='button' className={`border px-4 py-2 rounded-lg cursor-pointer text-center ${form.priceRange === "low" ? `bg-[#D32F2F] text-white` : null}`} onClick={() => handlePriceRange('low')}>Low</button>
                        <button type='button' className={`border px-4 py-2 rounded-lg cursor-pointer text-center ${form.priceRange === "mid" ? `bg-[#D32F2F] text-white` : null}`} onClick={() => handlePriceRange('mid')}>Mid</button>
                        <button type='button' className={`border px-4 py-2 rounded-lg cursor-pointer text-center ${form.priceRange === "high" ? `bg-[#D32F2F] text-white` : null}`} onClick={() => handlePriceRange('high')}>High</button>
                        <button type='button' className={`border px-4 py-2 rounded-lg cursor-pointer text-center ${form.priceRange === "luxury" ? `bg-[#D32F2F] text-white` : null}`} onClick={() => handlePriceRange('luxury')}>Luxury</button>
                    </div>
                </div> 
                <button className='w-full h-[50px] bg-[#D32F2F] text-white rounded-md cursor-pointer'>{t(lang, 'details.submit')}</button>                     
            </form>
        </div>
  
      
    </section>
  )
}

export default Details
