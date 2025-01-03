"use client";

import { ChangeEvent, useState } from "react";
import SearchResultPage from "../discover/page";
import { SearchInput } from "./SearchInput";

export const SearchForMainPage = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="relative">
      <SearchInput handleChange={handleChange} value={searchValue} />
      {searchValue && <SearchResultList searchValue={searchValue} />}
    </div>
  );
};
