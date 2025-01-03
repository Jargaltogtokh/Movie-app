"use client"

import { options } from "@/constants/api"
import { useEffect, useState } from "react"

export const SearchByName = () => {
    const [search, setSearch] = useState("");
    const [movie, setMovie] = useState(null);
    const [isclient, setIsClient]= useState(false);
    
    const onChangePage = (event: any) => {
        setSearch(event.target.value);
      };

    const onPressEnter = (e:any) => {
        if (e.code === "Enter") {setMovie(search);}
    };

    useEffect (() => {setIsClient (true)}, []); 

    useEffect (()=> {fetch(`https://api.themoviedb.org/3/movie/`,
            options
          )
          .then((response) => response.json())
          .then((data) => {
      console.log(data);
    return (  
        <div>
        <input
        type="text"
        value={search}
        onChange={onChangePage}
        onKeyDown={onPressEnter}
        placeholder="Search for a movie"
        />
        {movie && <div> Searching for: {movie} </div>}
        </div>
        );
};