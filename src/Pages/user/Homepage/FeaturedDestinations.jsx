import DestinationCard from "./DestinationCard";
import React from "react";


const FeaturedDestinations = () => {
  const destinations = [
    {
      title: "Kyoto, Japan",
      desc: "Experience the timeless beauty of ancient temples.",
      img: "/images/kyoto.jpg",
    },
    {
      title: "Maldives",
      desc: "Relax in overwater bungalows.",
      img: "/images/maldives.jpg",
    },
    {
      title: "Dublin, Ireland",
      desc: "Discover historic castles and pubs.",
      img: "/images/dublin.jpg",
    },
    {
      title: "Marrakech, Morocco",
      desc: "Immerse in vibrant culture.",
      img: "/images/marrakech.jpg",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <h2 className="text-center text-2xl font-semibold mb-10">
        Featured Destinations
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-16">
        {destinations.map((item, index) => (
          <DestinationCard key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedDestinations;
