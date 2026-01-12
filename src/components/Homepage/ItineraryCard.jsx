import React from "react";

const ItineraryCard = ({ data }) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
      
      <img
        src={data.image}
        alt={data.title}
        className="rounded-lg h-44 w-full object-cover"
      />

      <h3 className="font-semibold mt-4">{data.title}</h3>

      <div className="flex justify-between text-sm text-gray-500 mt-2">
        <span>{data.days} Days</span>
        <span>${data.price}</span>
      </div>

      <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
        View Itinerary
      </button>
    </div>
  );
};

export default ItineraryCard;
