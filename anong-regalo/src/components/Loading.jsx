import { useEffect, useState } from 'react'
import useUser from '../store/userInformation'
import { t } from '../i18n/t'

const Loading = () => {
    const [progress, setProgress] = useState(12)
    const { lang } = useUser()

    useEffect(() => {
        const intervalId = setInterval(() => {
            setProgress((current) => {
                if (current >= 90) return current
                const step = Math.max(1, Math.round((90 - current) / 8))
                return Math.min(90, current + step)
            })
        }, 200)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <section className='w-full h-[50vh] flex items-center justify-center px-5'>
            <div className='w-full max-w-md flex flex-col items-center gap-4'>
                <p className='text-[#D32F2F] text-lg font-semibold text-center'>{t(lang, 'loading.title')}</p>
                <div className='w-full h-3 bg-gray-200 rounded-full overflow-hidden'>
                    <div
                        className='h-full bg-[#D32F2F] transition-[width] duration-200 ease-out'
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <p className='text-sm text-gray-600'>{progress}%</p>
            </div>
        </section>
    )
}

export default Loading
