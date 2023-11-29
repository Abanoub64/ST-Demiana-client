import React, { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
} from "@material-tailwind/react";
import { RiGpsLine } from "react-icons/ri";
import { FaCheckDouble } from "react-icons/fa6";

function Homeform({ updatelocation }) {
  const [location, setlocation] = useState({});

  const captureLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const capturedLatitude = position.coords.latitude;
          const capturedLongitude = position.coords.longitude;

          const link = `http://www.google.com/maps/place/${capturedLatitude},${capturedLongitude}`;
          setlocation({ ...location, gps: link });
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      toast.error("This device dosen't support GPS");
    }
  };

  updatelocation(location);

  return (
    <>
      <Card color="transparent" shadow={false}>
        <Typography className=" text-center" variant="h4" color="blue-gray">
          بيانات السكن{" "}
        </Typography>

        <form className="mt-8 mb-2 w-80 lg:w-full grid-rows-5 sm:w-96">
          <div className="mb-4  justify-center flex gap-6">
            <Input
              size="md"
              type="number"
              onChange={(e) => {
                setlocation({ ...location, buildingNo: e.target.value });
              }}
              label="رقم العمارة"
            />
            <Input
              size="md"
              type="text"
              onChange={(e) => {
                setlocation({ ...location, streetNo: e.target.value });
              }}
              label="الشارع"
            />
            <Input
              size="md"
              type="text"
              onChange={(e) => {
                setlocation({ ...location, area: e.target.value });
              }}
              label="عزبة/قرية"
            />
            <Input
              size="md"
              type="text"
              onChange={(e) => {
                setlocation({ ...location, distract: e.target.value });
              }}
              label="محافظة"
            />
          </div>
          <div className="mb-4 arrow justify-center flex gap-6">
            <Input
              size="md"
              type="number"
              onChange={(e) => {
                setlocation({ ...location, landline: e.target.value });
              }}
              label="تليفون المنزل"
            />
            <Input
              size="lg"
              type="number"
              onChange={(e) => {
                setlocation({ ...location, apartmentNo: e.target.value });
              }}
              label="رقم الشقة"
            />
            <Input
              size="md"
              type="text"
              onChange={(e) => {
                setlocation({ ...location, floorNo: e.target.value });
              }}
              label="الدور"
            />
          </div>
          <div className="mb-4  justify-center flex gap-6">
            <Input
              size="md"
              type="text"
              onChange={(e) => {
                setlocation({ ...location, priestoffamily: e.target.value });
              }}
              label="اب اعتراف الاسرة"
            />
            <Input
              size="md"
              type="text"
              onChange={(e) => {
                setlocation({ ...location, churchofmarriage: e.target.value });
              }}
              label="كنيسة الزواج"
            />
          </div>
          <div className="mb-4  justify-center flex gap-6">
            <Input
              size="md"
              type="text"
              onChange={(e) => {
                setlocation({ ...location, marks: e.target.value });
              }}
              label="علامات مميزة"
            />
            {location.gps ? (
              <IconButton size="sm" color="light-green">
                <FaCheckDouble className="text-2xl" />
              </IconButton>
            ) : (
              <IconButton
                size="sm"
                onClick={captureLocation}
                color="deep-orange"
              >
                <RiGpsLine className="text-2xl" />
              </IconButton>
            )}
          </div>
        </form>
      </Card>
    </>
  );
}

export default Homeform;
