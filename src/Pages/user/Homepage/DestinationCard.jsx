import React from "react";

const DestinationCard = ({ data }) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition">
      <img
        src={data.img}
        alt={data.title}
        className="rounded-t-xl h-44 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold">{data.title}</h3>
        <p className="text-sm text-gray-500 mt-2">{data.desc}</p>

        <button className="text-indigo-600 text-sm mt-3">
          Explore
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;
