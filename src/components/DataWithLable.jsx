import { Input } from "@material-tailwind/react";

export default function DataLable({ lable, data }) {
  if (data == NaN) {
    data = "";
  }
  return (
    <div className="w-60 flex  m-2 items-center ">
      <Input
        type="text"
        placeholder={data ? data : "لا يوجد"}
        className="!border text-right    !border-gray-300 w-fit bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
        labelProps={{
          className: "hidden",
        }}
        containerProps={{ className: "" }}
        value={data}
        readOnly={true}
      />
      <p className="mx-1 font-bold ">:</p>
      <lable className=" text-lg font-semibold text-right  w-fit">
        {lable}
      </lable>
    </div>
  );
}
