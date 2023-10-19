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
import {
  educationlevelhead,
  sourceofmedication,
  illnesses,
  incomerange,
  work_typehead,
  marriagestatushead,
  disablity_type,
  reltivity,
  reson,
} from "./headers";

function Fatherform() {
  const [data, setdata] = useState({
    isdisable: false,
    anotherfather: {
      isit: false,
    },
  });
  return (
    <>
      <Card color="transparent" shadow={false}>
        <Typography className=" text-center" variant="h4" color="blue-gray">
          اضف رب الاسرة
        </Typography>
        <Typography color="gray" className="mt-1 text-center  font-bold ">
          تأكد من البيانات اولا
        </Typography>

        <form className="mt-8 mb-2 w-80 lg:w-full grid-rows-5 sm:w-96">
          <div className="mb-4  justify-center flex gap-6">
            <Input
              size="md"
              type="text"
              onChange={(e) => {
                setData({ ...data, forthname: e.target.value });
              }}
              label="الاسم الرابع"
            />
            <Input
              size="md"
              type="text"
              onChange={(e) => {
                setData({ ...data, thirdname: e.target.value });
              }}
              label="الاسم الثالث"
            />
            <Input
              size="md"
              type="text"
              onChange={(e) => {
                setData({ ...data, secondname: e.target.value });
              }}
              label="الاسم الثاني"
            />
            <Input
              size="md"
              type="text"
              onChange={(e) => {
                setData({ ...data, firstname: e.target.value });
              }}
              label="الاسم الاول"
            />
            <label>الاسم</label>
          </div>
          <div className="mb-4  justify-center flex gap-6">
            <Menu>
              <MenuHandler className=" px-8">
                <Button>
                  {data.educationlevel ? data.educationlevel : "المؤهل"}
                </Button>
              </MenuHandler>
              <MenuList className="max-h-72">
                {educationlevelhead.map((head) => (
                  <MenuItem
                    value={head}
                    onClick={(e) => {
                      setdata({ ...data, educationlevel: e.target.value });
                    }}
                  >
                    {head}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Input
              size="md"
              type="text"
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
              label="رقم محمول"
            />
            <Input
              size="lg"
              type="date"
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
              label="تاريخ الميلاد"
            />
            <Input
              size="md"
              type="text"
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
              label="الرقم القومي ( 14 رقم )"
            />
            <label>بيانات رب الاسرة</label>
          </div>
          <div className="mb-4  justify-center flex gap-6">
            <Input
              size="md"
              type="Number"
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
              label="متوسط الانفاق الشهري"
            />
            <Menu>
              <MenuHandler>
                <Button>{data.income ? data.income : "متوسط الدخل"}</Button>
              </MenuHandler>
              <MenuList className="max-h-72">
                {incomerange.map((head) => (
                  <MenuItem
                    value={head}
                    onClick={(e) => {
                      setdata({ ...data, income: e.target.value });
                    }}
                  >
                    {head}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Input
              size="md"
              type="text"
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
              label="اسم الوظيفة"
            />

            <Menu>
              <MenuHandler>
                <Button>
                  {data.work_type ? data.work_type : "نوع الوظيفة"}
                </Button>
              </MenuHandler>
              <MenuList className="max-h-72">
                {work_typehead.map((head) => (
                  <MenuItem
                    value={head}
                    onClick={(e) => {
                      setdata({ ...data, work_type: e.target.value });
                    }}
                  >
                    {head}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Menu>
              <MenuHandler>
                <Button>
                  {data.marriagestatus
                    ? data.marriagestatus
                    : "الحالة الاجتماعية"}
                </Button>
              </MenuHandler>
              <MenuList className="max-h-72">
                {marriagestatushead.map((head) => (
                  <MenuItem
                    value={head}
                    onClick={(e) => {
                      setdata({ ...data, marriagestatus: e.target.value });
                    }}
                  >
                    {head}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <label>بيانات اجتماعية</label>
          </div>
          <div className="mb-4  justify-center flex gap-6">
            <Input
              size="md"
              type="text"
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
              label="ملاحظات"
            />
            <Menu
              dismiss={{
                itemPress: false,
              }}
            >
              <MenuHandler>
                <Button>امراض</Button>
              </MenuHandler>
              <MenuList>
                {illnesses.map((head, index) => (
                  <MenuItem className="p-0">
                    <label
                      htmlFor="item-1"
                      className="flex cursor-pointer items-center gap-2 p-2"
                    >
                      <Checkbox
                        ripple={false}
                        containerProps={{ className: "p-0" }}
                        className="hover:before:content-none"
                      />
                      {head}
                    </label>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Menu disable={true}>
              <MenuHandler>
                <Button disabled={!data.isdisable}>نوع الاعاقة</Button>
              </MenuHandler>
              <MenuList className="max-h-72">
                {disablity_type.map((head) => (
                  <MenuItem>{head}</MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Checkbox
              onChange={(e) => {
                setdata({ ...data, isdisable: !data.isdisable });
                console.log(data.isdisable);
              }}
              label="اعاقة او مرض"
            />
            <label>الحالة الصحية</label>
          </div>
        </form>
      </Card>
      <span className=" w-full m-1 p-2 bg-black"></span>
      <Card color="transparent" shadow={false}>
        <Typography className=" text-center" variant="h4" color="blue-gray">
          في حالة اذا كان رب الاسرة غير الاب
        </Typography>
        <form className="mt-8 mb-2 w-80 lg:w-full grid-rows-5 sm:w-96">
          <div className="mb-4  justify-center flex gap-6">
            <Menu disable={true}>
              <MenuHandler>
                <Button disabled={!data.isit}>الحالة الاجتماعية</Button>
              </MenuHandler>
              <MenuList className="max-h-72">
                {marriagestatushead.map((head) => (
                  <MenuItem>{head}</MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Menu disable={true}>
              <MenuHandler>
                <Button disabled={!data.isit}>النوع</Button>
              </MenuHandler>
              <MenuList className="max-h-72">
                <MenuItem>ذكر</MenuItem>
                <MenuItem>انثي</MenuItem>
              </MenuList>
            </Menu>
            <Menu disable={true}>
              <MenuHandler>
                <Button disabled={!data.isit}>نوع القرابة</Button>
              </MenuHandler>
              <MenuList className="max-h-72">
                {reltivity.map((head) => (
                  <MenuItem>{head}</MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Menu disable={true}>
              <MenuHandler>
                <Button disabled={!data.isit}>السبب</Button>
              </MenuHandler>
              <MenuList className="max-h-72">
                {reson.map((head) => (
                  <MenuItem>{head}</MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Checkbox
              onChange={(e) => {
                setdata({
                  ...data,

                  isit: !data.isit,
                });
                console.log(data);
              }}
              label="نعم"
            />
          </div>
        </form>
      </Card>
      <span className=" w-full m-1 p-2 bg-black"></span>
      <Card color="transparent" shadow={false}>
        <Typography className=" text-center" variant="h4" color="blue-gray">
          الزوجة
        </Typography>

        <form className="mt-8 mb-2 w-80 lg:w-full grid-rows-5 sm:w-96">
          <div className="mb-4  justify-center flex gap-6">
            <Input
              size="md"
              type="text"
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
              label="الاسم الرابع"
            />
            <Input
              size="md"
              type="text"
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
              label="الاسم الثالث"
            />
            <Input
              size="md"
              type="text"
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
              label="الاسم الثاني"
            />
            <Input
              size="md"
              type="text"
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
              label="الاسم الاول"
            />
            <label>الاسم</label>
          </div>
          <div className="mb-4  justify-center flex gap-6">
            <Menu>
              <MenuHandler className=" ">
                <Button>المؤهل</Button>
              </MenuHandler>
              <MenuList className="max-h-72">
                {educationlevelhead.map((head) => (
                  <MenuItem>{head}</MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Input
              size="md"
              type="text"
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
              label="رقم محمول"
            />
            <Input
              size="lg"
              type="date"
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
              label="تاريخ الميلاد"
            />
            <Input
              size="md"
              type="text"
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
              label="الرقم القومي ( 14 رقم )"
            />
            <label>بيانات رب الاسرة</label>
          </div>
          <div className="mb-4  justify-center flex gap-6">
            <Input
              size="md"
              type="Number"
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
              label="متوسط الانفاق الشهري"
            />
            <Menu>
              <MenuHandler>
                <Button>متوسط الدخل الشهري</Button>
              </MenuHandler>
              <MenuList className="max-h-72">
                {incomerange.map((head) => (
                  <MenuItem>{head}</MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Input
              size="md"
              type="text"
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
              label="اسم الوظيفة"
            />

            <Menu>
              <MenuHandler>
                <Button>نوع الوظيفة</Button>
              </MenuHandler>
              <MenuList className="max-h-72">
                {work_typehead.map((head) => (
                  <MenuItem>{head}</MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Menu>
              <MenuHandler>
                <Button>الحالة الاجتماعية</Button>
              </MenuHandler>
              <MenuList className="max-h-72">
                {marriagestatushead.map((head) => (
                  <MenuItem>{head}</MenuItem>
                ))}
              </MenuList>
            </Menu>
            <label>بيانات اجتماعية</label>
          </div>
          <div className="mb-4  justify-center flex gap-6">
            <Input
              size="md"
              type="text"
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
              label="الاسم الرابع"
            />
            <Menu
              dismiss={{
                itemPress: false,
              }}
            >
              <MenuHandler>
                <Button>امراض</Button>
              </MenuHandler>
              <MenuList>
                {illnesses.map((head, index) => (
                  <MenuItem className="p-0">
                    <label
                      htmlFor="item-1"
                      className="flex cursor-pointer items-center gap-2 p-2"
                    >
                      <Checkbox
                        ripple={false}
                        containerProps={{ className: "p-0" }}
                        className="hover:before:content-none"
                      />
                      {head}
                    </label>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Menu>
              <MenuHandler>
                <Button>الحالة الاجتماعية</Button>
              </MenuHandler>
              <MenuList className="max-h-72">
                {marriagestatushead.map((head) => (
                  <MenuItem>{head}</MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Checkbox label="عجز او مرض" />
            <label>الحالة الصحية</label>
          </div>
        </form>
      </Card>
    </>
  );
}

export default Fatherform;
