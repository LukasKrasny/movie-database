import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { fetchMovieDetails } from "../api/tmdb.js"

const MovieDetail = () => {
  const { id } = useParams() 
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getMovie = async () => {
      setLoading(true)
      try {
        const data = await fetchMovieDetails(id)
        setMovie(data)
        setError(null)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    getMovie()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [id])

  if (loading)
    return (
      <div className="text-center mt-20 text-2xl text-white">
        Načítám detail filmu...
      </div>
    )
  if (error)
    return (
      <div className="text-center mt-20 text-red-500">
        Chyba při načítání: {error.message}
      </div>
    )
  if (!movie) return null

  const director = movie.credits?.crew?.find(
    (member) => member.job === "Director",
  )
  const topCast = movie.credits?.cast?.slice(0, 10) 
  const similarMovies = movie.similar?.results?.slice(0, 4) 


  const hours = Math.floor(movie.runtime / 60)
  const minutes = movie.runtime % 60

  return (
    <div className="container mx-auto px-4 py-8 mt-10">
      {/* HLAVNÍ BLOK: Plakát a základní info */}
      <div className="flex flex-col md:flex-row gap-8 mb-12 bg-black-wash p-6 rounded-2xl shadow-xl">
        {/* Plakát */}
        <div className="w-full md:w-1/3 lg:w-1/4 shrink-0">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full rounded-xl shadow-lg"
            />
          ) : (
            <div className="w-full h-96 bg-gray-800 flex items-center justify-center rounded-xl">
              <span className="text-gray-500">Bez plakátu</span>
            </div>
          )}
        </div>

        {/* Informace */}
        <div className="flex-1 text-white">
          <h1 className="text-4xl md:text-5xl font-bold text-tawny-olive mb-2">
            {movie.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-6">
            <span>{movie.release_date?.split("-")[0]}</span>
            <span>•</span>
            <span>
              {hours}h {minutes}m
            </span>
            <span>•</span>
            <div className="flex gap-2">
              {movie.genres?.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-scrabeus-sacer text-tawny-olive px-2 py-1 rounded-md text-xs"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>

          {/* Režisér a Hodnocení */}
          <div className="mb-6 flex gap-6">
            <div>
              <p className="text-gray-400 text-sm">Režie</p>
              <p className="font-semibold text-lg">
                {director ? director.name : "Neznámo"}
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Hodnocení</p>
              <p className="font-semibold text-lg text-tawny-olive">
                ⭐ {movie.vote_average?.toFixed(1)} / 10
              </p>
            </div>
          </div>

          <div>
            <p className="text-gray-400 text-sm mb-1">Popis</p>
            <p className="leading-relaxed text-gray-200">
              {movie.overview ||
                "K tomuto filmu zatím není k dispozici žádný popis."}
            </p>
          </div>
        </div>
      </div>

      {/* OBSAZENÍ (Herci) */}
      {topCast?.length > 0 && (
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-tawny-olive mb-6">Obsazení</h2>
          <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
            {topCast.map((actor) => (
              <div
                key={actor.id}
                className="min-w-[120px] bg-gray-900 rounded-lg overflow-hidden shrink-0"
              >
                {actor.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                    alt={actor.name}
                    className="w-full h-40 object-cover"
                  />
                ) : (
                  <div className="w-full h-40 bg-gray-800 flex items-center justify-center">
                    📷
                  </div>
                )}
                <div className="p-2 text-center">
                  <p className="text-white text-sm font-bold truncate">
                    {actor.name}
                  </p>
                  <p className="text-gray-400 text-xs truncate">
                    {actor.character}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* PODOBNÉ FILMY */}
      {similarMovies?.length > 0 && (
        <div>
          <h2 className="text-3xl font-bold text-tawny-olive mb-6">
            Podobné filmy
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {similarMovies.map((similar) => (
              <Link
                to={`/movie/${similar.id}`}
                key={similar.id}
                className="block group"
              >
                <div className="bg-gray-900 rounded-lg overflow-hidden transition-transform group-hover:scale-105">
                  {similar.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w342${similar.poster_path}`}
                      alt={similar.title}
                    />
                  ) : (
                    <div className="h-64 bg-gray-800"></div>
                  )}
                  <p className="text-white text-center p-2 text-sm truncate">
                    {similar.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default MovieDetail
