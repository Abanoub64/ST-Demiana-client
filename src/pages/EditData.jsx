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
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Addform() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [satate, setsatate] = useState("");
  const [father, setfather] = useState("");
  const [day, setday] = useState("");
  const [mon, setmon] = useState("");
  const [year, setyear] = useState("");
  const [phone, setphone] = useState("");
  const [adress, setadress] = useState("");
  const [phone2, setphone2] = useState("");
  const [name, setname] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/database/${id}`)
      .then((res) => {
        setsatate(res.data.satate);
        setfather(res.data.father);
        setday(res.data.day);
        setmon(res.data.mon);
        setyear(res.data.year);
        setphone(res.data.phone);
        setphone2(res.data.phone2);
        setadress(res.data.adress);
        setname(res.data.name);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  const handleSavebook = () => {
    const data = {
      satate: satate,
      father: father,
      day: day,
      mon: mon,
      year: year,
      phone: phone,
      phone2: phone2,
      name: name,
      adress: adress,
    };
    setLoading(true);
    axios
      .put(`database/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/database");
      })
      .catch((err) => {
        setLoading(false);
        alert(`An error happened please check the consle`);
        console.log(err);
      });
  };
  return (
    <>
      <Backbutton />
      <div
        className="w-full mx-auto flex content-center p-4 justify-center
      "
      >
        <Card color="transparent" shadow={false}>
          <Typography className=" text-center" variant="h4" color="blue-gray">
            تعديل البيانات
          </Typography>
          <Typography color="gray" className="mt-1 text-center  font-bold ">
            تأكد من البيانات اولا
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 grid  grid-cols-2 gap-6">
              <Input
                value={name}
                size="lg"
                onChange={(e) => {
                  setname(e.target.value);
                }}
                label="الاسم"
              />
              <Input
                value={adress}
                onChange={(e) => {
                  setadress(e.target.value);
                }}
                size="lg"
                label="العنوان"
              />
              <div className=" flex  flex-col  gap-4 w-fit scale-75">
                <label>تاريخ الميلاد</label>
                <Input
                  type="Number"
                  value={day}
                  onChange={(e) => {
                    setday(e.target.value);
                  }}
                  size="lg"
                  label="اليوم"
                />
                <Input
                  value={mon}
                  type="Number"
                  onChange={(e) => {
                    setmon(e.target.value);
                  }}
                  size="lg"
                  label="الشهر"
                />
                <Input
                  value={year}
                  type="Number"
                  onChange={(e) => {
                    setyear(e.target.value);
                  }}
                  size="lg"
                  label="السنة"
                />
              </div>
              <div className=" flex  flex-col  gap-4 w-fit scale-75">
                <label>الرقم</label>
                <Input
                  value={phone}
                  type="Number"
                  onChange={(e) => {
                    setphone(e.target.value);
                  }}
                  size="lg"
                  label="1"
                />
                <Input
                  value={phone2}
                  type="Number"
                  onChange={(e) => {
                    setphone2(e.target.value);
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
                      setsatate("عاجر");
                    }}
                  >
                    عاجر
                  </MenuItem>
                  <MenuItem
                    onClick={(e) => {
                      setData("اخوة رب");
                    }}
                  >
                    اخوة رب
                  </MenuItem>
                  <MenuItem
                    onClick={(e) => {
                      setData("متوفي");
                    }}
                  >
                    متوفي
                  </MenuItem>
                </MenuList>
              </Menu>
              <Input
                value={father}
                size="lg"
                onChange={(e) => {
                  setfather(e.target.value);
                }}
                label="اب الاعتراف"
              />
            </div>

            <Button onClick={handleSavebook} className="mt-6" fullWidth>
              تسجيل التعديل
            </Button>
          </form>
        </Card>
      </div>
    </>
  );
}

export default Addform;
