import React from "react";
import SearchResultCard from "./SearchResultCard";
import searchResultsMock from "../../data/searchResultsMock";

const SearchResults = () => {
  return (
    <main className="flex-1">
      
      {/* Header */}
      <h2 className="text-lg font-semibold mb-4">
        Showing {searchResultsMock.length} results
      </h2>

      {/* Cards */}
      <div className="space-y-4">
        {searchResultsMock.map((item) => (
          <SearchResultCard key={item.id} data={item} />
        ))}
      </div>
    </main>
  );
};

export default SearchResults;
