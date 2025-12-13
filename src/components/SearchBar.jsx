import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <div className="max-w-79.25 ring-1 ring-primary max-[440px]:max-w-50 w-full flex items-center gap-1">
      <input
        type="text"
        placeholder="search anything"
        className="px-3 py-1.5 pr-5 w-full outline-none text-sm normal-case"
      />
      <div className="w-10 py-2 bg-primary text-head-txt flex items-center justify-center">
        <Search className="w-4 h-4 text-head-txt cursor-pointer" />
      </div>
    </div>
  );
};

export default SearchBar;
