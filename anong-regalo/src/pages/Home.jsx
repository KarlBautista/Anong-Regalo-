import { useNavigate } from 'react-router-dom'
import useUser from '../store/userInformation'

const Home = () => {
  const navigate = useNavigate()
  const { lang } = useUser()

  const copy =
    lang === 'en'
      ? {
          badge: 'Gift recommendation helper',
          title: 'Find the perfect gift—fast.',
          body:
            "Tell us the occasion, who you're buying for, and a few details. We'll generate gift ideas that match your budget and style.",
          primary: 'Start finding a gift',
          secondary: 'How it works',
          bullets: [
            'Pick an occasion',
            'Choose who it’s for',
            'Add details (optional)',
            'Get gift ideas',
          ],
        }
      : {
          badge: 'Tulong sa pagpili ng regalo',
          title: 'Hanapin ang perfect na regalo—mabilis.',
          body:
            'Pumili ng occasion, kung sino ang pagbibigyan, at maglagay ng ilang details. Magbibigay kami ng gift ideas na swak sa budget at style mo.',
          primary: 'Maghanap ng regalo',
          secondary: 'Paano gumagana',
          bullets: ['Pumili ng occasion', 'Piliin ang pagbibigyan', 'Magdagdag ng details (optional)', 'Kumuha ng ideas'],
        }

  return (
    <section className='w-full min-h-[calc(100vh-170px)] flex justify-center px-5 py-10'>
      <div className='w-full max-w-6xl flex flex-col gap-8'>
        <div className='w-full border-2 border-[#D32F2F] rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row gap-8 md:items-center'>
          <div className='flex-1 flex flex-col gap-4'>
            <div className='inline-flex w-fit items-center rounded-full px-4 py-2 bg-[#D32F2F] text-white text-sm'>
              {copy.badge}
            </div>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#D32F2F] leading-tight'>
              {copy.title}
            </h1>
            <p className='text-gray-600 text-base sm:text-lg'>{copy.body}</p>

            <div className='flex flex-col sm:flex-row gap-3'>
              <button
                type='button'
                onClick={() => navigate('/occasion')}
                className='w-full sm:w-auto px-6 py-3 rounded-md bg-[#D32F2F] text-white cursor-pointer transition-opacity duration-200 hover:opacity-90 active:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D32F2F]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white'
              >
                {copy.primary}
              </button>
              <button
                type='button'
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className='w-full sm:w-auto px-6 py-3 rounded-md border border-[#D32F2F] text-[#D32F2F] cursor-pointer transition-colors duration-200 hover:bg-[#D32F2F]/10 active:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D32F2F]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white'
              >
                {copy.secondary}
              </button>
            </div>
          </div>

          <div className='w-full md:w-[360px] rounded-xl border border-gray-200 p-5 bg-white'>
            <h2 className='text-[#D32F2F] font-semibold mb-3'>{lang === 'en' ? 'Steps' : 'Mga Hakbang'}</h2>
            <ul className='text-gray-600 flex flex-col gap-2'>
              {copy.bullets.map((item) => (
                <li key={item} className='flex items-start gap-2'>
                  <span className='mt-1 w-2 h-2 rounded-full bg-[#D32F2F] shrink-0' />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div id='how-it-works' className='w-full max-w-4xl mx-auto text-center'>
          <h2 className='text-xl sm:text-2xl text-[#D32F2F] font-semibold mb-2'>
            {lang === 'en' ? 'How it works' : 'Paano gumagana'}
          </h2>
          <p className='text-gray-600'>
            {lang === 'en'
              ? 'Answer a few quick questions, then we generate gift ideas you can actually use.'
              : 'Sagutin ang ilang mabilis na tanong, tapos bibigyan ka namin ng gift ideas na madaling sundan.'}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Home
