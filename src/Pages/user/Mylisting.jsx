import React from "react";

const MyListings = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">My Listings</h1>

        <div className="flex gap-3">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700">
            + Add New Listing
          </button>
          <button className="px-4 py-2 border rounded-md text-sm">
            Filter
          </button>
          <button className="px-4 py-2 border rounded-md text-sm">
            Export
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-5 rounded-lg border">
          <p className="text-sm text-gray-500">Total Listings</p>
          <h2 className="text-3xl font-semibold mt-2">6</h2>
          <p className="text-xs text-gray-400 mt-1">
            All properties managed
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg border">
          <p className="text-sm text-gray-500">Active Listings</p>
          <h2 className="text-3xl font-semibold mt-2">3</h2>
          <p className="text-xs text-gray-400 mt-1">
            Currently published and visible
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg border">
          <p className="text-sm text-gray-500">Pending Approval</p>
          <h2 className="text-3xl font-semibold mt-2">1</h2>
          <p className="text-xs text-gray-400 mt-1">
            Awaiting review by admin
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search listings..."
          className="w-full md:w-72 px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-4 text-left">
                <input type="checkbox" />
              </th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Type</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Created On</th>
              <th className="p-4 text-left">Views</th>
              <th className="p-4 text-left">Bookings</th>
              <th className="p-4"></th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {[
              {
                name: "Grand Hyatt Hotel",
                type: "Hotel",
                status: "Published",
                statusColor: "bg-green-100 text-green-700",
                date: "2023-01-15",
                views: 1245,
                bookings: 87,
              },
              {
                name: "The Golden Spoon Restaurant",
                type: "Restaurant",
                status: "Pending Approval",
                statusColor: "bg-yellow-100 text-yellow-700",
                date: "2023-02-20",
                views: 890,
                bookings: 0,
              },
              {
                name: "Coastal Retreat Inn",
                type: "Hotel",
                status: "Draft",
                statusColor: "bg-blue-100 text-blue-700",
                date: "2023-03-10",
                views: 321,
                bookings: 0,
              },
              {
                name: "Mama Mia Italian Eatery",
                type: "Restaurant",
                status: "Published",
                statusColor: "bg-green-100 text-green-700",
                date: "2023-04-01",
                views: 987,
                bookings: 55,
              },
              {
                name: "Mountain View Resort",
                type: "Hotel",
                status: "Rejected",
                statusColor: "bg-red-100 text-red-700",
                date: "2023-05-05",
                views: 150,
                bookings: 0,
              },
              {
                name: "Urban Cafe & Bistro",
                type: "Restaurant",
                status: "Published",
                statusColor: "bg-green-100 text-green-700",
                date: "2023-06-12",
                views: 765,
                bookings: 30,
              },
            ].map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="p-4">
                  <input type="checkbox" />
                </td>
                <td className="p-4 font-medium">{item.name}</td>
                <td className="p-4 text-gray-600">{item.type}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${item.statusColor}`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="p-4 text-gray-500">{item.date}</td>
                <td className="p-4">{item.views}</td>
                <td className="p-4">{item.bookings}</td>
                <td className="p-4 text-right">⋮</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer */}
        <div className="flex justify-between items-center p-4 text-sm text-gray-500">
          <span>0 of 6 listing(s) selected.</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded-md">
              Previous
            </button>
            <button className="px-3 py-1 border rounded-md">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyListings;
