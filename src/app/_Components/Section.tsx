import { options } from "@/constants/api";
import { Movie } from "@/constants/types";
import Link from "next/link";

type Props = {
  title: string;
  endpoint: string;
  moreLink?: string;
};

export const Section = async ({ title, endpoint, moreLink }: Props) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/${endpoint}`,
    options
  );
  const resJson = await response.json();
  const movies: Movie[] = resJson?.results?.slice(0, 10);

  const href = moreLink ? moreLink : `/${endpoint}`;
  console.log(movies);

  return (
    <div className="p-3">
      <h1 className="font-semibold">{title}</h1>
      <Link href={href}>
        <p className="flex justify-end"> View all</p>
      </Link>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-zinc-800 rounded-lg">
            <Link href={`/movie/${movie.id}`}>
              <div className="cursor-pointer">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie?.title}
                  className="rounded-t-lg"
                />
                <p>
                  <span>⭐️ </span>
                  {movie.vote_average.toFixed(1)}
                  <span className="text-gray-400"> /10 </span>
                </p>
                <div>{movie.title}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
