import { GoogleGenAI } from "@google/genai"

export async function getGiftRecommendations(formData) {
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY

  const prompt = `
  You are a gift recommendation assistant.

  Rules:
  1. Recommend ONLY gifts that match the given category.
  2. Recommend ONLY gifts related to the user's interest.
  3. Make the gift appropriate for the given age and relationship.
  4. Output ONLY raw JSON. No markdown, no extra text, no explanations.
  5. Return exactly 3 items in this format:

  [
   {
    "name": "",
    "description": "",
    "estimated_price_php": "",
    "search_query": ""        
   }
  ]

  User Preferences:
  - Age: ${formData.age}
  - Relationship: ${formData.person}
  - Occasion: ${formData.occasion}
  - Interest: ${formData.interest.join(', ')}
  - Category: ${formData.giftCategory}
  - Gift Style: ${formData.giftStyle}
  - Price Range: ${formData.priceRange}
  `

  const getGift = new GoogleGenAI({ apiKey: API_KEY })

  const response = await getGift.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt
  })

  const part = response?.candidates?.[0]?.content?.parts?.[0]
  const text = typeof part === 'string' ? part : part?.text
  if (!text) {
    throw new Error('Gemini returned empty content')
  }

  const cleaned = text
    .trim()
    .replace(/^```(?:json)?\s*/i, '')
    .replace(/\s*```$/i, '')
    .trim()

  const parsed = JSON.parse(cleaned)
  if (!Array.isArray(parsed)) {
    throw new Error('Gemini response was not a JSON array')
  }

  return parsed
}