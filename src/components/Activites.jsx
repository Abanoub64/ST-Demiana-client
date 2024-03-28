import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function EcommerceCard() {
  return (
    <div className="grid grid-cols-2 content-center">
      <div className=" grid-cols-2 h-[99x] content-center gap-[5px] grid ">
        <div className="w-[50%] m-auto border-primary border-[2px] h-[60%] rounded-md">
          <img
            src="heroimg.jpg"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div className="w-[50%] m-auto border-primary border-[2px] h-[60%] rounded-md">
          <img
            src="heroimg.jpg"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
