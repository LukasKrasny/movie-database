import { useState, useEffect } from "react"
import { fetchPopularMovies } from "../api/tmdb"

const useFetchMovies = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    setLoading(true)
    setError(null)

    const fetchMovies = async () => {
      try {
        const data = await fetchPopularMovies(currentPage)
        setMovies(data.results)
        setTotalPages(data.total_pages)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  } , [currentPage])

  return { movies, loading, error, currentPage, totalPages, setCurrentPage }
} 

export default useFetchMovies