import { create } from 'zustand'


const useUser = create((set) => ({
    occasion: null,
    occasionPicture: null,
    person: null,
    personPicture: null,
    ideas: [],
    loading: false,
    isFormComplete: false,
    setOccassion: (occasionData, occasionPictureData) => set({ occasion: occasionData, occasionPicture: occasionPictureData }),
    setPerson: (personData, personPictureData) => set({ person: personData, personPicture: personPictureData }),
    setIdeas: (ideasData) => set({ ideas: ideasData }),
    setLoading: (bool) => set({ loading: bool }),
    setFormIsComplete: (bool) => set({ isFormComplete: bool }),
    clearOccasion: () => set({ occasion: null, occasionPicture: null }),
    clearPerson: () => set({ person: null, personPicture: null })
}))

export default useUser