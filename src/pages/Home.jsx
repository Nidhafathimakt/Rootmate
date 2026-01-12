import FeaturedDestinations from "../components/Homepage/FeaturedDestinations";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PopularItineraries from "../components/Homepage/PopularItineraries";
import SearchBar from "../components/Homepage/SearchBar";
import React from "react";


const Home = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative text-center text-white max-w-3xl px-4">
          <h1 className="text-5xl font-bold mb-4">
            Your next adventure starts here.
          </h1>

          <p className="text-lg mb-6">
            Discover unique destinations and craft your perfect journey with
            WanderPlan.
          </p>

          <button className="px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-700">
            Explore Destinations
          </button>

          {/* ✅ SearchBar Component */}
          <SearchBar />
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="featured">
        {/* normal CSS use cheyyam */}
        <FeaturedDestinations/>
      </section>


      {/* Popular Iternity */}
      <section>
        <PopularItineraries/>

      </section>
      <Footer/>
    </>
  );
};

export default Home;
