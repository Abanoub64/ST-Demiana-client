import React from "react";
import { CarouselDefault } from "../components/Carousel";

function Home() {
  return (
    <div className="w-full md:w-[90%] lg:w-[80%] mx-auto p-4">
      {/* Carousel Section */}
      <div className="w-full mb-8">
        <CarouselDefault />
      </div>

      {/* Information Section */}
      <div className="w-full bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">About the Church</h2>

        {/* Address */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700">Address</h3>
          <p className="text-gray-600">
            123 Church Street, City, State, ZIP Code
          </p>
        </div>

        {/* Activities */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700">Activities</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Sunday Service - 10:00 AM</li>
            <li>Bible Study - Wednesday 7:00 PM</li>
            <li>Youth Group - Friday 6:00 PM</li>
          </ul>
        </div>

        {/* Facebook Link */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700">Follow Us</h3>
          <a
            href="https://www.facebook.com/yourchurchpage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            Visit our Facebook Page
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;