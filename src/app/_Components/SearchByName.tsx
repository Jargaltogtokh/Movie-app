"use client";

import { options } from "@/constants/api";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export const SearchByName = () => {
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState('');
  const [isClient, setIsClient] = useState(false);

  const onChangePage = (event: any) => {
    setSearch(event.target.value);
  };

  const onPressEnter = (e: any) => {
    if (e.code === "Enter") {
      setMovie(search);
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (movie) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
        options
      )
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
        })
        .catch((error) => console.error("Error fetching movie:", error));
    }
  }, [movie]);

  return (
    <div className="flex gap-2 align-middle border p-1 rounded-sm">
      <Search />
      <input
        type="text"
        value={search}
        onChange={onChangePage}
        onKeyDown={onPressEnter}
        placeholder="Search..."
        className="bg-black "
      />
      {movie && <div>Searching for: {movie}</div>}
    </div>
  );
};
