import React, { useState } from "react";
import { LuHotel } from "react-icons/lu";
import { FiClock } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { CiForkAndKnife } from "react-icons/ci";
import { IoMapOutline } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { PiNotePencilBold } from "react-icons/pi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { SlCalender } from "react-icons/sl";


function Itinerary() {
    const [showFull, SetShowFull] = useState(null)
  return (
    <>
      
      <div className="container mx-auto px-4 py-4">
        <div className="border border-gray-100 shadow rounded px-4 py-4">
          <h1 className="font-bold text-2xl"> 
            Mediterranean Coastal Adventure
          </h1>
          <p className="text-sm flex gap-1 items-center"><SlCalender size={13} /><span className="text-gray-500 ">October 15, 2024 - October 22, 2024</span></p>
          
            <div className="flex items-center justify-between mt-5">
    <h1 className="font-bold text-[#636AE8FF] text-lg">
      Budget:
    </h1>

    <button className="border border-gray-200 rounded-lg px-4 py-2 flex gap-2 items-center">
      <IoMdCheckmarkCircleOutline size={20} />
      <span className="font-semibold">
        Booked: 60%
      </span>
    </button>
  </div>
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 space-x-5 mt-5">
          <div className="space-y-10 max-h-[80vh] overflow-y-auto ">
            <h1 className="font-semibold text-2xl">Daily Itinerary</h1>
            <div className="space-y-4">
                <div className="border border-gray-100 shadow rounded-lg px-4 py-4">
                    <h3 className="font-semibold">Day 1: October 15, 2024</h3>
                    <p className="text-gray-500 flex justify-between mt-1">4 activites <span onClick={() => SetShowFull(showFull === 1 ? null : 1)} className="cursor-pointer"> {showFull === 1 ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}</span></p>
                    {showFull  === 1 && ( <div className="border-t border-gray-200 mt-4">
                    <div className="border border-gray-100 rounded-lg shadow px-4 py-4 mt-4 space-y-3">
                        <h4 className="flex justify-between font-semibold">Check into Grand Hotel <span><LuHotel size={24} /></span></h4>
                        <div className="flex gap-3">
                            <p className="flex gap-2"><FiClock className="mt-1" /> <span>10:00 AM</span></p>
                            <p className="flex gap-1"><IoLocationOutline className="mt-1" /> 123 Ocean View Dr<span></span></p>
                        </div>
                        <div className="flex gap-8">
                            <button className="bg-[#636AE8FF] px-4 py-2 rounded text-white font-semibold">Book Hotel</button>
                            <h2 className="text-[#636AE8FF] font-semibold mt-2">View Details</h2>
                        </div>
                    </div>

                    <div className="border border-gray-100 rounded-lg shadow px-4 py-4 mt-4 space-y-3">
                        <h4 className="flex justify-between font-semibold">Breakfast at The Morning Glory <span><CiForkAndKnife  size={24}/></span></h4>
                        <div className="flex gap-3">
                            <p className="flex gap-2"><FiClock className="mt-1" /> <span>11:00 AM</span></p>
                            <p className="flex gap-1"><IoLocationOutline className="mt-1" /> 456 Sunny St<span></span></p>
                        </div>
                        <div className="flex gap-8">
                            <button className="bg-[#636AE8FF] px-4 py-2 rounded text-white font-semibold">Reserve Table</button>
                            <h2 className="text-[#636AE8FF] font-semibold mt-2">View Details</h2>
                        </div>
                    </div>

                    <div className="border border-gray-100 rounded-lg shadow px-4 py-4 mt-4 space-y-3">
                        <h4 className="flex justify-between font-semibold">Visit National Museum <span><IoMapOutline size={20} /></span></h4>
                        <div className="flex gap-3">
                            <p className="flex gap-2"><FiClock className="mt-1" /> <span>01:00 PM</span></p>
                            <p className="flex gap-1"><IoLocationOutline className="mt-1" /> 789 Culture Ave<span></span></p>
                        </div>
                            <h2 className="text-[#636AE8FF] font-semibold mt-2">View Details</h2>
                       
                    </div>

                    <div className="border border-gray-100 rounded-lg shadow px-4 py-4 mt-4 space-y-3">
                        <h4 className="flex justify-between font-semibold">Dinner at Italian Bistro <span><CiForkAndKnife size={24} /></span></h4>
                        <div className="flex gap-3">
                            <p className="flex gap-2"><FiClock className="mt-1" /> <span>07:00 PM</span></p>
                            <p className="flex gap-1"><IoLocationOutline className="mt-1" /> 101 Pasta Ln <span></span></p>
                        </div>
                        <div className="flex gap-8">
                            <button className="bg-[#636AE8FF] px-4 py-2 rounded text-white font-semibold">Reserve Table</button>
                            <h2 className="text-[#636AE8FF] font-semibold mt-2">View Details</h2>
                        </div>
                    </div>
                    
                    </div>)}
                   
                </div>

                <div className="border border-gray-100 shadow rounded-lg px-4 py-4">
                    <h3 className="font-semibold">Day 2: October 16, 2024</h3>
                    <p className="text-gray-500 flex justify-between mt-1">4 activites <span onClick={() => SetShowFull(showFull === 2 ? null : 2)} className="cursor-pointer"> {showFull === 2 ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}</span></p>
                    {showFull === 2 && ( <div className="border-t border-gray-200 mt-4">
                    
                    <div className="border border-gray-100 rounded-lg shadow px-4 py-4 mt-4 space-y-3">
                        <h4 className="flex justify-between font-semibold">Breakfast at The Morning Glory <span><CiForkAndKnife  size={24}/></span></h4>
                        <div className="flex gap-3">
                            <p className="flex gap-2"><FiClock className="mt-1" /> <span>11:00 AM</span></p>
                            <p className="flex gap-1"><IoLocationOutline className="mt-1" /> 456 Sunny St<span></span></p>
                        </div>
                        <div className="flex gap-8">
                            <button className="bg-[#636AE8FF] px-4 py-2 rounded text-white font-semibold">Reserve Table</button>
                            <h2 className="text-[#636AE8FF] font-semibold mt-2">View Details</h2>
                        </div>
                    </div>
                    
                    </div>)}
                </div>

                <div className="border border-gray-100 shadow rounded-lg px-4 py-4">
                    <h3 className="font-semibold">Day 3: October 17, 2024</h3>
                    <p className="text-gray-500 flex justify-between mt-1">4 activites <span onClick={() => SetShowFull(showFull === 3 ? null : 3)} className="cursor-pointer"> {showFull === 3 ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}</span></p>
                    {showFull  === 3 && ( <div className="border-t border-gray-200 mt-4">
                    <div className="border border-gray-100 rounded-lg shadow px-4 py-4 mt-4 space-y-3">
                        <h4 className="flex justify-between font-semibold">Dinner at Italian Bistro <span><CiForkAndKnife size={24} /></span></h4>
                        <div className="flex gap-3">
                            <p className="flex gap-2"><FiClock className="mt-1" /> <span>07:00 PM</span></p>
                            <p className="flex gap-1"><IoLocationOutline className="mt-1" /> 101 Pasta Ln <span></span></p>
                        </div>
                        <div className="flex gap-8">
                            <button className="bg-[#636AE8FF] px-4 py-2 rounded text-white font-semibold">Reserve Table</button>
                            <h2 className="text-[#636AE8FF] font-semibold mt-2">View Details</h2>
                        </div>
                    </div>
                    
                    </div>)}
                </div>
            </div>
          </div>

          <div className="space-y-10">
            <h1 className="font-semibold text-2xl">Trip Visualisation</h1>
            <div className="border border-gray-200 px-4 py-4 rounded-lg shadow-lg space-y-3">
              <h2 className="font-semibold text-xl">Trip Map Overview</h2>
              <img src="/staticmap.webp" className="max-h-[50vh] w-full" alt="" />
            </div>
          </div>
          <div className="space-y-10 max-h-[80vh] overflow-y-auto">
            <h1 className="font-semibold text-2xl">Trip Summary</h1>
            <div className="px-6 py-4 space-y-4 border border-gray-100 shadow rounded-lg">
              <h2 className="font-semibold text-xl">Chronological Timeline</h2>
              <ul className="space-y-4 list-disc px-8">
                <div>
                  <li className="text-lg">Check into Grand Hotel</li>
                  <span className="text-gray-500">10:00 AM</span>
                </div>
                <div>
                  <li className="text-lg">Breakfast at The Morning Glory </li>
                  <span className="text-gray-500">11:00 AM</span>
                </div>
                <div>
                  <li className="text-lg">visit National Museum</li>
                  <span className="text-gray-500">01:00 PM</span>
                </div>
                <div>
                  <li className="text-lg">Dinner at Italian Bistro</li>
                  <span className="text-gray-500">07:00 PM</span>
                </div>
                <div>
                  <li className="text-lg">Cable Car Ride </li>
                  <span className="text-gray-500">09:00 AM</span>
                </div>
                <div>
                  <li className="text-lg">Lunch at Panorama Cafe</li>
                  <span className="text-gray-500">12:30 PM</span>
                </div>
                <div>
                  <li className="text-lg">Expolre Old Town Market</li>
                  <span className="text-gray-500">03:00 PM</span>
                </div>
                <div>
                  <li className="text-lg">Evening Cruise</li>
                  <span className="text-gray-500">06:00 PM</span>
                </div>
                <div>
                  <li className="text-lg">Morning Flight</li>
                  <span className="text-gray-500">08:00 AM</span>
                </div>
                <div>
                  <li className="text-lg">Check into Boutique Stay </li>
                  <span className="text-gray-500">12:00 PM</span>
                </div>
                <div>
                  <li className="text-lg">Art Gallery Tour</li>
                  <span className="text-gray-500">02:00 PM</span>
                </div>
              </ul>
            </div>
            <div className="border border-gray-100 rounded-lg shadow px-4 py-4 mt-5">
                <h2 className="font-semibold text-xl flex gap-2"> <PiNotePencilBold className="mt-1" size={24} /> <span> Travel Notes</span></h2>
                <div className="border border-gray-100 rounded-lg shadow-lg px-4 py-2 mt-5">
                    <textarea
      rows="3"
      className="w-full text-lg outline-none"
      defaultValue="Remember to pack sunscreen and a universal adapter! Look into local bus passes for cheaper travel."
    />
                </div>
                <button className="bg-[#636AE8FF] px-4 py-2 rounded w-full text-white font-semibold mt-5">Save Notes</button>

            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Itinerary;
