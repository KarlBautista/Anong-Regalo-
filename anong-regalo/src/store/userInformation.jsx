import { create } from 'zustand'


const useUser = create((set) => ({
    lang: 'tl',
    occasion: null,
    occasionPicture: null,
    person: null,
    personPicture: null,
    ideas: [],
    loading: false,
    lastFormData: null,
    recommendationsError: null,
    isFormComplete: false,
    setLang: (lang) => set({ lang }),
    setOccassion: (occasionData, occasionPictureData) => set({ occasion: occasionData, occasionPicture: occasionPictureData }),
    setPerson: (personData, personPictureData) => set({ person: personData, personPicture: personPictureData }),
    setIdeas: (ideasData) => set({ ideas: ideasData }),
    setLoading: (bool) => set({ loading: bool }),
    setLastFormData: (formData) => set({ lastFormData: formData }),
    setRecommendationsError: (message) => set({ recommendationsError: message }),
    setFormIsComplete: (bool) => set({ isFormComplete: bool }),
    clearOccasion: () => set({ occasion: null, occasionPicture: null }),
    clearPerson: () => set({ person: null, personPicture: null }),
    clearIdeas: () => set({ ideas: [], isFormComplete: false }),
}))

export default useUser