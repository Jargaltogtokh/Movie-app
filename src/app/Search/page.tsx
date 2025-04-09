"use client";
import MovieCard from "@/app/_Components/Moviecard";
import { options } from "@/constants/api";
import { Movie } from "@/constants/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Page from "../movie/[id]/page";

export default function SearchResultPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const [movies, setMovies] = useState<Movie[]>();
  const [pageInfo, setPageInfo] = useState({
    totalPages: 0,
    currentPage: 0,
  });

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=${Page}`,
        options
      );
      const data = await response.json();

      setPageInfo({ currentPage: Number(Page), totalPages: data.total_pages });
      setMovies(data.results?.slice(0, 5));
    };
    fetchMovies();
  }, [query, Page]);

  if (!movies) {
    return <div> Loading ...</div>;
  }
  return (
    <div className="p-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
      {movies?.map((movie) => (
        <MovieCard movie={movie} key={`movie-${movie.id}`} />
      ))}
    </div>
  );
}
