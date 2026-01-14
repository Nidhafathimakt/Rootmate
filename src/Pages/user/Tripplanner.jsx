import React from "react";


const Tripplanner = () => {
  return (
    <div className="min-h-screen bg-gray-50">
     
    

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT FORM */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-1">Plan Your Dream Trip</h2>
          <p className="text-gray-500 mb-6">
            Tell us about your next adventure and we'll craft the perfect itinerary.
          </p>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">Destination</label>
              <input
                type="text"
                value="Paris"
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Travel Dates</label>
                <input
                  type="date"
                  value="2024-08-01"
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>

              <div className="pt-6">
                <input
                  type="date"
                  value="2024-08-07"
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Number of Travelers
              </label>
              <input
                type="number"
                value="2"
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Budget Range</label>
              <select className="w-full border rounded-lg px-3 py-2">
                <option>Mid-Range</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Preferred Activities
              </label>
              <div className="flex flex-wrap gap-2">
                {["Adventure", "Relaxation", "Culture", "Foodie", "History", "Nature", "Shopping"].map(
                  (item, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-sm ${
                        item === "Culture" || item === "Foodie"
                          ? "bg-indigo-600 text-white"
                          : "bg-gray-100"
                      }`}
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg mt-4">
              Generate My Plan
            </button>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-3">Your Trip Summary</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><b>Destination:</b> Paris</li>
              <li><b>Dates:</b> Aug 1 - Aug 7, 2024</li>
              <li><b>Duration:</b> 7 Days</li>
              <li><b>Travelers:</b> 2 Adults</li>
              <li><b>Budget:</b> Mid-Range</li>
              <li><b>Activities:</b> Culture, Foodie</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-3">Travel Tips</h3>
            <ul className="text-sm text-gray-600 space-y-2 list-disc ml-4">
              <li>Book flights and accommodations early.</li>
              <li>Purchase travel insurance.</li>
              <li>Pack light and efficiently.</li>
              <li>Research local customs.</li>
              <li>Keep copies of documents.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
 

export default Tripplanner;
