"use client";

import { options } from "@/constants/api";
import { Movie } from "@/constants/types";
import Link from "next/link";
import { useEffect, useState } from "react";

type SearchResultListProps = {
  searchValue: string;
};

export const SearchResultList = ({ searchValue }: SearchResultListProps) => {
  const [movies, setMovies] = useState<Movie[]>();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=1`,
        options
      );
      const data = await response.json();

      setMovies(data.results?.slice(0, 5));
    };
    fetchMovies();
  }, [searchValue]);

  return (
    <div className="absolute top-16 md:top-14 w-full max-w-[577px] bg-background">
      {!movies ? (
        <p> Loading...</p>
      ) : (
        <>
          <div className="p-3 text-white">
            {movies.map((movie) => (
              <Link href={`/movie/${movie.id}`} key={movie.id} className="my-4">
                <div>{movie.title}</div>
              </Link>
            ))}
          </div>
          <div className="p-3 pt-0">
            <Link
              href={`/search?query=${searchValue}&page=1`}
              className="py-2.5 px-4 text-foreground"
            >
              See all results for &#34; {searchValue}&#34;
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
