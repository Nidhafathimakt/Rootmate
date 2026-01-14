import React from "react";

const ListingsApproval = () => {
  const listings = [
    {
      title: "Modern Apartment in Downtown Metropolis",
      location: "Metropolis, CA",
      owner: "Alex Corp Properties",
      desc:
        "Spacious 2-bedroom apartment with excellent city views, fully furnished, close to public transport and amenities.",
      img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    },
    {
      title: "Retail Space Prime Location, Central Business District",
      location: "Gotham City, NY",
      owner: "Wayne Enterprises",
      desc:
        "High-visibility ground floor retail unit, ideal for boutiques or cafes. Heavy foot traffic area.",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    },
    {
      title: "Scenic Land Plot for Development, Lakeside Views",
      location: "Sterling City, WA",
      owner: "Queen Consolidated",
      desc:
        "Expansive land parcel perfect for luxury residential development. Access to private lakeside.",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
      title: "Cozy Family Home with Garden, Suburbs",
      location: "Smallville, KS",
      owner: "Kent Properties",
      desc:
        "Charming 3-bedroom home in a quiet neighborhood. Large backyard, perfect for families.",
      img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    },
    {
      title: "Industrial Warehouse for Logistics",
      location: "Central City, OR",
      owner: "S.T.A.R. Labs",
      desc:
        "State-of-the-art warehouse facility with high ceilings and heavy access. Ideal for distribution.",
      img: "https://images.unsplash.com/photo-1581091870627-3f9c5d4d0c63",
    },
    {
      title: "Luxury Penthouse with Rooftop Terrace",
      location: "Metropolis, CA",
      owner: "Daily Planet Realty",
      desc:
        "Exclusive city views and private rooftop terrace. High-end finishes throughout.",
      img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Pending Listings for Review
        </h1>
        <button className="text-sm px-3 py-1 border rounded-md">
          Help
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white border rounded-lg p-4 mb-6 space-y-3">
        <input
          type="text"
          placeholder="Search listings by title, owner, or location..."
          className="w-full px-4 py-2 border rounded-md text-sm"
        />

        <div className="flex flex-wrap gap-3">
          <button className="px-3 py-1 border rounded-md text-sm">
            Filter by Type
          </button>
          <button className="px-3 py-1 border rounded-md text-sm">
            Filter by Location
          </button>
          <button className="px-3 py-1 border rounded-md text-sm">
            Filter by Submission Date
          </button>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <input type="checkbox" />
          <span className="text-sm text-gray-600">
            Select All Pending (6)
          </span>

          <button className="px-3 py-1 text-sm bg-indigo-600 text-white rounded-md">
            Bulk Approve (0)
          </button>
          <button className="px-3 py-1 text-sm bg-red-500 text-white rounded-md">
            Bulk Reject (0)
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl overflow-hidden"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-44 w-full object-cover"
            />

            <div className="p-4 space-y-2">
              <h3 className="font-semibold text-gray-800">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500">
                📍 {item.location}
              </p>

              <p className="text-sm text-gray-500">
                🏢 {item.owner}
              </p>

              <p className="text-sm text-gray-600">
                {item.desc}
              </p>

              <span className="inline-block text-xs px-3 py-1 rounded-full bg-yellow-100 text-yellow-700">
                Pending
              </span>

              {/* Reviewer Notes */}
              <div>
                <p className="text-xs text-gray-500 mb-1">
                  Reviewer Notes
                </p>
                <input
                  type="text"
                  placeholder="Add notes for this listing..."
                  className="w-full px-3 py-2 border rounded-md text-sm"
                />
              </div>

              {/* Actions */}
              <div className="flex justify-between items-center pt-2">
                <input type="checkbox" />
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-md">
                    Approve
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white text-sm rounded-md">
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-8 text-sm">
        <button className="px-3 py-1 border rounded-md">
          Previous
        </button>
        <span>1</span>
        <span className="text-gray-400">2</span>
        <button className="px-3 py-1 border rounded-md">
          Next
        </button>
      </div>

      
    </div>
  );
};

export default ListingsApproval;
