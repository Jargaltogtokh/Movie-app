"use client";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { options } from "@/constants/api";
import { GenreType } from "@/constants/types";
import { ChevronDown, ChevronRight, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GiClassicalKnowledge } from "react-icons/gi";

export const FilterGenre = () => {
  //1. Fetch all genre
  //2. Display all genre
  //3. On click genre, filter movie by genre
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?language=en-US`,
        options
      );
      const data = await response.json();
      setGenres(data.genres);
    };
    fetchGenres();
  }, []);

  return (
    <Popover>
      <PopoverTrigger>
        <div className="flex border p-1 rounded-sm pl-3 gap-1 pr-3">
          <ChevronDown />
          Genre
        </div>
      </PopoverTrigger>
      <PopoverContent className="flex flex-wrap gap-1">
        <div className="flex flex-col">
          <p className="font-extrabold"> Genres</p>
          <p> See lists of movies by genre</p>
        </div>
        {genres.map((genre: GenreType) => (
          <Link
            href={`/discover?with_genres=${genre.id}`}
            key={`genre-${genre.id}`}
          >
            <Badge variant="outline" key={`genre-${genre.id}`}>
              {genre?.name} <ChevronRightIcon />
            </Badge>
          </Link>
        ))}
      </PopoverContent>
    </Popover>
  );
};
