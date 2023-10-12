import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Backbutton({ distination = "/database" }) {
  return (
    <div className="flex">
      <Link
        to={distination}
        className=" bg-light-blue-500 text-white px-4 py-1 rounded-lg"
      >
        <BsArrowLeft />
      </Link>
    </div>
  );
}
