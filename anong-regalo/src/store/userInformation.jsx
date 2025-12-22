import { create } from 'zustand'


const useUser = create((set) => ({
    occasion: null,
    occasionPicture: null,
    person: null,
    setOccassion: (occasionData, occasionPictureData) => set({ occasion: occasionData, occasionPicture: occasionPictureData }),
}))

export default useUser