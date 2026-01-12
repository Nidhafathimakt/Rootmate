import React from "react";

const FiltersPanel = () => {
  return (
    <aside className="bg-white border border-gray-300 rounded-xl p-5 w-full md:w-72 text-sm text-gray-700">
      
      {/* Title */}
      <h3 className="font-semibold text-lg mb-4">Filters</h3>

      {/* Destination */}
      <div className="mb-5">
        <label className="block font-medium mb-1">Destination</label>
        <select className="w-full border rounded-lg px-3 py-2 outline-none">
          <option>Paris</option>
          <option>London</option>
          <option>Rome</option>
        </select>
      </div>

      {/* Dates */}
      <div className="mb-5">
        <label className="block font-medium mb-1">Dates</label>
        <input
          type="date"
          // value="May 15, 2025 - May 20, 2025"
          // readOnly
          className="w-full border rounded-lg px-3 py-2 bg-gray-50"
        />
      </div>

      {/* Guests */}
      <div className="mb-5">
        <label className="block font-medium mb-1">Guests</label>
        <select className="w-full border rounded-lg px-3 py-2 outline-none">
          <option>2 Travelers</option>
          <option>3 Travelers</option>
          <option>4 Travelers</option>
        </select>
      </div>

      {/* Budget */}
      <div className="mb-5">
        <label className="block font-medium mb-2">Budget</label>
        <input type="range" min="100" max="6500" className="w-full" />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>$100</span>
          <span>from $6,500</span>
        </div>
      </div>

      {/* Rating */}
      <div className="mb-5">
        <label className="block font-medium mb-2">Rating</label>
        <div className="space-y-1">
          <label className="flex items-center gap-2">
            <input type="checkbox" /> 1+ Stars
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" /> 3+ Stars
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" /> 4+ Stars
          </label> 
          <label className="flex items-center gap-2">
            <input type="checkbox" /> 5 Stars
          </label>
        </div>
      </div>

      {/* Amenities */}
      <div className="mb-6">
        <label className="block font-medium mb-2">Amenities</label>
        <div className="space-y-1">
          <label className="flex items-center gap-2">
            <input type="checkbox" /> Free WiFi
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" /> Breakfast
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" /> Pool
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" /> Family-Friendly
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" /> Parking
          </label>
        </div>
      </div>

      {/* Clear Filters */}
      <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
        Clear Filters
      </button>
    </aside>
  );
};

export default FiltersPanel;
