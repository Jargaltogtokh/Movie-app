'use client'
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { options } from "@/constants/api";
import { GenreType } from "@/constants/types";
import Link from "next/link";
import { useEffect, useState } from "react"


export const FilterGenre= () => {
    //1. Fetch all genre
    //2. Display all genre
    //3. On click genre, filter movie by genre
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchGenres = async () => {
            const response = await fetch (
                `https://api.themoviedb.org/3/genre/movie/list?language=en-US`, options);
            ;
            const data = await response.json();
            setGenres (data.genres);
        };
        fetchGenres();
    }, [])

    const onClickGenre = (genreId: number) => {
       `https://api.themoviedb.org/3/discover/movie?with_genres=16&language=en-US&page=1`
    }


    return 
        <Popover>
            <PopoverTrigger> 
                <div className="border rounded-lg p-4 w-{150px}"> Genre </div>
            </PopoverTrigger>
            <PopoverContent> {genres.map((genre: GenreType)=> 
                <Link href={`/search?with_genres=${genre.id}`}>
                <Badge key={`genre-${genre.id}`}> {genre?.name} </Badge> </Link>)} </PopoverContent>
        </Popover>
 
    
}