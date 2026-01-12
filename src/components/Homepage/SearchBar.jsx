import React from "react";
import { MapPin, Calendar, Users } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="mt-10 bg-white rounded-2xl shadow-xl px-4 sm:px-6 py-5 w-full max-w-5xl mx-auto text-black">
      
      {/* Inputs Row */}
      <div className="
        flex flex-col 
        md:flex-row 
        md:items-center 
        gap-4
      ">

        {/* Location */}
        <div className="
          flex items-center gap-3 
          flex-1 
          px-4 py-3 
          border rounded-xl
          w-full
        ">
          <MapPin className="text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Where are you going?"
            className="w-full outline-none text-sm text-gray-900"
          />
        </div>

        {/* Date */}
        <div className="
          flex items-center gap-3 
          px-4 py-3 
          border rounded-xl
          w-full md:w-auto
        ">
          <Calendar className="text-gray-400" size={20} />  
          <input
               type="date"
            placeholder="Pick your dates"
            className="w-full md:w-32 outline-none text-sm text-gray-900"
          />
        </div>

        {/* Travelers */}
        <div className="
          flex items-center gap-3 
          px-4 py-3 
          border rounded-xl
          w-full md:w-auto
        ">
          <Users className="text-gray-400" size={20} />
          <input
            type="text"
            placeholder="2 Travelers"
            className="w-full md:w-28 outline-none text-sm text-gray-900"
          />
        </div>
      </div>

      {/* Search Button */}
      <button className="
        mt-5 
        bg-indigo-600 text-white 
        px-10 py-3 
        rounded-xl 
        hover:bg-indigo-700 
        w-full md:w-auto
      ">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
