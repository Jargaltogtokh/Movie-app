import { Movie } from "@/constants/types";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div key={movie.id}>
      <img
        src={`https://image.tmdb.org/t/p/w500${
          movie?.poster_path || movie?.backdrop_path || ""
        }`}
        alt={movie.title}
        className="rounded-md"
      />
      <h2> {movie.title}</h2>
    </div>
  );
}
