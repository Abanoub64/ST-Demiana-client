import { Button } from "@material-tailwind/react";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { classHeaders } from "../components/headers";
import useClassContext from "../hooks/useClassContext";
import { ClassContext } from "../context/ClassContext";
import { MdOutlineAddBox } from "react-icons/md";

export default function ClassSelction() {
  const { user, dispatch: authDispatch } = useAuthContext();
  const { classdata, dispatch: classDispatch } = useClassContext();
  const navigate = useNavigate();
  const roles = user.userdata.role;
  const access = user.userdata.acsess;
  console.log(roles);
  console.log(access);
  console.log("classDispatch:", classDispatch);

  const handleClick = (name, numbers) => {
    console.log({ name }, { numbers });
    const classstate = { selectedClass: name, classNumbers: numbers };
    classDispatch({
      type: "SELECT_CLASS",
      payload: classstate,
    });
    console.log(classdata);
    navigate("/class");
  };

  return (
    <div>
      <div className="w-full flex h-auto justify-between px-4 mt-10 items-center ">
        <Button
          variant="text"
          onClick={() => {
            authDispatch({
              type: "LOGOUT",
            });
            localStorage.removeItem("user");
            navigate("/login");
          }}
        >
          تسجيل خروج
        </Button>
        {access == "superuser" || "admin" ? (
          <Link to="/database/add">
            <MdOutlineAddBox className="text-sky-800  hover:scale-110 transition-all active:scale-105 text-5xl" />
          </Link>
        ) : (
          ""
        )}
        <p>{user.userdata.name}</p>
      </div>

      <div className="w-full flex sm:grid-cols-3  h-auto  justify-between space-x-4 space-y-7 border-blue-gray-700 border-2 p-6 mt-14">
        {classHeaders.map((head, index) => (
          <>
            {roles.includes(head.class) && (
              <Button
                onClick={() => {
                  handleClick(head.class, head.classNumbers);
                }}
              >
                {head.class}
              </Button>
            )}
          </>
        ))}
        {access == "admin" ? (
          <Button
            className="bg-orange-500"
            onClick={() => {
              navigate("/database");
            }}
          >
            بيانات الكنيسة{" "}
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
