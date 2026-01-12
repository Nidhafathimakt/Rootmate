import ItineraryCard from "./ItineraryCard";
import React from "react";


const PopularItineraries = () => {
  const itineraries = [
    {
      title: "Romantic Paris Getaway",
      days: 5,
      price: 1800,
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    },
    {
      title: "African Safari Adventure",
      days: 7,
      price: 3500,
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801",
    },
    {
      title: "Canadian Rockies Expedition",
      days: 10,
      price: 2200,
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-center text-2xl font-semibold mb-10">
        Popular Itineraries
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-16">
        {itineraries.map((item, index) => (
          <ItineraryCard key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default PopularItineraries;
