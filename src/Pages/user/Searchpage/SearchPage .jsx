import React from "react";

import SearchHeader from './SearchHeader';
import FiltersPanel from "./FiltersPanel";
import SearchResults from "./SearchResults";


const SearchPage = () => {
  return (
    <>
      
      <SearchHeader/>

      <div className=" mx-auto px-4 md:px-16 py-8 flex flex-col md:flex-row gap-6">
        <FiltersPanel />
        <SearchResults />
      </div>
      
    </>
  );
};

export default SearchPage;
