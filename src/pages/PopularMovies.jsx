import useFetchMovies from "../hooks/useFetchMovies";
import MovieCard from "../components/MovieCard";

const PopularMovies = () => {
  const { data, loading, error } = useFetchMovies();

  if (loading) return <div className="loading">Načítání...</div>;
  if (error) return <div>Chyba: {error.message}</div>;

  return (
    <div className="bg-black-wash text-black-wash min-h-screen p-10">
      <h1 className="text-5xl m-5 text-center text-corn-harvest font-bold">
        Oblíbené filmy
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data && data.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default PopularMovies;
