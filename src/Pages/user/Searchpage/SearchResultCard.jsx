import React from "react";
import { Star } from "lucide-react";

const SearchResultCard = ({ data }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-xl p-4 flex flex-col md:flex-row gap-4 hover:shadow-md transition">
      
      {/* IMAGE */}
      <img
        src={data.image}
        alt={data.title}
        className="w-full md:w-56 h-40 object-cover rounded-lg"
      />

      {/* CONTENT */}
      <div className="flex-1 flex flex-col justify-between">
        
        {/* TOP CONTENT */}
        <div>
          {/* TITLE */}
          <h3 className="text-lg font-semibold text-gray-800">
            {data.title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-sm text-gray-500 mt-1">
            {data.description}
          </p>

          {/* RATING */}
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center text-yellow-500">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={16}
                  fill={
                    index < Math.round(data.rating)
                      ? "currentColor"
                      : "none"
                  }
                />
              ))}
            </div>

            <span className="text-sm text-gray-600">
              {data.rating} ({data.reviews} reviews)
            </span>
          </div>

          {/* DURATION */}
          <p className="text-sm text-gray-500 mt-1">
            {data.duration}
          </p>
        </div>

        {/* BOTTOM CONTENT */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-lg font-semibold text-gray-800">
            from{" "}
            <span className="text-indigo-600">
              ${data.price}
            </span>
          </p>

          <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchResultCard;
