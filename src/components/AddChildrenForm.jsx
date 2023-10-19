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
  Stepper,
  Step,
} from "@material-tailwind/react";

function AddChildrenForm(props) {
  const [newchildrens, setnewchildrens] = useState([
    {
      name: "",
      sex: "",
      birthdate: Date,
      age_stage: Number,
      educationlevel: "",
      phone: [],
      disability: false,
      nameofdisability: "",
      confession: "",
    },
  ]);

  return (
    <>
      <Card color="transparent" shadow={false}>
        <Typography className=" text-center" variant="h4" color="blue-gray">
          اضف الابناء
        </Typography>

        <form className="mt-8 mb-2 w-80 lg:w-full grid-rows-5 sm:w-96">
          <div className="mb-4  justify-center flex gap-6">
            <Input
              className="   arrow "
              size="md"
              type="number"
              onChange={(e) => {
                setnewchildrens({ ...newchildrens, phone: e.target.value });
                console.log(newchildrens.phone);
              }}
              label="رقم الموبايل"
            />
            <Input
              size="md"
              type="date"
              onChange={(e) => {
                setnewchildrens({ ...newchildrens, birthdate: e.target.value });
                console.log(newchildrens.birthdate);
              }}
              label="تاريخ الميلاد"
            />
            <Menu>
              <MenuHandler>
                <Button>نوع</Button>
              </MenuHandler>
              <MenuList className="max-h-72">
                <MenuItem
                  onClick={(e) => {
                    setnewchildrens({ ...newchildrens, sex: "ذكر" });
                  }}
                >
                  ذكر
                </MenuItem>
                <MenuItem
                  onClick={(e) => {
                    setnewchildrens({ ...newchildrens, sex: "انثي" });
                  }}
                >
                  انثي
                </MenuItem>
              </MenuList>
            </Menu>
            <Input
              size="md"
              type="text"
              onChange={(e) => {
                setnewchildrens({ ...newchildrens, name: e.target.value });
              }}
              label="الاسم"
            />
            <label>الاسم</label>
          </div>
          <div className="mb-4  justify-center flex gap-6">
            <Menu>
              <MenuHandler>
                <Button>المرحلة التعليمة</Button>
              </MenuHandler>
              <MenuList className="max-h-72">
                <MenuItem
                  onClick={(e) => {
                    setnewchildrens({ ...newchildrens, age_stage: 0 });
                  }}
                >
                  حضانة
                </MenuItem>
                <MenuItem
                  onClick={(e) => {
                    setnewchildrens({ ...newchildrens, age_stage: 1 });
                  }}
                >
                  Kg1
                </MenuItem>
                <MenuItem
                  onClick={(e) => {
                    setnewchildrens({ ...newchildrens, age_stage: 2 });
                  }}
                >
                  Kg2
                </MenuItem>
                <MenuItem
                  onClick={(e) => {
                    setnewchildrens({ ...newchildrens, age_stage: 3 });
                  }}
                >
                  اولي ابتدائي
                </MenuItem>
                <MenuItem
                  onClick={(e) => {
                    setnewchildrens({ ...newchildrens, age_stage: 4 });
                  }}
                >
                  تانية ابتدائي
                </MenuItem>
                <MenuItem
                  onClick={(e) => {
                    setnewchildrens({ ...newchildrens, age_stage: 5 });
                  }}
                >
                  تالتة ابتدائي
                </MenuItem>
                <MenuItem
                  onClick={(e) => {
                    setnewchildrens({ ...newchildrens, age_stage: 6 });
                  }}
                >
                  رابعة ابتدائي
                </MenuItem>
                <MenuItem
                  onClick={(e) => {
                    setnewchildrens({ ...newchildrens, age_stage: 7 });
                  }}
                >
                  خامسة ابتدائي
                </MenuItem>
                <MenuItem
                  onClick={(e) => {
                    setnewchildrens({ ...newchildrens, age_stage: 8 });
                  }}
                >
                  سادسة ابتدائي
                </MenuItem>
                <MenuItem
                  onClick={(e) => {
                    setnewchildrens({ ...newchildrens, age_stage: 9 });
                  }}
                >
                  اولي اعدادي
                </MenuItem>
                <MenuItem
                  onClick={(e) => {
                    setnewchildrens({ ...newchildrens, age_stage: 10 });
                  }}
                >
                  تانية اعدادي
                </MenuItem>
                <MenuItem
                  onClick={(e) => {
                    setnewchildrens({ ...newchildrens, age_stage: 11 });
                  }}
                >
                  تالتة اعدادي
                </MenuItem>
                <MenuItem
                  onClick={(e) => {
                    setnewchildrens({ ...newchildrens, age_stage: 12 });
                  }}
                >
                  اولي ثانوي
                </MenuItem>
                <MenuItem
                  onClick={(e) => {
                    setnewchildrens({ ...newchildrens, age_stage: 13 });
                  }}
                >
                  تانية ثانوي
                </MenuItem>
                <MenuItem
                  onClick={(e) => {
                    setnewchildrens({ ...newchildrens, age_stage: 14 });
                  }}
                >
                  تالتة ثانوي
                </MenuItem>
                <MenuItem
                  onClick={(e) => {
                    setnewchildrens({ ...newchildrens, age_stage: 15 });
                  }}
                >
                  جامعة
                </MenuItem>
                <MenuItem
                  onClick={(e) => {
                    setnewchildrens({ ...newchildrens, age_stage: 16 });
                  }}
                >
                  خريج
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuHandler>
                <Button>مستوي التعليم</Button>
              </MenuHandler>
              <MenuList className="max-h-72">
                <MenuItem
                  onClick={(e) => [
                    setnewchildrens({
                      ...newchildrens,
                      educationlevel: "طالب",
                    }),
                  ]}
                >
                  طالب
                </MenuItem>
                <MenuItem
                  onClick={(e) => [
                    setnewchildrens({
                      ...newchildrens,
                      educationlevel: "بدون",
                    }),
                  ]}
                >
                  بدون
                </MenuItem>
                <MenuItem
                  onClick={(e) => [
                    setnewchildrens({
                      ...newchildrens,
                      educationlevel: "خريج",
                    }),
                  ]}
                >
                  خريج
                </MenuItem>
              </MenuList>
            </Menu>
            <Input
              size="md"
              type="text"
              onChange={(e) => {
                setnewchildrens({
                  ...newchildrens,
                  confession: e.target.value,
                });
              }}
              label="اب الاعتراف"
            />
          </div>
          <div className="mb-4  justify-center flex gap-6">
            <Input
              disabled={!newchildrens.disability}
              size="md"
              type="text"
              onChange={(e) => {
                setnewchildrens({
                  ...newchildrens,
                  nameofdisability: e.target.value,
                });
              }}
              label="اسم المرض او الاعاقة ان وجد"
            />
            <Checkbox
              onClick={(e) => {
                setnewchildrens({
                  ...newchildrens,
                  disability: !newchildrens.disability,
                });
              }}
              label="اعاقة او مرض"
            />
          </div>
          <Button
            onClick={() => {
              props.addChildren(newchildrens);
              setnewchildrens({
                name: "",
                sex: "",
                birthdate: Date,
                age_stage: Number,
                educationlevel: "",
                phone: [],
                disability: false,
                nameofdisability: "",
                confession: "",
              });
            }}
            className="mt-6"
            fullWidth
          >
            اضف
          </Button>
        </form>
      </Card>
    </>
  );
}

export default AddChildrenForm;
