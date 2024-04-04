import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Backbutton({ distination }) {
  return (
    <div className="flex text-center">
      <Link
        to={distination}
        className=" bg-light-blue-500 text-center justify-center align-middle text-white px-4 py-1 rounded-lg"
      >
        <BsArrowLeft />
      </Link>
    </div>
  );
}
