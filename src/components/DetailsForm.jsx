import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Input,
} from "@material-tailwind/react";

import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import DataLable from "./DataWithLable";

export default function ParentComponent({ info }) {
  const { father, mother } = info;

  const calculateAge = (Input) => {
    if (!Input.birthdate) {
      return;
    }
    const birthDate = new Date(Input.birthdate);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    // Check if the birthday has already occurred this year
    const hasBirthdayOccurred =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() >= birthDate.getDate());

    // Subtract 1 from the age if the birthday has not occurred yet this year
    if (!hasBirthdayOccurred) {
      age--;
    }

    return age;
  };
  const data = [
    {
      label: "الام",
      value: "profile",
      icon: FaFemale,
      desc: (
        <div>
          <ul className="grid gap-x-10 gap-y-4 mr-4 text-right grid-cols-3 justify-start">
            <DataLable lable={"الرقم القومي"} data={mother.idnumber} />
            <DataLable lable={"الموبايل"} data={mother.phone} />
            <DataLable
              lable={"الاسم"}
              data={`${mother?.firstname} ${mother?.secondname} ${mother?.thirdname} ${mother?.forthname}`}
            />
            <DataLable
              lable={"الحالة الاجتماعية"}
              data={mother.marriagestatus}
            />
            <DataLable lable={"المؤهل"} data={mother.educationlevel} />
            <DataLable lable={"السن"} data={calculateAge(mother)} />
            <DataLable lable={"متوسط الدخل"} data={mother.income} />
            <DataLable lable={"نوع الوظيفة"} data={mother.work_type} />
            <DataLable lable={"اسم الوظيفة"} data={mother.jobname} />
            <div className="w-60 flex  m-2 items-center ">
              <Input
                type="text"
                placeholder={"لا يوجد"}
                className="!border text-right    !border-gray-300 w-fit bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{ className: "" }}
                value={mother.illnesses.map((illm, index) => illm)}
              />
              <p className="mx-1 font-bold ">:</p>
              <lable className=" text-lg font-semibold text-right  w-fit">
                امراض
              </lable>
            </div>
            <DataLable lable={"يوجد اعاقة"} data={mother.disability} />
            <DataLable lable={"متوسط الانفاق"} data={mother.spending} />
          </ul>
          <div className="flex justify-between gap-x-4  items-center">
            <DataLable lable={"تاريخ الزواج"} data={mother.dateofmarriage} />

            <Input
              type="text"
              placeholder={mother.comment ? mother.comment : "لا يوجد"}
              className="!border text-right    !border-gray-300  bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "" }}
              value={mother.Comment}
              readOnly={true}
            />
            <p className="mx-1 font-bold ">:</p>
            <lable className=" text-lg font-semibold text-right  w-fit">
              ملاحظات
            </lable>
          </div>
        </div>
      ),
    },
    {
      label: "الاب",
      value: "dashboard",
      icon: FaMale,
      desc: (
        <div>
          <ul className="grid gap-x-10 gap-y-4  mr-4  text-right grid-cols-3 justify-starts">
            <DataLable lable={"الرقم القومي"} data={father.idnumber} />
            <DataLable lable={"الموبايل"} data={father.phone} />
            <DataLable
              lable={"الاسم"}
              data={`${father.firstname} ${father.secondname} ${father.thirdname} ${father.forthname}`}
            />
            <DataLable
              lable={"الحالة الاجتماعية"}
              data={father.marriagestatus}
            />
            <DataLable lable={"المؤهل"} data={father.educationlevel} />
            <DataLable lable={"السن"} data={calculateAge(father)} />
            <DataLable lable={"متوسط الدخل"} data={father.income} />
            <DataLable lable={"نوع الوظيفة"} data={father.work_type} />
            <DataLable lable={"اسم الوظيفة"} data={father.jobname} />
            <div className="w-60 flex  m-2 items-center ">
              <Input
                type="text"
                placeholder={"لا يوجد"}
                className="!border text-right    !border-gray-300 w-fit bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{ className: "" }}
                value={father.illnesses.map((ill, index) => ill)}
              />
              <p className="mx-1 font-bold ">:</p>
              <lable className=" text-lg font-semibold text-right  w-fit">
                امراض
              </lable>
            </div>
            <DataLable lable={"يوجد اعاقة"} data={father.disability} />
            <DataLable lable={"متوسط الانفاق"} data={father.firstname} />
          </ul>
          <div className="flex justify-between mt-[16px]  items-center">
            <Input
              type="text"
              placeholder={father.comment ? father.comment : "لا يوجد"}
              className="!border text-right    !border-gray-300  bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "" }}
              value={father.Comment}
              readOnly={true}
            />
            <p className="mx-1 font-bold ">:</p>
            <lable className=" text-lg font-semibold text-right  w-fit">
              ملاحظات
            </lable>
          </div>
          {father.anotherfather.isit && (
            <div className=" flex flex-col justify-center items-center">
              <div className="bg-black/50 shadow-md mt-2 w-full rounded-md  h-1"></div>
              <h2 className="text-xl font-serif font-semibold m-2">
                رب الاسرة ليس الاب
              </h2>
              <ul className="grid gap-x-3 gap-y-4 text-right grid-cols-3 justify-start">
                <DataLable lable={"النوع"} data={father.anotherfather.sex} />
                <DataLable
                  lable={"صلة القرابة"}
                  data={father.anotherfather.connection}
                />
                <DataLable lable={"السبب"} data={father.anotherfather.reson} />
                <DataLable
                  lable={"الحالة الاجتماعية"}
                  data={father.anotherfather.marriagestatus}
                />
              </ul>
            </div>
          )}
        </div>
      ),
    },
  ];
  return (
    <Tabs className=" max-w-[52rem]" value="dashboard">
      <TabsHeader>
        {data.map(({ label, value, icon }) => (
          <Tab key={value} value={value}>
            <div className="flex items-center gap-2">
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
