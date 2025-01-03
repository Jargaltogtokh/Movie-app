"use client";

import { Input } from "@/components/ui/input";
import { ChangeEvent } from "react";

type SearchInputProps = {
  value: string;
  handleChange: (_event: ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInput = ({ value, handleChange }: SearchInputProps) => {
  return (
    <Input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Search..."
      className="bg-black "
    />
  );
};
