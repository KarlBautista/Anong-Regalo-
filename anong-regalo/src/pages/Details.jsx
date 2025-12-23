import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getGiftRecommendations } from '../components/GetGiftRecommedations';
import useUser from '../store/userInformation';
const Details = () => {
    const [form, setForm] = useState({
        age: '',
        interests: [''],
        giftCategory: '',
        giftStyle: '',
        priceRange: '',
    });
    const { occasion, person } = useUser(); 
   
    const { title } = useParams();
    

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

            console.log("ito form natin: ", formData)
            const response = await getGiftRecommendations(formData);
            console.log("ito na mga data:" + response);
        } catch (err) {
            console.error(`Something went wrong getting data from GEMINI: ${err.message}`);
            return;
        }
    }

  return (
  <section className='w-full min-h-screen flex justify-center'>
        <div className='w-full max-w-6xl p-5 flex flex-col  items-center'>
            <h1 className='text-center text-[#D32F2F] text-xl md:text-2xl mb-5 whitespace-nowrap'>Magdagdag ng details</h1>
            <form onSubmit={handleOnSubmit} className='w-full md:w-[50%] h-auto  border-2 border-[#D32F2F] rounded-lg p-5 flex flex-col gap-5'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="">{`Your ${title}'s Age `}<span className='text-gray-500'>(Optional)</span></label>
                    <div className='flex gap-3 items-center'>
                                             <input
                                                 type="text"
                                                 name="age"
                                                 value={form.age}
                                                 onChange={handleOnChange}
                                                 className='border w-[80%] px-4 py-2 rounded-sm border-gray-500'
                                                 placeholder='Ex. 18'
                                             />
                                             <span>Years Old</span>
                    </div>
                </div>

                <div className='flex flex-col gap-1'>
                    <label htmlFor="">{`Your ${title}'s Taste and Interests `}<span className='text-gray-500'>(Optional)</span></label>
                                        <div className='flex flex-col gap-3'>
                                            <div className='flex gap-3 items-center'>
                                                <input
                                                    type="text"
                                                    className='border w-full px-4 py-2 rounded-sm border-gray-500'
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
                    <label htmlFor="">Gift Category <span className='text-gray-500'>(Optional)</span></label>
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
                    <label htmlFor="">Gift Style <span className='text-gray-500'>(Optional)</span></label>
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
                    <label htmlFor="">Price Range <span className='text-gray-500'>(Optional)</span></label>
                    <div className='flex justify-evenly'>
                        <div className={`border px-10 py-2 rounded-lg cursor-pointer ${form.priceRange === "low" ? `bg-[#D32F2F] text-white` : null}`} onClick={() => handlePriceRange('low')}>Low</div>
                        <div className={`border px-10 py-2 rounded-lg cursor-pointer ${form.priceRange === "mid" ? `bg-[#D32F2F] text-white` : null}`} onClick={() => handlePriceRange('mid')}>Mid</div>
                        <div className={`border px-10 py-2 rounded-lg cursor-pointer ${form.priceRange === "high" ? `bg-[#D32F2F] text-white` : null}`} onClick={() => handlePriceRange('high')}>High</div>
                        <div className={`border px-10 py-2 rounded-lg cursor-pointer ${form.priceRange === "luxury" ? `bg-[#D32F2F] text-white` : null}`} onClick={() => handlePriceRange('luxury')}>Luxury</div>
                    </div>
                </div> 
                <button className='w-full h-[50px] bg-[#D32F2F] text-white rounded-md cursor-pointer'>Hanapin ang perfect na regalo</button>                     
            </form>
        </div>
  
      
    </section>
  )
}

export default Details
