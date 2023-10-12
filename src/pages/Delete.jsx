import React, { useState } from "react";
import { Spinnner } from "../components/Spinnner";
import axios from "axios";
import Backbutton from "../components/Backbutton";
import { useNavigate, useParams } from "react-router-dom";

function Delete() {
  const [loading, setloading] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = () => {
    setloading(true);
    axios
      .delete(`/database/${id} `)
      .then(() => {
        setloading(false);
        navigate("/database");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="p-4">
      <Backbutton />
      <h1 className="p-4  text-center text-3xl my-4">مسح البيانات</h1>
      {loading ? <Spinnner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 p-8 mx-auto rounded-xl w-[600]">
        <h3 className="text-2xl">هل انت تريد مسح البيانات ؟</h3>
      </div>
      <button
        className="p-4 bg-red-600 m-8 text-center mx-auto text-white w-full "
        onClick={handleDelete}
      >
        نعم امسحها
      </button>
    </div>
  );
}

export default Delete;
