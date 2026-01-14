import React from "react";
import Sidebar from "../../components/admin/Sidebar";

const AddListing = () => {
  return (
  
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-semibold">Add New Listing</h1>
        <p className="text-gray-500 mb-6">
          Provide details for your hotel or restaurant property.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Form Section */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
            
            {/* Tabs */}
            <div className="flex gap-6 border-b pb-3 mb-6 text-sm font-medium">
              <span className="text-indigo-600 border-b-2 border-indigo-600 pb-2">
                Listing Details
              </span>
              <span className="text-gray-400">Photos & Media</span>
              <span className="text-gray-400">Amenities & Services</span>
              <span className="text-gray-400">Pricing & Availability</span>
            </div>

            <div className="space-y-5">
              <div>
                <label className="text-sm font-medium">Listing Name</label>
                <input
                  type="text"
                  className="w-full mt-1 border rounded-md px-3 py-2"
                  value="Serene Mountain Retreat"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Property Type</label>
                <select className="w-full mt-1 border rounded-md px-3 py-2">
                  <option>Hotel</option>
                  <option>Resort</option>
                  <option>Villa</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">Description</label>
                <textarea
                  rows="3"
                  className="w-full mt-1 border rounded-md px-3 py-2"
                  defaultValue="Nestled in the heart of the Rockies, our retreat offers unparalleled comfort and breathtaking views."
                />
              </div>

              <div>
                <label className="text-sm font-medium">Location</label>
                <input
                  type="text"
                  className="w-full mt-1 border rounded-md px-3 py-2"
                  value="Aspen, Colorado"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Number of Rooms</label>
                <input
                  type="number"
                  className="w-full mt-1 border rounded-md px-3 py-2"
                  value="100"
                />
              </div>

              <div className="flex justify-between mt-6">
                <button className="px-4 py-2 border rounded text-gray-500">
                  Previous
                </button>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded">
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* Preview Section */}
          <div className="bg-white p-4 rounded-lg shadow h-fit">
            <h3 className="font-semibold mb-3">Live Preview</h3>

            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
              className="rounded-md mb-3"
              alt="preview"
            />

            <h4 className="font-semibold">Serene Mountain Retreat</h4>
            <p className="text-sm text-gray-500">Aspen, Colorado</p>

            <div className="flex items-center gap-1 text-sm mt-1">
              4.8 <span className="text-gray-400">(120 reviews)</span>
            </div>

            <p className="mt-2 text-sm text-gray-600">
              Nestled in the heart of the Rockies, our retreat offers unparalleled comfort.
            </p>

            <p className="mt-2 font-semibold text-indigo-600">
              $225 <span className="text-gray-400 text-sm line-through">$250</span>
            </p>

            <button className="mt-4 w-full border rounded py-2 text-sm">
              View Full Preview
            </button>
          </div>
        </div>

        <div className="flex justify-end mt-6 gap-3">
          <button className="border px-4 py-2 rounded">Save as Draft</button>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded">
            Publish Listing
          </button>
        </div>
      </main>
   
  );
};

export default AddListing;
