const STRINGS = {
  tl: {
    'lang.tagalog': 'Tagalog',
    'lang.english': 'English',

    'header.cta': 'Hanap Regalo',

    'steps.event': 'Okasyon',
    'steps.person': 'Tao',
    'steps.details': 'Detalye',
    'steps.ideas': 'Ideas',

    'occasion.title': 'Anong Okasyon?',
    'person.title': 'Sino ang pagbibigyan mo?',

    'details.title': 'Magdagdag ng details',
    'details.optional': '(Optional)',
    'details.ageLabel': 'Edad ng iyong {title}',
    'details.yearsOld': 'Taong Gulang',
    'details.tasteLabel': 'Taste at Interests ni {title}',
    'details.giftCategory': 'Gift Category',
    'details.giftStyle': 'Gift Style',
    'details.priceRange': 'Price Range',
    'details.submit': 'Hanapin ang perfect na regalo',

    'ideas.title': 'Ito ang mga perfect na regalo para sa {person} mo!',
    'ideas.subtitle':
      'These recommendations are generated entirely by AI, carefully selected based on the information you provided. Each suggestion is tailored to help you find the perfect gift quickly and easily, saving you time and effort.',
    'ideas.inputLabel': "Gusto mo ng mas magagandang ideya?",
    'ideasBox.estimated': 'Estimated Price Range: {price} Pesos',
    'ideasBox.cta': '> Tingnan ang Image at Options sa Pagbili',

    'loading.title': 'Gumagawa ng gift ideas…',

    'other.modalTitleOccasion': 'Ilagay ang exact na occasion',
    'other.placeholderOccasion': 'Hal. Company party, Baby shower, etc.',
    'other.modalTitlePerson': 'Ilagay kung sino ang pagbibigyan',
    'other.placeholderPerson': 'Hal. Tita, Boss, Classmate, etc.',
    'other.cancel': 'Cancel',
    'other.confirm': 'OK',
  },
  en: {
    'lang.tagalog': 'Tagalog',
    'lang.english': 'English',

    'header.cta': 'Find a Gift',

    'steps.event': 'Occasion',
    'steps.person': 'Person',
    'steps.details': 'Details',
    'steps.ideas': 'Ideas',

    'occasion.title': 'What’s the occasion?',
    'person.title': 'Who are you giving it to?',

    'details.title': 'Add details',
    'details.optional': '(Optional)',
    'details.ageLabel': "{title}'s Age",
    'details.yearsOld': 'Years old',
    'details.tasteLabel': "{title}'s Taste and Interests",
    'details.giftCategory': 'Gift Category',
    'details.giftStyle': 'Gift Style',
    'details.priceRange': 'Price Range',
    'details.submit': 'Find the perfect gift',

    'ideas.title': 'Here are the perfect gifts for your {person}!',
    'ideas.subtitle':
      'These recommendations are generated entirely by AI, carefully selected based on the information you provided. Each suggestion is tailored to help you find the perfect gift quickly and easily, saving you time and effort.',
    'ideas.inputLabel': "Want Better Ideas?",
    'ideasBox.estimated': 'Estimated Price Range: {price} PHP',
    'ideasBox.cta': '> View image and buying options',
    

    'loading.title': 'Generating gift ideas…',

    'other.modalTitleOccasion': 'Enter the exact occasion',
    'other.placeholderOccasion': 'e.g. Company party, Baby shower, etc.',
    'other.modalTitlePerson': 'Enter who it’s for',
    'other.placeholderPerson': 'e.g. Aunt, Boss, Classmate, etc.',
    'other.cancel': 'Cancel',
    'other.confirm': 'OK',
  },
}

export const t = (lang, key, params = {}) => {
  const template = STRINGS?.[lang]?.[key] ?? STRINGS.tl?.[key] ?? key
  return template.replace(/\{(\w+)\}/g, (_, name) => {
    const value = params[name]
    return value === undefined || value === null ? '' : String(value)
  })
}
