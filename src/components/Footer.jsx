import React from "react";
const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 mt-16">
      <div className="grid grid-cols-4 gap-8 px-16 text-sm text-gray-600">
        <div>
          <h3 className="font-semibold text-indigo-600 mb-2">
            Rootmate
          </h3>
          <p>Your seamless travel planning partner.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <p>About Us</p>
          <p>Careers</p>
          <p>Blog</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Support</h4>
          <p>Help Center</p>
          <p>Contact Us</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>

      <p className="text-center text-xs text-gray-400 mt-10">
        © 2025 WanderPlan. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
