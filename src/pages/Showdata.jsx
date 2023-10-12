import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Backbutton from "../components/Backbutton";
import { Spinnner } from "../components/Spinnner";

export default function Showdata() {
  const [data, setData] = useState({});
  const [loading, setloading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setloading(false);
    axios
      .get(`/database/${id}`)
      .then((res) => {
        setData(res.data);
        console.log(data);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="p-4">
      <Backbutton />
      <h1 className="text-3x my-4">Show datas</h1>
      {loading ? (
        <Spinnner />
      ) : (
        <div className=" rounded-xl w-[90%] p-4 flex flex-col border-2 border-sky-400">
          <div className="my-4">
            <span className=" text-xl mr-4 text-gray-500">Id</span>
            <span> {data._id} </span>
          </div>
          <div className="my-4">
            <span className=" text-xl mr-4 text-gray-500">الاسم </span>
            <span> {data.name} </span>
          </div>
          <div className="my-4">
            <span className=" text-xl mr-4 text-gray-500">العنوان</span>
            <span> {data.adress} </span>
          </div>
          <div className="my-4">
            <span className=" text-xl mr-4 text-gray-500"> الارقام</span>
            <span>
              {data.phone} / {data.phone2}
            </span>
          </div>
          <div className="my-4">
            <span className=" text-xl mr-4 text-gray-500"> تاريخ الميلاد</span>
            <span>
              {data.day} / {data.mon} / {data.year}
            </span>
          </div>
          <div className="my-4">
            <span className=" text-xl mr-4 text-gray-500"> اب الاعتراف</span>
            <span>{data.father}</span>
          </div>
          <div className="my-4">
            <span className=" text-xl mr-4 text-gray-500"> حالة رب الاسرة</span>
            <span>{data.satate}</span>
          </div>
        </div>
      )}
    </div>
  );
}
