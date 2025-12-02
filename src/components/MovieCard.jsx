
const MovieCard = ({ movie }) => {
  if (!movie) return null;

  return (
    <div className="my-8 p-4 rounded-lg shadow-lg bg-corn-harvest transform hover:scale-105 transition-transform duration-200 ease-in-out">
      <img
        className="rounded-lg mx-auto"
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />
      <h3 className="text-2xl text-center font-semibold my-2 p-2">{movie.title}</h3>
      <p className="text-center my-2">⭐ {movie.vote_average}/10</p>
      <p className="text-center my-2">{movie.adult ? "18+" : "All Ages"}</p>
      {/* <p className="inline-block">{movie.overview?.substring(0, 350)}...</p> */}
    </div>
  );
};

export default MovieCard;
