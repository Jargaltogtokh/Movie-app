"use client";
import MovieCard from "@/app/_Components/Moviecard";
import { options } from "@/constants/api";
import { Movie } from "@/constants/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchResultPage() {
  const searchParams = useSearchParams();
  const genres = searchParams.get("with_genres");

  const [movies, setMovies] = useState<Movie[]>();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${genres}&language=en-US&page=1`,
        options
      );
      const data = await response.json();
      setMovies(data.results?.slice(0, 5) || []);
    };
    fetchMovies();
  }, [genres]);

  return (
    <div className="p-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
      {movies?.map((movie) => (
        <MovieCard movie={movie} key={`movie-${movie.id}`} />
      ))}
    </div>
  );
}
