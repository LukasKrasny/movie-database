import { Star } from "lucide-react";

const MovieCard = ({ movie }) => {
  if (!movie) return null;

  return (
    <div className="p-3 m-3 rounded-lg border-2 border-more-than-a-week 
                    transform hover:scale-105 hover:border-tawny-olive transition-transform duration-200 ease-in-out
                    flex flex-col min-h-[380px]">
      <img className="rounded-lg w-full object-cover"
        src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="mt-4 mb-1">
        <h3 className="text-tawny-olive text-xl font-semibold leading-tight text-center">
        {movie.title ? movie.title : movie.original_title}
        </h3> 
      </div>
      <div className="mt-auto justify-center flex items-center pt-2 border-t border-scarabeus-sacer">

        <div className="flex items-center text-md font-bold text-tawny-olive">
          <span className="text-lg ml-1">
            <Star/>{movie.vote_average.toFixed(1)}    
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
