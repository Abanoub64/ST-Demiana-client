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
  illnessesHeads,
  incomerange,
  work_typehead,
  marriagestatushead,
  disablity_type,
  reltivity,
  reson,
} from "./headers";
import MedicineForm from "../components/MedicineForm";

function Fatherform({ updateinfo }) {
  const [fdata, setfdata] = useState({
    illnesses: [],
    anotherfather: { isit: false },
  });
  const [mdata, setmdata] = useState({ illnesses: [] });
  updateinfo(fdata, mdata);

  const updateFatherMED = (fMed) => {
    setfdata({ ...fdata, medication: fMed });
  };
  const updateMotherMED = (mMed) => {
    setmdata({ ...mdata, medication: mMed });
  };

  const handleCheckboxChangef = (event, value) => {
    const isChecked = event.target.checked;

    let updatedDisability = Array.isArray(fdata.illnesses)
      ? [...fdata.illnesses]
      : [];

    if (isChecked) {
      // Add selected checkbox to the disability array
      updatedDisability.push(value);
    } else {
      // Remove unchecked checkbox from the disability array
      const index = updatedDisability.indexOf(value);
      if (index !== -1) {
        updatedDisability.splice(index, 1);
      }
    }
    setfdata((prevState) => ({
      ...prevState,
      illnesses: updatedDisability,
    }));
  };
  const handleCheckboxChangem = (event, value) => {
    const isChecked = event.target.checked;

    let updatedDisability = Array.isArray(mdata.illnesses)
      ? [...mdata.illnesses]
      : [];

    if (isChecked) {
      // Add selected checkbox to the disability array
      updatedDisability.push(value);
    } else {
      // Remove unchecked checkbox from the disability array
      const index = updatedDisability.indexOf(value);
      if (index !== -1) {
        updatedDisability.splice(index, 1);
      }
    }
    setmdata((prevState) => ({
      ...prevState,
      illnesses: updatedDisability,
    }));
  };

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
                setfdata({ ...fdata, forthname: e.target.value });
              }}
              label="الاسم الرابع"
            />
            <Input
              size="md"
              type="text"
              onChange={(e) => {
                setfdata({ ...fdata, thirdname: e.target.value });
              }}
              label="الاسم الثالث"
            />
            <Input
              size="md"
              type="text"
              onChange={(e) => {
                setfdata({ ...fdata, secondname: e.target.value });
              }}
              label="الاسم الثاني"
            />
            <Input
              size="md"
              type="text"
              onChange={(e) => {
                setfdata({ ...fdata, firstname: e.target.value });
              }}
              label="الاسم الاول"
            />
            <label>الاسم</label>
          </div>
          <div className="mb-4  justify-center flex gap-6">
            <Menu>
              <MenuHandler
                className="  px-8
"
              >
                <Button className="text-center">
                  {fdata.educationlevel ? fdata.educationlevel : "المؤهل"}
                </Button>
              </MenuHandler>
              <MenuList className="  max-h-72">
                {educationlevelhead.map((head, index) => (
                  <MenuItem
                    className="text-bold  text-2xl"
                    key={index}
                    value={head}
                    onClick={(e) => {
                      setfdata({ ...fdata, educationlevel: e.target.value });
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
                setfdata({ ...fdata, phone: e.target.value });
              }}
              label="رقم محمول"
            />
            <Input
              size="lg"
              type="date"
              onChange={(e) => {
                setfdata({ ...fdata, birthdate: e.target.value });
              }}
              label="تاريخ الميلاد"
            />
            <Input
              size="md"
              type="number"
              onChange={(e) => {
                setfdata({ ...fdata, idnumber: e.target.value });
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
                setfdata({ ...fdata, spending: e.target.value });
              }}
              label="متوسط الانفاق الشهري"
            />
            <Menu>
              <MenuHandler>
                <Button>{fdata.income ? fdata.income : "متوسط الدخل"}</Button>
              </MenuHandler>
              <MenuList className="max-h-72">
                {incomerange.map((head, index) => (
                  <MenuItem
                    key={index}
                    value={head}
                    onClick={(e) => {
                      setfdata({ ...fdata, income: e.target.value });
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
                setfdata({ ...fdata, jobname: e.target.value });
              }}
              label="اسم الوظيفة"
            />

            <Menu>
              <MenuHandler>
                <Button>
                  {fdata.work_type ? fdata.work_type : "نوع الوظيفة"}
                </Button>
              </MenuHandler>
              <MenuList className="max-h-72">
                {work_typehead.map((head, index) => (
                  <MenuItem
                    key={index}
                    value={head}
                    onClick={(e) => {
                      setfdata({ ...fdata, work_type: e.target.value });
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
                  {fdata.marriagestatus
                    ? fdata.marriagestatus
                    : "الحالة الاجتماعية"}
                </Button>
              </MenuHandler>
              <MenuList className="max-h-72">
                {marriagestatushead.map((head, index) => (
                  <MenuItem
                    key={index}
                    value={head}
                    onClick={(e) => {
                      setfdata({ ...fdata, marriagestatus: e.target.value });
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
                setfdata({ ...fdata, Comment: e.target.value });
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
              <MenuList className="max-h-72">
                {illnessesHeads.map((head, index) => (
                  <MenuItem key={index} className="p-0 text-black text-xl">
                    <label
                      htmlFor="item-1"
                      className="flex cursor-pointer items-center gap-2 p-2"
                    >
                      <Checkbox
                        onChange={(event) => handleCheckboxChangef(event, head)}
                        ripple={false}
                        checked={fdata.illnesses.includes(head)}
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
                <Button disabled={!fdata.isdisable}>
                  {fdata.disability ? fdata.disability : "نوع الاعاقة"}
                </Button>
              </MenuHandler>
              <MenuList className="max-h-72">
                {disablity_type.map((head, index) => (
                  <MenuItem
                    onClick={(e) => {
                      setfdata({ ...fdata, disability: head });
                    }}
                    key={index}
                  >
                    {head}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Checkbox
              ripple={false}
              onChange={(e) => {
                setfdata({ ...fdata, isdisable: !fdata.isdisable });
              }}
              label="اعاقة او مرض"
            />
            <label>الحالة الصحية</label>
          </div>
        </form>
        <div className="mb-4 border-black rounded-2xl justify-center flex gap-6">
          <MedicineForm saveFucntion={updateFatherMED} />
        </div>
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
                <Button disabled={!fdata.anotherfather.isit}>
                  {fdata.anotherfather.marriagestatus
                    ? fdata.anotherfather.marriagestatus
                    : "الحالة الاجتماعية"}
                </Button>
              </MenuHandler>
              <MenuList className="max-h-72">
                {marriagestatushead.map((head, index) => (
                  <MenuItem
                    onClick={() =>
                      setfdata((prevstate) => ({
                        ...prevstate,
                        anotherfather: {
                          ...prevstate.anotherfather,
                          marriagestatus: head,
                        },
                      }))
                    }
                    key={index}
                  >
                    {head}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Menu disable={true}>
              <MenuHandler>
                <Button disabled={!fdata.anotherfather.isit}>
                  {fdata.anotherfather.sex ? fdata.anotherfather.sex : "النوع"}
                </Button>
              </MenuHandler>
              <MenuList className="max-h-72">
                <MenuItem
                  onClick={() =>
                    setfdata((prevstate) => ({
                      ...prevstate,
                      anotherfather: { ...prevstate.anotherfather, sex: "ذكر" },
                    }))
                  }
                >
                  ذكر
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    setfdata((prevstate) => ({
                      ...prevstate,
                      anotherfather: {
                        ...prevstate.anotherfather,
                        sex: "انثي",
                      },
                    }))
                  }
                >
                  انثي
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu disable={true}>
              <MenuHandler>
                <Button disabled={!fdata.anotherfather.isit}>
                  {fdata.anotherfather.connection
                    ? fdata.anotherfather.connection
                    : "نوع القرابة"}
                </Button>
              </MenuHandler>
              <MenuList className="max-h-72">
                {reltivity.map((head, index) => (
                  <MenuItem
                    onClick={() =>
                      setfdata((prevstate) => ({
                        ...prevstate,
                        anotherfather: {
                          ...prevstate.anotherfather,
                          connection: head,
                        },
                      }))
                    }
                    key={index}
                  >
                    {head}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Menu disable={true}>
              <MenuHandler>
                <Button disabled={!fdata.anotherfather.isit}>
                  {" "}
                  {fdata.anotherfather.reson
                    ? fdata.anotherfather.reson
                    : "السبب"}
                </Button>
              </MenuHandler>
              <MenuList className="max-h-72">
                {reson.map((head, index) => (
                  <MenuItem
                    onClick={() =>
                      setfdata((prevstate) => ({
                        ...prevstate,
                        anotherfather: {
                          ...prevstate.anotherfather,
                          reson: head,
                        },
                      }))
                    }
                    key={index}
                  >
                    {head}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Checkbox
              onChange={(e) => {
                setfdata((prevstate) => ({
                  ...prevstate,
                  anotherfather: {
                    ...prevstate.anotherfather,
                    isit: !fdata.anotherfather.isit,
                  },
                }));
                // setfdata({
                //   ...fdata.anotherfather.isit,

                //   isit: !fdata.anotherfather.isit,
                // });
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
                setmdata({ ...mdata, forthnamename: e.target.value });
              }}
              label="الاسم الرابع"
            />
            <Input
              size="md"
              type="text"
              onChange={(e) => {
                setmdata({ ...mdata, thirdname: e.target.value });
              }}
              label="الاسم الثالث"
            />
            <Input
              size="md"
              type="text"
              onChange={(e) => {
                setmdata({ ...mdata, secondname: e.target.value });
              }}
              label="الاسم الثاني"
            />
            <Input
              size="md"
              type="text"
              onChange={(e) => {
                setmdata({ ...mdata, firstname: e.target.value });
              }}
              label="الاسم الاول"
            />
            <label>الاسم</label>
          </div>
          <div className="mb-4  justify-center flex gap-6">
            <Menu>
              <MenuHandler
                className="  px-8
"
              >
                <Button className="text-center">
                  {mdata.educationlevel ? mdata.educationlevel : "المؤهل"}
                </Button>
              </MenuHandler>
              <MenuList className="  max-h-72">
                {educationlevelhead.map((head, index) => (
                  <MenuItem
                    className="text-bold  text-2xl"
                    key={index}
                    value={head}
                    onClick={(e) => {
                      setmdata({ ...mdata, educationlevel: e.target.value });
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
                setmdata({ ...mdata, phone: e.target.value });
              }}
              label="رقم محمول"
            />
            <Input
              size="lg"
              type="date"
              onChange={(e) => {
                setmdata({ ...mdata, birthdate: e.target.value });
              }}
              label="تاريخ الميلاد"
            />
            <Input
              size="md"
              type="text"
              onChange={(e) => {
                setmdata({ ...mdata, idnumber: e.target.value });
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
                setmdata({ ...mdata, spending: e.target.value });
              }}
              label="متوسط الانفاق الشهري"
            />
            <Menu>
              <MenuHandler>
                <Button>{mdata.income ? mdata.income : "متوسط الدخل"}</Button>
              </MenuHandler>
              <MenuList className="max-h-72">
                {incomerange.map((head, index) => (
                  <MenuItem
                    key={index}
                    value={head}
                    onClick={(e) => {
                      setmdata({ ...mdata, income: e.target.value });
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
                setmdata({ ...mdata, jobname: e.target.value });
              }}
              label="اسم الوظيفة"
            />

            <Menu>
              <MenuHandler>
                <Button>
                  {mdata.work_type ? mdata.work_type : "نوع الوظيفة"}
                </Button>
              </MenuHandler>
              <MenuList className="max-h-72">
                {work_typehead.map((head, index) => (
                  <MenuItem
                    key={index}
                    value={head}
                    onClick={(e) => {
                      setmdata({ ...mdata, work_type: e.target.value });
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
                  {mdata.marriagestatus
                    ? mdata.marriagestatus
                    : "الحالة الاجتماعية"}
                </Button>
              </MenuHandler>
              <MenuList className="max-h-72">
                {marriagestatushead.map((head, index) => (
                  <MenuItem
                    key={index}
                    value={head}
                    onClick={(e) => {
                      setmdata({ ...mdata, marriagestatus: e.target.value });
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
              type="Date"
              onChange={(e) => {
                setmdata({ ...mdata, dateofmarriage: e.target.value });
              }}
              label="تاريخ الزواج"
            />
            <Input
              size="md"
              type="text"
              onChange={(e) => {
                setmdata({ ...mdata, comment: e.target.value });
              }}
              label="ملاحظات"
            />
            <Menu
              dismiss={{
                itemPress: false,
              }}
            >
              <MenuHandler>
                <Button className="text-center">امراض</Button>
              </MenuHandler>
              <MenuList className="max-h-72">
                {illnessesHeads.map((head, index) => (
                  <MenuItem key={index} className="p-0  ">
                    <label
                      htmlFor="item-1"
                      className="flex cursor-pointer items-center gap-2 p-2"
                    >
                      <Checkbox
                        onChange={(event) => handleCheckboxChangem(event, head)}
                        ripple={false}
                        checked={mdata.illnesses.includes(head)}
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
                <Button disabled={!mdata.isdisable}>
                  {mdata.disability ? mdata.disability : "نوع الاعاقة"}
                </Button>
              </MenuHandler>
              <MenuList className="max-h-72">
                {disablity_type.map((head, index) => (
                  <MenuItem
                    onClick={(e) => {
                      setmdata({ ...mdata, disability: head });
                    }}
                    key={index}
                  >
                    {head}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Checkbox
              onChange={(e) => {
                setmdata({ ...mdata, isdisable: !mdata.isdisable });
              }}
              label="عاقة او مرض"
            />
            <label>الحالة الصحية</label>
          </div>
          <div className="mb-4 border-black rounded-2xl justify-center flex gap-6">
            <MedicineForm saveFucntion={updateMotherMED} />
          </div>
        </form>
      </Card>
    </>
  );
}

export default Fatherform;
