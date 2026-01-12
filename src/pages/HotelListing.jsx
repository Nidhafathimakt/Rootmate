import React from "react";
import { HiViewGrid, HiViewList } from "react-icons/hi";
import { FiMap } from "react-icons/fi";

function HotelListing() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {/*  GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* LEFT */}
          <div className="border border-gray-100 shadow rounded-lg p-4 space-y-4">
            <h2 className="font-semibold text-xl">Search by property name</h2>

            <input
              type="text"
              placeholder="e.g. Marriott"
              className="w-full border border-gray-200 rounded px-3 py-2"
            />

            <h3 className="font-semibold text-lg mt-4">Filter by</h3>

            <p className="font-semibold">Popular filters</p>
            <label className="flex gap-2">
              <input type="checkbox" /> Lakeside Beach Access
            </label>
            <label className="flex gap-2">
              <input type="checkbox" /> Breakfast included
            </label>
            <label className="flex gap-2">
              <input type="checkbox" /> Pet friendly
            </label>
            <label className="flex gap-2">
              <input type="checkbox" /> Hotel Type
            </label>
            <label className="flex gap-2">
              <input type="checkbox" /> Kitchenette
            </label>

            <p className="font-semibold mt-4">Price</p>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="0"
                className="w-1/2 border border-gray-200 rounded px-2 py-1"
              />
              <input
                type="number"
                placeholder="1000"
                className="w-1/2 border border-gray-200 rounded px-2 py-1"
              />
            </div>

            <p className="font-semibold mt-4">Guest rating</p>
            <div className="space-y-2">
              <label className="flex gap-2">
                <input type="radio" name="rating" /> Any
              </label>
              <label className="flex gap-2">
                <input type="radio" name="rating" /> Excellent (9+)
              </label>
              <label className="flex gap-2">
                <input type="radio" name="rating" /> Very Good (8+)
              </label>
              <label className="flex gap-2">
                <input type="radio" name="rating" /> Good (7+)
              </label>
            </div>

            <p className="font-semibold mt-4">Amenities</p>
            <label className="flex gap-2">
              <input type="checkbox" /> Pool
            </label>
            <label className="flex gap-2">
              <input type="checkbox" /> Spa
            </label>
            <label className="flex gap-2">
              <input type="checkbox" /> Free Wi-Fi
            </label>
            <label className="flex gap-2">
              <input type="checkbox" /> Parking
            </label>
            <label className="flex gap-2">
              <input type="checkbox" /> Gym
            </label>
          </div>

          {/* RIGHT  */}
          <div className="lg:col-span-3">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
              <h2 className="font-semibold text-lg">5+ properties available</h2>

              <div className="flex items-center gap-3">
                <button className="border border-gray-200 rounded p-2 hover:bg-gray-100">
                  <HiViewGrid size={20} />
                </button>

                <button className="border border-gray-200 rounded p-2 hover:bg-gray-100">
                  <HiViewList size={20} />
                </button>

                <button className="border border-gray-200 rounded px-4 py-2 text-sm flex items-center gap-2 hover:bg-gray-100">
                  <FiMap />
                  Map View
                </button>

                <select className="border border-gray-200 rounded px-3 py-2 text-sm">
                  <option>Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Top Rated</option>
                </select>
              </div>
            </div>

            {/* HOTEL CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-100 rounded-lg shadow p-4">
                <div className="flex flex-col lg:flex-row gap-4">
                  <img
                    src="/photo-1566073771259-6a8506099945.jpeg"
                    alt="hotel"
                    className="rounded-lg w-full lg:w-80 h-48 lg:h-100 object-cover"
                  />

                  <div>
                    <h3 className="font-semibold text-lg mt-1">
                      Boutique Garden Inn
                    </h3>

                    <p className="text-gray-500 text-sm">
                      Miami Beach, Florida
                    </p>

                    <p className="mt-2 text-sm md:text-base">
                      Experience luxury at its finest with breathtaking ocean
                      view
                    </p>

                    <p className="text-blue-600 font-semibold mt-2">
                      $245 / night
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-100 rounded-lg shadow p-4">
                <div className="flex flex-col lg:flex-row gap-4">
                  <img
                    src="/photo-1566073771259-6a8506099945.jpeg"
                    alt="hotel"
                    className="rounded-lg w-full lg:w-80 h-48 lg:h-100 object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg mt-2">
                      Boutique Garden Inn
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Charleston, South Carolina
                    </p>
                    <p>
                      A charming historic inn with lush gardens and personalized
                    </p>
                    <div className="flex  gap-3">
                      <p>Boutique</p>
                      <p>Free Wi-Fi</p>
                    </div>
                    <p className="text-blue-600 font-semibold mt-1">
                      $245 / night
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-100 rounded-lg shadow p-4">
                <div className="flex flex-col lg:flex-row gap-4">
                  <img
                    src="/photo-1566073771259-6a8506099945.jpeg"
                    alt="hotel"
                    className="rounded-lg w-full lg:w-80 h-48 lg:h-100 object-cover"
                  />

                  <div>
                    <h3 className="font-semibold text-lg mt-1">
                      Boutique Garden Inn
                    </h3>

                    <p className="text-gray-500 text-sm">
                      Miami Beach, Florida
                    </p>

                    <p className="mt-2 text-sm md:text-base">
                      Experience luxury at its finest with breathtaking ocean
                      view
                    </p>

                    <p className="text-blue-600 font-semibold mt-2">
                      $245 / night
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-100 rounded-lg shadow p-4">
                <div className="flex flex-col lg:flex-row gap-4">
                  <img
                    src="/photo-1566073771259-6a8506099945.jpeg"
                    alt="hotel"
                    className="rounded-lg w-full lg:w-80 h-48 lg:h-100 object-cover"
                  />

                  <div>
                    <h3 className="font-semibold text-lg mt-1">
                      Boutique Garden Inn
                    </h3>

                    <p className="text-gray-500 text-sm">
                      Miami Beach, Florida
                    </p>

                    <p className="mt-2 text-sm md:text-base">
                      Experience luxury at its finest with breathtaking ocean
                      view
                    </p>

                    <p className="text-blue-600 font-semibold mt-2">
                      $245 / night
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-100 rounded-lg shadow p-4">
                <div className="flex flex-col lg:flex-row gap-4">
                  <img
                    src="/photo-1566073771259-6a8506099945.jpeg"
                    alt="hotel"
                    className="rounded-lg w-full lg:w-80 h-48 lg:h-100 object-cover"
                  />

                  <div>
                    <h3 className="font-semibold text-lg mt-1">
                      Boutique Garden Inn
                    </h3>

                    <p className="text-gray-500 text-sm">
                      Miami Beach, Florida
                    </p>

                    <p className="mt-2 text-sm md:text-base">
                      Experience luxury at its finest with breathtaking ocean
                      view
                    </p>

                    <p className="text-blue-600 font-semibold mt-2">
                      $245 / night
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HotelListing;
