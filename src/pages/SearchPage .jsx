import React from "react";
import Navbar from "../components/Navbar";
import SearchHeader from "../components/Searchpage/SearchHeader";
import FiltersPanel from "../components/Searchpage/FiltersPanel";
import SearchResults from "../components/Searchpage/SearchResults";
import Footer from "../components/Footer";

const SearchPage = () => {
  return (
    <>
      <Navbar />
      <SearchHeader />

      <div className=" mx-auto px-4 md:px-16 py-8 flex flex-col md:flex-row gap-6">
        <FiltersPanel />
        <SearchResults />
      </div>
      <Footer/>
    </>
  );
};

export default SearchPage;
