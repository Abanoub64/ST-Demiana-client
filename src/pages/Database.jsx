import React, { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { FaBriefcaseMedical } from "react-icons/fa";
import { FaChildren } from "react-icons/fa6";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Card,
  Popover,
  PopoverContent,
  PopoverHandler,
  Typography,
} from "@material-tailwind/react";
import { FaLocationDot } from "react-icons/fa6";
import axios from "axios";
import { Chip } from "@material-tailwind/react";
import Backbutton from "../components/Backbutton";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Input } from "@material-tailwind/react";
import { Spinnner } from "../components/Spinnner";
import { MdOutlineAddBox } from "react-icons/md";
import { PopoverDefault } from "../components/PopoverDefault";
import { MedTables } from "../components/MedTables";
import { ChildrenshowingTable } from "../components/ChildrenshowingTable";
import ParentComponent from "../components/DetailsForm";
import DataLable from "../components/DataWithLable";
import LocationData from "../components/LocationData";
import { authReducer } from "../context/AuthContext";

const TABLE_HEAD = ["", "العلاج", "الابناء", "السكن", "تفاصيل", "الاسم", "رقم"];

function Database() {
  const [isloading, setIsloading] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const { id } = useParams;
  useEffect(() => {
    setIsloading(true);
    axios.get("/database").then((res) => {
      setData(res.data);
      console.log(res.data);

      setIsloading(false);
    });
  }, []);
  return (
    <div className=" p-4 mt-6">
      <div className="w-full p-5 flex flex-row-reverse justify-between">
        <Typography variant="h1" color="blue">
          بيانات الكنيسة
        </Typography>
        <div className="w-72    items-center flex">
          <Input
            label="بحث بالاسم"
            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <Link to="/database/add">
            <MdOutlineAddBox className="text-sky-800  hover:scale-110 transition-all active:scale-105 text-5xl" />
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
                    className="border-b border-blue-gray-100 text-center bg-blue-gray-50 p-4"
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
                // .filter((family) => {
                //   return search == ""
                //     ? family
                //     : family.father.firstname.includes(search);
                // })
                .map((family, index) => (
                  <tr
                    key={family._id}
                    className="even:bg-blue-gray-50/50  text-center justify-center"
                  >
                    <td className=" items-center justify-center w-fit">
                      <PopoverDefault
                        content={
                          <Typography
                            as="a"
                            href="#"
                            variant="small"
                            color="blue-gray"
                            className="font-medium"
                          >
                            <div className="flex gap-x-4 justify-center">
                              <Link to={`./${family._id}`}>
                                <BsInfoCircle className="text-2xl text-green-800" />
                              </Link>
                              <Link to={`./edit/${family._id}`}>
                                <AiOutlineEdit className="text-2xl text-yellow-600" />
                              </Link>
                              <Link to={`./delete/${family._id}`}>
                                <MdOutlineDelete className="text-2xl text-red-600" />
                              </Link>
                            </div>
                          </Typography>
                        }
                      />
                    </td>

                    <td className="p-2">
                      <Popover>
                        <PopoverHandler>
                          <Button color="green">
                            <FaBriefcaseMedical className="text-xl" />
                          </Button>
                        </PopoverHandler>
                        <PopoverContent>
                          <MedTables data={family} />
                        </PopoverContent>
                      </Popover>
                    </td>
                    <td className="p-2">
                      <Popover>
                        <PopoverHandler>
                          <Button color="indigo">
                            <FaChildren className="text-xl" />
                          </Button>
                        </PopoverHandler>
                        <PopoverContent>
                          <ChildrenshowingTable data={family} />
                        </PopoverContent>
                      </Popover>
                    </td>
                    <td className="p-2">
                      <Popover>
                        <PopoverHandler>
                          <Button color="pink">
                            <FaLocationDot
                              className="text-xl"
                              color="light-blue"
                            />
                          </Button>
                        </PopoverHandler>
                        <PopoverContent>
                          <LocationData data={family.location} />
                        </PopoverContent>
                      </Popover>
                    </td>
                    <td className="p-2">
                      <Popover>
                        <PopoverHandler>
                          <Button color="teal">
                            <IoPeopleSharp className="text-xl" />
                          </Button>
                        </PopoverHandler>
                        <PopoverContent>
                          <ParentComponent info={family} />
                        </PopoverContent>
                      </Popover>
                    </td>

                    <td className="p-0">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className=" text-base  font-normal"
                      >
                        {family.father.firstname} {family.father.secondname}{" "}
                        {family.father.thirdname}
                      </Typography>
                    </td>
                    <td className="p-0">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className=" text-sm p-0 font-normal"
                      >
                        {index + 1}
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
