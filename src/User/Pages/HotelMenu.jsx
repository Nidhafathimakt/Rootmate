import React from 'react'
// import porotta from "../assets/porotta.jpg";
// import sand  from "../assets/sand.jpg";
const HotelMenu = () => {
  return (
    <div>
      <div className="bg-gray-50 min-h-screen">

      {/* HERO SECTION */}
      <div
        className="h-[380px] bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 text-white">
          <h1 className="text-4xl font-bold">The Global Spoon</h1>
          <p className="mt-2 text-sm">
            International Fusion · 123 Culinary Lane, Foodville
          </p>

          <div className="flex items-center gap-2 mt-2">
            ⭐⭐⭐⭐⭐ <span className="text-sm">(189 Reviews)</span>
          </div>

          <div className="mt-6 flex gap-4">
            <button className="bg-blue-600 px-5 py-2 rounded-md font-medium">
              Reserve Table
            </button>
            <button className="bg-white text-black px-5 py-2 rounded-md font-medium">
              Order Online
            </button>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-3">

          {/* FILTERS */}
          <div className="bg-white p-5 rounded-lg shadow mb-6">
            <h3 className="font-semibold mb-3">Filters</h3>

            <div className="mb-4">
              <p className="text-sm font-medium mb-2">Dietary</p>
              <div className="flex flex-wrap gap-2">
                {["All", "Vegetarian", "Vegan", "Gluten-Free"].map((item) => (
                  <button
                    key={item}
                    className="px-4 py-1 rounded-full border text-sm hover:bg-blue-100"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-medium mb-2">Price Range</p>
              <div className="flex flex-wrap gap-2">
                {["All", "Under $15", "$15 - $25", "Over $25"].map((item) => (
                  <button
                    key={item}
                    className="px-4 py-1 rounded-full border text-sm hover:bg-blue-100"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* MENU ITEMS */}
          <h2 className="text-xl font-semibold mb-4">Appetizers</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Truffle Arancini",
                price: "$12.00",
                img: "https://images.unsplash.com/photo-1604908554168-8f06b16f96f3",
              },
              {
                title: "Caprese Skewers",
                price: "$10.00",
                img: "https://images.unsplash.com/photo-1604908812507-7b9cce5c0a5b",
              },
              {
                title: "Spicy Edamame",
                price: "$8.00",
                img: "https://images.unsplash.com/photo-1598515214146-dab39da1243d",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow hover:shadow-lg transition"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-40 w-full object-cover rounded-t-xl"
                />
                <div className="p-4">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-blue-600 font-medium mt-1">
                    {item.price}
                  </p>
                  <button className="mt-3 w-full border rounded-md py-2 text-sm hover:bg-gray-100">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
            <div className="grid md:grid-cols-3 gap-6 py-5">
            {[
              {
                title: "Truffle Arancini",
                price: "$12.00",
                img: "https://images.unsplash.com/photo-1604908554168-8f06b16f96f3",
              },
              {
                title: "Caprese Skewers",
                price: "$10.00",
                img: "https://images.unsplash.com/photo-1604908812507-7b9cce5c0a5b",
              },
              {
                title: "Spicy Edamame",
                price: "$8.00",
                img: "https://images.unsplash.com/photo-1598515214146-dab39da1243d",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow hover:shadow-lg transition"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-40 w-full object-cover rounded-t-xl"
                />
                <div className="p-4">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-blue-600 font-medium mt-1">
                    {item.price}
                  </p>
                  <button className="mt-3 w-full border rounded-md py-2 text-sm hover:bg-gray-100">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">

          {/* REVIEWS */}
          <div className="bg-white p-5 rounded-lg shadow">
            <h3 className="font-semibold mb-4">Customer Reviews</h3>

            {[
              {
                name: "Alice Johnson",
                text: "Absolutely loved the Pan-Seared Salmon. Service was impeccable.",
              },
              {
                name: "David Lee",
                text: "The Truffle Mushroom Risotto was divine!",
              },
              {
                name: "Sophia Chen",
                text: "Great experience overall. Fresh and tasty.",
              },
            ].map((review, i) => (
              <div key={i} className="mb-4">
                <p className="font-medium">{review.name}</p>
                <p className="text-sm text-gray-600">{review.text}</p>
              </div>
            ))}

            <button className="text-blue-600 text-sm mt-2">
              Read All Reviews
            </button>
          </div>

          {/* CTA */}
          <div className="bg-white p-5 rounded-lg shadow text-center">
            <h3 className="font-semibold mb-2">Ready to Visit?</h3>
            <p className="text-sm text-gray-600 mb-4">
              Book a table or order your favorite dishes online.
            </p>
            <button className="bg-blue-600 text-white w-full py-2 rounded-md mb-2">
              Reserve Your Table
            </button>
            <button className="border w-full py-2 rounded-md">
              Order Online
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default HotelMenu
