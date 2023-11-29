import React, { useState } from "react";
import { toast } from "react-hot-toast";

import { useNavigate } from "react-router-dom";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import useSignin from "../hooks/useSignin";
function Login() {
  const { singup, isloading, error } = useSignin();
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: " ",
    password: " ",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { name, password } = data;
    await singup(name, password);
    toast.success("Login successfull");
    navigate("/database");
  };
  return (
    <>
      <div
        className="w-full mx-auto flex content-center p-4 justify-center
      "
      >
        <Card color="transparent" shadow={false}>
          <Typography variant="h2" className=" text-center" color="blue-gray">
            تسجيل الدخول
          </Typography>

          <form
            onSubmit={loginUser}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-6">
              <Typography
                variant="h5"
                color="blue-gray"
                className="-mb-3 text-right "
              >
                اسم الخادم
              </Typography>
              <Input
                onChange={(e) => {
                  setData({ ...data, name: e.target.value });
                }}
                size="lg"
                placeholder="الاسم"
                className=" !border-t-blue-gray-200  placeholder:text-right focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />

              <Typography
                variant="h5"
                color="blue-gray"
                className="-mb-3 text-right"
              >
                كلمة المرور{" "}
              </Typography>
              <Input
                type="password"
                size="lg"
                onChange={(e) => {
                  setData({ ...data, password: e.target.value });
                }}
                placeholder="********"
                className=" !border-t-blue-gray-200 placeholder:text-right focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>

            <Button type="submit" className="mt-6" fullWidth>
              تسجيل الدخول
            </Button>
          </form>
        </Card>
      </div>
    </>
  );
}

export default Login;
