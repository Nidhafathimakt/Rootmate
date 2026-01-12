import React from 'react'
import { MdDelete } from "react-icons/md";


const Savedtrip = () => {
  return  (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div className="flex items-center gap-2">
            <span className="font-bold text-indigo-600 text-lg">Rootmate</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-indigo-600" href="#">Home</a>
            <a className="hover:text-indigo-600" href="#">Plan a Trip</a>
            <a className="hover:text-indigo-600" href="#">Destinations</a>
            <a className="text-indigo-600 font-medium" href="#">Saved Trips</a>
            <a className="hover:text-indigo-600" href="#">Login</a>
          </nav>

        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto w-full px-6 py-10 flex-1">

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Your Saved Trips</h1>

          <button className="rounded-md bg-indigo-600 text-white px-4 py-2 text-sm hover:bg-indigo-700">
            Create New Trip
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-8">
          <button className="rounded-full bg-indigo-100 text-indigo-700 px-4 py-1 text-sm">
            All Trips
          </button>
          <button className="rounded-full border px-4 py-1 text-sm hover:bg-gray-50">
            Upcoming
          </button>
          <button className="rounded-full border px-4 py-1 text-sm hover:bg-gray-50">
            Past
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="bg-white border rounded-xl overflow-hidden">
            <img
              className="h-44 w-full object-cover"
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200"
              alt="Romantic Paris Escape"
            />

            <div className="p-5">
              <h3 className="font-semibold text-lg">Romantic Paris Escape</h3>
              <p className="text-sm text-gray-500 mt-1">
                October 15 - October 22, 2024
              </p>
              <p className="text-sm text-gray-500">
                1 Destinations • 7 Days
              </p>

              <button className="mt-5 text-indigo-600 text-sm">
                View Itinerary →
              </button>
              <button className='ml-20 text-red-500  text-xl'><MdDelete/></button>
              
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border rounded-xl overflow-hidden">
            <img
              className="h-44 w-full object-cover"
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=1200"
              alt="Cultural Japan Immersion"
            />

            <div className="p-5">
              <h3 className="font-semibold text-lg">Cultural Japan Immersion</h3>
              <p className="text-sm text-gray-500 mt-1">
                November 1 - November 14, 2023
              </p>
              <p className="text-sm text-gray-500">
                3 Destinations • 14 Days
              </p>

              <button className="mt-5 text-indigo-600 text-sm">
                View Itinerary →
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border rounded-xl overflow-hidden">
            <img
              className="h-44 w-full object-cover"
              src="https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200"
              alt="Andean Mountain Adventure"
            />

            <div className="p-5">
              <h3 className="font-semibold text-lg">Andean Mountain Adventure</h3>
              <p className="text-sm text-gray-500 mt-1">
                July 5 - July 18, 2025
              </p>
              <p className="text-sm text-gray-500">
                2 Destinations • 14 Days
              </p>

              <button className="mt-5 text-indigo-600 text-sm">
                View Itinerary →
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white border rounded-xl overflow-hidden">
            <img
              className="h-44 w-full object-cover"
              src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200"
              alt="Australian Coastal Journey"
            />

            <div className="p-5">
              <h3 className="font-semibold text-lg">Australian Coastal Journey</h3>
              <p className="text-sm text-gray-500 mt-1">
                December 1 - December 10, 2024
              </p>
              <p className="text-sm text-gray-500">
                4 Destinations • 10 Days
              </p>

              <button className="mt-5 text-indigo-600 text-sm">
                View Itinerary →
              </button>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white border rounded-xl overflow-hidden">
            <img
              className="h-44 w-full object-cover"
              src="https://images.unsplash.com/photo-1505731132164-cca1ee05d9d4?auto=format&fit=crop&w=1200"
              alt="Ancient Rome Exploration"
            />

            <div className="p-5">
              <h3 className="font-semibold text-lg">Ancient Rome Exploration</h3>
              <p className="text-sm text-gray-500 mt-1">
                September 1 - September 7, 2023
              </p>
              <p className="text-sm text-gray-500">
                1 Destination • 7 Days
              </p>

              <button className="mt-5 text-indigo-600 text-sm">
                View Itinerary →
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white mt-10">
        <div className="max-w-7xl mx-auto px-6 py-10 grid gap-10 md:grid-cols-4">

          <div>
            <span className="font-semibold text-lg">Rootmate</span>
            <p className="text-sm text-gray-600 mt-2">
              Your seamless travel planning and booking partner.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>

        </div>

        <div className="text-center text-xs text-gray-500 pb-8">
          © 2025 WanderPlan. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Savedtrip
