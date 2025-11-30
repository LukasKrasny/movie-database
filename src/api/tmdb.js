import axios from "axios"

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = "https://api.themoviedb.org/3"

export const fetchPopularMovies = async () => {
  const response = await axios.get(`${BASE_URL}/movie/popular`, {
    params: {
      api_key: API_KEY,
      language: "cs-CZ",
    },
  })
  return response.data.results
}

export const searchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query: query,
      language: "cs-CZ",
    },
  })
  return response.data.results
}