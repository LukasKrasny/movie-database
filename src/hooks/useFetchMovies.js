import { useState, useEffect } from "react"
import { fetchPopularMovies } from "../api/tmdb"

const useFetchMovies = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchPopularMovies()
      .then(movies => setData(movies))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [])

  return {data, loading, error} 
}
export default useFetchMovies