import React, { useState, useEffect } from "react";

export function CarouselDefault() {
  const images = [
    "2024-06-05.jpg",
    "2021-06-15.jpg",
    "118268801_10218319216640776_6917048494106406267.jpg",
  "118268801_10218319216640776_6917048494106406267445.jpg",
    "hqdefault.jpg",
    "Fatherabakir.jpg",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [containerHeight, setContainerHeight] = useState("auto");

  // Function to calculate the aspect ratio of the active image
  useEffect(() => {
    const img = new Image();
    img.src = images[activeIndex];
    img.onload = () => {
      const aspectRatio = img.width / img.height;
      // Set the container height based on the aspect ratio
      setContainerHeight(`${100 / aspectRatio}%`);
    };
  }, [activeIndex, images]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden rounded-xl border-4 border-white shadow-2xl bg-gradient-to-r from-blue-50 to-purple-50">
      {/* Carousel Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0"
            style={{ aspectRatio: "16/9" }}
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-white" : "bg-white/50"
            } hover:bg-white transition-colors`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}