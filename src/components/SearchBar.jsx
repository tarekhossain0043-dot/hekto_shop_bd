import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <div className="max-w-79.25 flex-1 w-full relative">
      <input
        type="text"
        placeholder="search anything"
        className="px-3 py-2 pr-12 outline-none focus:ring-primary text-sm normal-case focus:ring-1"
      />
      <div className="absolute w-10 h-full right-0 top-1/2 transform -translate-y-1/2 bg-primary text-head-txt flex items-center justify-center">
        <Search className="w-4 h-4 text-head-txt cursor-pointer" />
      </div>
    </div>
  );
};

export default SearchBar;
