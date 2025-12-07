import axios from "axios"

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = "https://api.themoviedb.org/3"

export const fetchPopularMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
      },
    })
    
    const moviesWithCzechFallback = await Promise.all(
      response.data.results.map(async (movie) => {
        try {
          const czechResponse = await axios.get(`${BASE_URL}/movie/${movie.id}`, {
            params: {
              api_key: API_KEY,
              language: "cs-CZ",
            },
          })
          
          return {
            ...movie,
            title: czechResponse.data.title && isCzechText(czechResponse.data.title) 
              ? czechResponse.data.title 
              : movie.title,
            overview: czechResponse.data.overview && isCzechText(czechResponse.data.overview)
              ? czechResponse.data.overview
              : movie.overview,
          }
        } catch (error) {
          console.warn(`Could not fetch Czech translation for movie ${movie.id}`)
          return movie
        }
      })
    )
    
    return moviesWithCzechFallback
  } catch (error) {
    console.error("Error fetching popular movies:", error)
    throw error
  }
}

const isCzechText = (text) => {
  if (!text) return false
  const czechChars = /[čřšžýáíé]/i
  return czechChars.test(text)
}

export const searchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query: query,
      language: "cs-CZ"
    },
  })
  return response.data.results
}