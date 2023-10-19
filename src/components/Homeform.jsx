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
} from "@material-tailwind/react";

function Homeform() {
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
                setData({ ...data, name: e.target.value });
              }}
              label="رقم العمارة"
            />
            <Input
              size="md"
              type="text"
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
              label="الشارع"
            />
            <Input
              size="md"
              type="text"
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
              label="عزبة/قرية"
            />
            <Input
              size="md"
              type="text"
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
              label="محافظة"
            />
          </div>
          <div className="mb-4  justify-center flex gap-6">
            <Input
              size="md"
              type="number"
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
              label="تلفون المنزل"
            />
            <Input
              size="lg"
              type="number"
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
              label="رقم الشقة"
            />
            <Input
              size="md"
              type="text"
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
              label="الدور"
            />
          </div>
          <div className="mb-4  justify-center flex gap-6">
            <Input
              size="md"
              type="text"
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
              label="علامات مميزة"
            />
          </div>
        </form>
      </Card>
    </>
  );
}

export default Homeform;
