import React from 'react'

const Planresults = () => {
  return (
   <div className="min-h-screen bg-gray-50 flex flex-col">
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

      <main className="max-w-7xl mx-auto w-full px-6 py-10 flex-1">

        <h1 className="text-2xl font-semibold mb-1">
          Your Personalized Trip Plans
        </h1>

        <p className="text-gray-600 max-w-2xl mb-8">
          Explore a range of curated itineraries tailored to your preferences.
          Select the plan that best fits your travel style and budget.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
            <div className="h-44 w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1000&q=60"
                alt="Budget Explorer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-lg mb-1">Budget Explorer</h3>
              <p className="text-2xl font-bold mb-2">$1,200</p>
              <p className="text-sm text-gray-500 mb-1">7 Days / 6 Nights</p>
              <p className="text-sm text-gray-700 mb-4">
                Paris, Rome, Barcelona
              </p>

              <ul className="space-y-1 mb-6 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span className="h-1.5 w-1.5 mt-1 rounded-full bg-indigo-500" />
                  Economical accommodations
                </li>
                <li className="flex gap-2">
                  <span className="h-1.5 w-1.5 mt-1 rounded-full bg-indigo-500" />
                  Public transport focus
                </li>
                <li className="flex gap-2">
                  <span className="h-1.5 w-1.5 mt-1 rounded-full bg-indigo-500" />
                  Self-guided tours
                </li>
                <li className="flex gap-2">
                  <span className="h-1.5 w-1.5 mt-1 rounded-full bg-indigo-500" />
                  Local eateries
                </li>
              </ul>

              <button className="w-full rounded-md bg-indigo-600 text-white py-2.5 text-sm hover:bg-indigo-700">
                Select & View Itinerary →
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
            <div className="h-44 w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1000&q=60"
                alt="Standard Voyager"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-lg mb-1">Standard Voyager</h3>
              <p className="text-2xl font-bold mb-2">$2,800</p>
              <p className="text-sm text-gray-500 mb-1">10 Days / 9 Nights</p>
              <p className="text-sm text-gray-700 mb-4">
                London, Amsterdam, Berlin
              </p>

              <ul className="space-y-1 mb-6 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span className="h-1.5 w-1.5 mt-1 rounded-full bg-indigo-500" />
                  Mid-range hotels
                </li>
                <li className="flex gap-2">
                  <span className="h-1.5 w-1.5 mt-1 rounded-full bg-indigo-500" />
                  Mix of private & public transport
                </li>
                <li className="flex gap-2">
                  <span className="h-1.5 w-1.5 mt-1 rounded-full bg-indigo-500" />
                  Guided city tours
                </li>
                <li className="flex gap-2">
                  <span className="h-1.5 w-1.5 mt-1 rounded-full bg-indigo-500" />
                  Popular attractions
                </li>
              </ul>

              <button className="w-full rounded-md bg-indigo-600 text-white py-2.5 text-sm hover:bg-indigo-700">
                Select & View Itinerary →
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
            <div className="h-44 w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519821172141-b5d8fdb1eacf?auto=format&fit=crop&w=1000&q=60"
                alt="Luxury Dreamer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-lg mb-1">Luxury Dreamer</h3>
              <p className="text-2xl font-bold mb-2">$5,500</p>
              <p className="text-sm text-gray-500 mb-1">14 Days / 13 Nights</p>
              <p className="text-sm text-gray-700 mb-4">
                Kyoto, Santorini, Maldives
              </p>

              <ul className="space-y-1 mb-6 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span className="h-1.5 w-1.5 mt-1 rounded-full bg-indigo-500" />
                  Boutique resorts
                </li>
                <li className="flex gap-2">
                  <span className="h-1.5 w-1.5 mt-1 rounded-full bg-indigo-500" />
                  Private transfers & flights
                </li>
                <li className="flex gap-2">
                  <span className="h-1.5 w-1.5 mt-1 rounded-full bg-indigo-500" />
                  Exclusive experiences
                </li>
                <li className="flex gap-2">
                  <span className="h-1.5 w-1.5 mt-1 rounded-full bg-indigo-500" />
                  Gourmet dining
                </li>
              </ul>

              <button className="w-full rounded-md bg-indigo-600 text-white py-2.5 text-sm hover:bg-indigo-700">
                Select & View Itinerary →
              </button>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-10">
          <button className="border rounded-md px-3 py-2 text-sm hover:bg-gray-50">
            Save All Plans
          </button>

          <button className="border rounded-md px-3 py-2 text-sm hover:bg-gray-50">
            Share Options
          </button>
        </div>
      </main>

      <footer className="border-t bg-white mt-10">
        <div className="max-w-7xl mx-auto px-6 py-10 grid gap-10 md:grid-cols-4">
          <div>
            <span className="font-semibold text-lg">WanderPlan</span>
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
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
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

export default Planresults
