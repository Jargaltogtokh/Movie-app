"use client";

import { options } from "@/constants/api";
import { Movie } from "@/constants/types";
import MovieCard from "../_Components/Moviecard";
import { useEffect, useState } from "react";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { Pagination } from "../_Components/Pagination";

export default function Page() {
  const params = useParams(); // Call useParams to get the parameters
  const category = params.category; // Extract 'category' from params
  const [movies, setMovies] = useState<Movie[]>([]);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  const [pageInfo, setPageInfo] = useState<PageInfo>({currentPage: 0, totalPages: 0});

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${params.category}?language=en-US&page=${page}`,
          options
        );

        const data = await response.json();
        // const data: Movie[] = resJson.results;
        setMovies(data.results.slice(0, 5));
        setPageInfo({currentPage: Number(page), totalPages: data.total_pages})
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [params]); // Re-run the effect when 'category' changes

  return (
    <div>
      <h1 className="font-bold text-2xl mb-4 capitalize">{category}</h1>
      <div className="p-4 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:px-10">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <PaginationControl pageInfo={pageInfo} />
    </div>
  );
}
