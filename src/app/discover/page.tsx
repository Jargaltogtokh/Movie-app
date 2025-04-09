"use client";
import MovieCard from "@/app/_Components/Moviecard";
import { options } from "@/constants/api";
import { Movie } from "@/constants/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

// This is the inner component that uses the searchParams hook
function DiscoverContent() {
  const searchParams = useSearchParams();
  const genres = searchParams.get("with_genres");

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${genres}&language=en-US&page=1`,
        options
      );
      const data = await response.json();
      setMovies(data.results?.slice(0, 5) || []);
    };

    if (genres) {
      fetchMovies();
    }
  }, [genres]);

  return (
    <div className="p-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
      {movies?.map((movie) => (
        <MovieCard movie={movie} key={`movie-${movie.id}`} />
      ))}
    </div>
  );
}

// The main export wraps the inner component with Suspense
export default function SearchResultPage() {
  return (
    <Suspense fallback={<div>Loading search results...</div>}>
      <DiscoverContent />
    </Suspense>
  );
}
