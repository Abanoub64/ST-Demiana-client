import React from "react";
import { CarouselDefault } from "../components/Carousel";

function Home() {
  return (
    <>
      <div className="w-full md:w-[80%] lg:w-[60%] mx-auto p-4">
        <CarouselDefault />
      </div>
    </>
  );
}

export default Home;