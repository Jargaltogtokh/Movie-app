import { options } from "@/constants/api";
import { Movie } from "@/constants/types";

export default async function Page({ params }: { params: any }) {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/{params.category}?language=en-US&page=1",
    options
  );
  const resJson = await response.json();
  const movies: Movie[] = resJson.results;
  console.log(movies);

  return (
    <div className=" p-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg: grid-cols-5">
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
  );
}
