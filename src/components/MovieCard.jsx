const MovieCard = ({ movie }) => {
  if (!movie) return null;

  return (
    <div className="p-2 m-2 shadow-lg rounded-lg border-solid border-2 border-more-than-a-week transform hover:scale-105 hover:border-tawny-olive transition-transform duration-200 ease-in-out">
      <img
        className="rounded-lg w-full h-auto"
        src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
        alt={movie.title ? movie.title : movie.original_title}
      />
      <h3 className="pb-2 mt-4 text-2xl text-tawny-olive font-semibold text-center">
        {movie.title}
      </h3>
      {/* <p className="inline-block text-more-than-a-week text-sm mb-3">
        {movie.overview.length > 100 ? movie.overview.substring(0, 100) + "..." : movie.overview}
      </p> */}
      <span
        className="flex justify-center bg-corn-harvest text-black-wash 
        text-lg font-semibold rounded-full px-3 py-2 m-4"
      >
        Hodnocení: {movie.vote_average.toFixed(1)}
      </span>
      {/* <span className={`inline-block text-xs font-semibold px-2 py-1 rounded-full 
        ${movie.adult ? 
          "bg-tawny-olive text-black-wash" : "text-more-than-a-week"
        }`}
      >
        {movie.adult ? "18+" : "Věk Neomezen"}
      </span> */}
    </div>
  );
};

export default MovieCard;
