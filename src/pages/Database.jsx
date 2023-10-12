import React, { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Card, Typography } from "@material-tailwind/react";
import axios from "axios";
import { Chip } from "@material-tailwind/react";
import Backbutton from "../components/Backbutton";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Input } from "@material-tailwind/react";
import { Spinnner } from "../components/Spinnner";
import { MdOutlineAddBox } from "react-icons/md";

const TABLE_HEAD = [
  ,
  "",
  "حالة رب الاسرة",
  "اب الاعتراف",
  "تاريخ الميلاد",
  "الرقم",
  "العنوان",
  "الاسم",
];

function Database() {
  const [isloading, setIsloading] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const { id } = useParams;
  useEffect(() => {
    setIsloading(true);
    axios.get("/database").then((res) => {
      setData(res.data);
      setIsloading(false);
    });
  }, []);
  return (
    <div className=" p-4 mt-6">
      <div className="w-full p-5 flex flex-row-reverse justify-between">
        <Typography variant="h1" color="blue">
          خدمة اولي و تانية
        </Typography>
        <div className="w-72">
          <Input
            label="بحث بالاسم"
            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <Link to="/database/add">
            <MdOutlineAddBox className="text-sky-800 text-4xl" />
          </Link>
        </div>
      </div>
      {isloading ? (
        <Spinnner />
      ) : (
        <Card className="h-full w-full overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data
                .filter((boy) => {
                  return search == "" ? boy : boy.name.includes(search);
                })
                .map((boy, index) => (
                  <tr key={boy._id} className="even:bg-blue-gray-50/50">
                    <td className="p-4">
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        <div className="flex gap-x-4 justify-center">
                          <Link to={`./${boy._id}`}>
                            <BsInfoCircle className="text-2xl text-green-800" />
                          </Link>
                          <Link to={`./edit/${boy._id}`}>
                            <AiOutlineEdit className="text-2xl text-yellow-600" />
                          </Link>
                          <Link to={`./delete/${boy._id}`}>
                            <MdOutlineDelete className="text-2xl text-red-600" />
                          </Link>
                        </div>
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Chip
                        className=" text-center "
                        color={
                          boy.satate == "عاجز"
                            ? "green"
                            : boy.satate == "اخوه رب"
                            ? "amber"
                            : boy.satate == "متوفي"
                            ? "red"
                            : ""
                        }
                        value={boy.satate}
                      />
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {boy.father}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {boy.day}/{boy.mon}/{boy.year}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {boy.phone}
                        <br />
                        {boy.phone2}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {boy.adress}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className=" text-lg font-normal"
                      >
                        {boy.name}
                      </Typography>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </Card>
      )}
    </div>
  );
}

export default Database;
