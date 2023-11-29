import React from "react";
import DataLable from "./DataWithLable";
import { TbGps } from "react-icons/tb";

export default function LocationData({ data }) {
  return (
    <div>
      <ul className="grid gap-x-3 gap-y-4 text-right grid-cols-3 justify-start">
        <DataLable lable={"تليفون المنزل"} data={data?.landline} />
        <DataLable lable={"عزبة/قرية"} data={data?.area} />
        <DataLable lable={"محافظة"} data={data?.distract} />
        <DataLable lable={"الدور"} data={data?.floorNo} />
        <DataLable lable={"رقم العمارة"} data={data?.buildingNo} />
        <DataLable lable={"شارع"} data={data?.streetNo} />
        <DataLable lable={"رقم الشقة"} data={data?.apartmentNo} />
        <DataLable lable={"علامات مميزة"} data={data?.marks} />
        <DataLable lable={"اب اعترف الاسرة"} data={data?.priestoffamily} />
      </ul>
      <div className="w-full flex justify-between m-2 items-center ">
        <div className="flex items-center ">
          <label className=" text-lg font-semibold items-center flex  text-blue-700 w-fit">
            GPS
            <TbGps />
          </label>
          <p className="mx-1 font-bold ">{" :  "}</p>
          <a
            className="no-underline hover:underline text-cyan-600 dark:text-cyan-400"
            href={data?.gps}
          >
            {data?.gps}
          </a>
        </div>
        <DataLable lable={"كنيسة الزواج"} data={data?.churchofmarriage} />
      </div>
    </div>
  );
}
