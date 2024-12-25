import { options } from "@/constants/api";
import { Movie } from "@/constants/types";

type Props = {
  title: string;
  endpoint: string;
};

export const Section = async ({ title, endpoint }: Props) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${endpoint}?language=en-US&page=1`,
    options
  );
  const resJson = await response.json();
  const movies: Movie[] = resJson?.results?.slice(0, 10);
  console.log(movies);

  return (
    <div className="p-3">
      <h1 className="font-semibold">{title}</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {movies.map((movie) => (
          <div key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="rounded-md"
            />
            <div>{movie.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
