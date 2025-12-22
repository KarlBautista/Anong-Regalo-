import { create } from 'zustand'


const useUser = create((set) => ({
    occasion: null,
    occasionPicture: null,
    person: null,
    personPicture: null,
    setOccassion: (occasionData, occasionPictureData) => set({ occasion: occasionData, occasionPicture: occasionPictureData }),
    setPerson: (personData, personPictureData) => set({ person: personData, personPicture: personPictureData }),

    
}))

export default useUser