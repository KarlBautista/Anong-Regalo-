import { create } from 'zustand'


const useUser = create((set) => ({
    occasion: null,
    occasionPicture: null,
    person: null,
    personPicture: null,
    ideas: [],
    loading: false,
    setOccassion: (occasionData, occasionPictureData) => set({ occasion: occasionData, occasionPicture: occasionPictureData }),
    setPerson: (personData, personPictureData) => set({ person: personData, personPicture: personPictureData }),
    setIdeas: (ideasData) => set({ ideas: ideasData }),
    setLoading: (bool) => set({ loading: bool }),
    
}))

export default useUser