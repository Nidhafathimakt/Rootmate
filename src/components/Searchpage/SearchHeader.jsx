import React from "react";
import { MapPin, Calendar, Users } from "lucide-react";

const SearchHeader = () => {
  return (
    <div className="bg-white border border-gray-300">
      <div className="max-w-7xl mx-auto px-4 md:px-16 py-8">
        
        {/* Title */}
        <h1 className="text-3xl font-semibold text-gray-800">
          Search Results
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 mt-1">
          Paris <span className="mx-2">|</span> May 15 – 20
          <span className="mx-2">|</span> 2 Travelers
        </p>

        {/* Mini Search Bar */}
        <div className="mt-6 bg-gray-50 border border-gray-300 rounded-xl p-3 flex flex-col md:flex-row gap-3 items-center">
          
          {/* Location */}
          <div className="flex items-center gap-2 flex-1 px-3 py-2 bg-white border border-gray-300 rounded-lg w-full">
            <MapPin size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Where: Paris"
              className="w-full outline-none text-sm"
            />
          </div>

          {/* Date */}
          <div className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-lg w-full md:w-auto">
            {/* <Calendar size={18} className="text-gray-400" /> */}
            <input
               type="date"
              placeholder="May 15 – 20"
              className="outline-none text-sm w-full md:w-32"
            />
          </div>

          {/* Travelers */}
          <div className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-lg w-full md:w-auto">
            <Users size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="2 Travelers"
              className="outline-none text-sm w-full md:w-28"
            />
          </div>

          {/* Search Button */}
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 w-full md:w-auto">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;
