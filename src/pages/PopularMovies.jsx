import useFetchMovies from "../hooks/useFetchMovies";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";

const PopularMovies = () => {
  const { 
    movies, 
    loading, 
    error,
    currentPage,
    totalPages,
    setCurrentPage
   } = useFetchMovies()

  if (loading) return <div className="loading">Načítání...</div>;
  if (error) return <div>Chyba: {error.message}</div>;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 p-10">
      <h1 className="text-5xl m-10 text-center text-tawny-olive font-bold">
        Populární filmy
      </h1>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}

      {/* MŘÍŽKA S FILMY */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {!loading &&
          !error &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default PopularMovies;

