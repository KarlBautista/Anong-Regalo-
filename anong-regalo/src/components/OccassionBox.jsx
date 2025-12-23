import React, { useMemo, useState } from 'react'
import useUser from '../store/userInformation';
import { useNavigate } from 'react-router-dom'
import { t } from '../i18n/t'
const OccassionBox = ({ background, title }) => {
    const { setOccassion, lang } = useUser();
    const navigate = useNavigate();

    const isOther = useMemo(() => String(title).trim().toLowerCase() === 'others', [title])
    const [isOpen, setIsOpen] = useState(false)
    const [customValue, setCustomValue] = useState('')

    const handleOnClick = () => {
      if (isOther) {
        setIsOpen(true)
        return
      }

      setOccassion(title, background);
      navigate("/person");
    }

    const handleConfirm = () => {
      const cleaned = customValue.trim()
      if (!cleaned) return
      setOccassion(cleaned, background)
      setIsOpen(false)
      navigate('/person')
    }

    const handleClose = () => {
      setIsOpen(false)
      setCustomValue('')
    }
  return (
    <>
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

      {isOpen ? (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center px-4'
          role='dialog'
          aria-modal='true'
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) handleClose()
          }}
        >
          <div className='absolute inset-0 bg-black/50' />
          <div className='relative w-full max-w-md rounded-2xl bg-white border-2 border-[#D32F2F] p-5'>
            <h3 className='text-[#D32F2F] text-lg font-semibold mb-3'>
              {t(lang, 'other.modalTitleOccasion')}
            </h3>
            <input
              autoFocus
              value={customValue}
              onChange={(e) => setCustomValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleConfirm()
                if (e.key === 'Escape') handleClose()
              }}
              placeholder={t(lang, 'other.placeholderOccasion')}
              className='w-full border px-4 py-2 rounded-md border-gray-400'
              type='text'
            />

            <div className='mt-4 flex gap-2 justify-end'>
              <button
                type='button'
                onClick={handleClose}
                className='px-4 py-2 rounded-md border border-gray-300 text-gray-700 cursor-pointer'
              >
                {t(lang, 'other.cancel')}
              </button>
              <button
                type='button'
                onClick={handleConfirm}
                className='px-4 py-2 rounded-md bg-[#D32F2F] text-white cursor-pointer'
              >
                {t(lang, 'other.confirm')}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default OccassionBox
