import React from "react";
import Navbarr from "../components/Navbarr";
import { CarouselDefault } from "../components/Carousel";
import { EcommerceCard } from "../components/Activites";

function Home() {
  return (
    <>
      <div className=" w-[50%]   mx-auto p-4 items-center ">
        <CarouselDefault />
      </div>
    </>
  );
}

export default Home;
