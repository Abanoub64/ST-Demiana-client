import {
  Button,
  Popover,
  PopoverContent,
  PopoverHandler,
  Typography,
  Card,
} from "@material-tailwind/react";
import { MdOutlineGpsFixed } from "react-icons/md";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";

import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { classDataHeaders } from "../components/headers";
import { Spinnner } from "../components/Spinnner";
import { Link } from "react-router-dom";
import downloadExcel from "../components/ExcelDownload";
import useClassContext from "../hooks/useClassContext";

export default function Class() {
  const { classdata, dispatch: classDispatch } = useClassContext();

  const ageStage = classdata.classNumbers;

  async function getClassData() {
    try {
      const response = await axios.get(`class/${ageStage}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch class data");
    }
  }
  let { data, isLoading, isError } = useQuery({
    queryKey: ["Class"],
    queryFn: getClassData,
  });
  if (!isLoading) {
    console.log(data);
    console.log(classdata.selectedClass);
    console.log(classDataHeaders);
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    <div className="m-auto">
      {isLoading ? (
        <Spinnner />
      ) : (
        <Card className="h-full w-full ">
          <div className="flex justify-between mx-5 ">
            <Button
              className="bg-green-500 text-gray-300 w-auto h-auto"
              onClick={() => {
                downloadExcel(data);
              }}
            >
              <PiMicrosoftExcelLogoFill />
            </Button>
            <span className="text-center  ">{classdata.selectedClass}</span>
          </div>
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {classDataHeaders.map((head) => (
                  <th
                    key={head}
                    className="border-b  border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-center leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map(
                (
                  {
                    childName,
                    address,
                    phone1,
                    phone2,
                    phone3,
                    gps,
                    marks,
                    birthdate,
                  },
                  index
                ) => (
                  <tr key={index} className="even:bg-blue-gray-50/50">
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-center"
                      >
                        {
                          (gps = "undefined" ? (
                            ""
                          ) : (
                            <Link to={gps}>
                              <MdOutlineGpsFixed />
                            </Link>
                          ))
                        }
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-center"
                      >
                        {marks}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-center"
                      >
                        {formatDate(birthdate)}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-center"
                      >
                        <div>
                          المخدوم: {(phone1 = "undefined" ? "" : phone1)}
                        </div>
                        <div>الاب: {(phone2 = "undefined" ? "" : phone2)}</div>
                        <div>
                          الام: {(phone3 = "undefined" ? "" : phone3)}
                        </div>{" "}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-center"
                      >
                        {address}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-center"
                      >
                        {phone1}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-center"
                      >
                        {childName}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-center"
                      >
                        {index + 1}
                      </Typography>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </Card>
      )}
    </div>
  );
}
