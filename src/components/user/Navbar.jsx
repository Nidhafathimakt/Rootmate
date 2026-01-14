import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm px-4 md:px-16 py-4">
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-bold text-indigo-600">
          ✈️ RootMate
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="text-indigo-600 cursor-pointer">Home</li>
          <li className="cursor-pointer hover:text-indigo-600">Plan a Trip</li>
          <li className="cursor-pointer hover:text-indigo-600">Destinations</li>
          <li className="cursor-pointer hover:text-indigo-600">Saved Trips</li>
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex gap-3">
          <button className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100">
            Login
          </button>
          <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">
            Signup
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 space-y-4 text-gray-700 font-medium">
          <ul className="space-y-3">
            <li className="text-indigo-600">Home</li>
            <li className="hover:text-indigo-600">Plan a Trip</li>
            <li className="hover:text-indigo-600">Destinations</li>
            <li className="hover:text-indigo-600">Saved Trips</li>
          </ul>

          <div className="flex gap-3 pt-3">
            <button className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-100">
              Login
            </button>
            <button className="flex-1 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">
              Signup
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
