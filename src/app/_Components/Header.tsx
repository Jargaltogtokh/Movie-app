import Image from "next/image";
import { FilterGenre } from "./FilterGenre";
import { SearchByName } from "./SearchByName";
import { Input } from "@/components/ui/input";
import { Moon } from "lucide-react";
import { SearchForMainPage } from "./SearchMainPage";

export const Header = () => {
  return (
    <div className="flex mt-0 justify-between p-6">
      <div className="flex gap-5">
           <a href="https://movie-app-git-main-jagaas-projects-3a457d9e.vercel.app"> <img src="film_2.png" className="w-[20px] h-[20px]"/> </a> 
        <p className="italic font-bold mb-[10px] text-blue-600">Movie Z</p>
      </div>
      <div className="flex justify-items-center items-center gap-2 ">
        <FilterGenre />
        <SearchForMainPage />
        <div className="rounded-sm border p-1">
          <Moon />
        </div>
      </div>
    </div>
  );
};
