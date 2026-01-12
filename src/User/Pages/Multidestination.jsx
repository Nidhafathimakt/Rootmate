import React from 'react'
// import NavBar from '../../Components/NavBar'

const Multidestination = () => {
  return (
    <div>
      {/* <NavBar/> */}
      <div>
         <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Multi-Destination Trip Planner
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Craft your perfect journey across multiple cities. Add stops, select
          dates, and choose your preferred transportation.
        </p>
      </div>

      {/* MAIN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-5">
          <h2 className="font-semibold text-gray-800">
            Your Route Details
          </h2>

          {/* CARD 1 */}
          
          <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col md:flex-row gap-4">
            <div className="flex-1 space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">
                  <span className="inline-flex w-6 h-6 mr-2 rounded-full bg-indigo-100 text-indigo-600 text-sm items-center justify-center">
                    1
                  </span>
                  Destination Stop
                </h3>
                <div className="flex gap-2">
                  <span>↑</span>
                  <span>↓</span>
                  <span className="bg-red-500 text-white px-2 rounded">✕</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input className="border rounded-lg px-3 py-2 text-sm" value="Paris, France" />
                <input className="border rounded-lg px-3 py-2 text-sm" value="Plane" />
                <input className="border rounded-lg px-3 py-2 text-sm" value="October 1st, 2024" />
                <input className="border rounded-lg px-3 py-2 text-sm" value="October 5th, 2024" />
              </div>
            </div>

            <div className="w-full md:w-32 h-32 rounded-lg bg-gray-200" />
            
          </div>

       
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-4">
          <div className="bg-white border-2 border-indigo-300 rounded-xl p-6 text-center">
            <h3 className="font-semibold text-gray-800">
              Estimated Trip Budget
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Based on selected destinations and transportation.
            </p>
            <div className="text-3xl font-bold text-indigo-600 mt-4">
              $2,200
            </div>
          </div>

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium">
            Generate Trip Plan
          </button>
        </div>

      </div>
    </div>
      </div>
    </div>
  )
}

export default Multidestination
