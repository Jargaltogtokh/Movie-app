import Image from "next/image";
import { FilterGenre } from "./FilterGenre";
import { SearchByName } from "./SearchByName";
import { Input } from "@/components/ui/input";
import { Moon } from "lucide-react";

export const Header = () => {
  return (
    <div className="flex mt-0 justify-between p-6">
      <div className="flex gap-5">
        <img src="film_2.png" className="w-[20px] h-[20px]" />
        <p className="italic font-bold mb-[10px] text-blue-600">Movie Z</p>
      </div>
      <div className="flex justify-items-center items-center gap-2 ">
        <FilterGenre />
        <SearchByName />
        <div className="rounded-sm border p-1">
          <Moon />
        </div>
      </div>
    </div>
  );
};
