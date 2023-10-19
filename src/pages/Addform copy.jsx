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
import axios from "axios";
import Backbutton from "../components/Backbutton";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Addform() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    satate: "",
    father: "",
    day: "",
    mon: "",
    year: "",
    phone: "",
    adress: "",
    phone2: "",
    name: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { satate, father, day, mon, year, phone, phone2, name, adress } =
      data;
    try {
      const { data } = await axios.post("/database", {
        satate,
        father,
        day,
        mon,
        year,
        phone,
        phone2,
        name,
        adress,
      });
      console.log({ data });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData([]), navigate("/database");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Backbutton />
      <div
        className="w-full mx-auto flex content-center p-4 justify-center
    "
      >
        <Card color="transparent" shadow={true}>
          <Typography className=" text-center" variant="h4" color="blue-gray">
            اضف مخدوم
          </Typography>
          <Typography color="gray" className="mt-1 text-center  font-bold ">
            تأكد من البيانات اولا
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 grid  grid-cols-2 gap-6">
              <Input
                size="lg"
                onChange={(e) => {
                  setData({ ...data, name: e.target.value });
                }}
                label="الاسم"
              />
              <Input
                onChange={(e) => {
                  setData({ ...data, adress: e.target.value });
                }}
                size="lg"
                label="العنوان"
              />
              <div className=" flex  flex-col  gap-4 w-fit scale-75">
                <label>تاريخ الميلاد</label>
                <Input
                  type="Number"
                  value={data.day}
                  onChange={(e) => {
                    setData({ ...data, day: e.target.value });
                  }}
                  size="lg"
                  label="اليوم"
                />
                <Input
                  value={data.mon}
                  type="Number"
                  onChange={(e) => {
                    setData({ ...data, mon: e.target.value });
                  }}
                  size="lg"
                  label="الشهر"
                />
                <Input
                  value={data.year}
                  type="Number"
                  onChange={(e) => {
                    setData({ ...data, year: e.target.value });
                  }}
                  size="lg"
                  label="السنة"
                />
              </div>
              <div className=" flex  flex-col  gap-4 w-fit scale-75">
                <label>الرقم</label>
                <Input
                  value={data.phone}
                  type="Number"
                  onChange={(e) => {
                    setData({ ...data, phone: e.target.value });
                  }}
                  size="lg"
                  label="1"
                />
                <Input
                  value={data.phone2}
                  type="Number"
                  onChange={(e) => {
                    setData({ ...data, phone2: e.target.value });
                  }}
                  size="lg"
                  label="2"
                />
              </div>
              <Menu>
                <MenuHandler>
                  <Button>حالة رب الاسرة</Button>
                </MenuHandler>
                <MenuList>
                  <MenuItem
                    onClick={(e) => {
                      setData({ ...data, satate: "عاجر" });
                    }}
                  >
                    عاجر
                  </MenuItem>
                  <MenuItem
                    onClick={(e) => {
                      setData({ ...data, satate: "اخوة رب" });
                    }}
                  >
                    اخوة رب
                  </MenuItem>
                  <MenuItem
                    onClick={(e) => {
                      setData({ ...data, satate: "متوفي" });
                    }}
                  >
                    متوفي
                  </MenuItem>
                </MenuList>
              </Menu>
              <Input
                value={data.father}
                size="lg"
                onChange={(e) => {
                  setData({ ...data, father: e.target.value });
                }}
                label="اب الاعتراف"
              />
            </div>

            <Button onClick={registerUser} className="mt-6" fullWidth>
              اضف
            </Button>
          </form>
        </Card>
      </div>
    </>
  );
}

export default Addform;
