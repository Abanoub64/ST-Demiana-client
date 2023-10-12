import React, { useState } from "react";
import { toast } from "react-hot-toast";

import { useNavigate } from "react-router-dom";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import axios from "axios";
function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { name, password } = data;
    try {
      const { data } = await axios.post("/login", {
        name,
        password,
      });

      setData([]);
      toast.success("Login successfull");
      navigate("/database");
    } catch (error) {}
  };
  return (
    <>
      <div
        className="w-full mx-auto flex content-center p-4 justify-center
      "
      >
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            تسجيل الدخول
          </Typography>

          <form
            onSubmit={loginUser}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-4 flex flex-col gap-6">
              <Input
                onChange={(e) => {
                  setData({ ...data, name: e.target.value });
                }}
                size="lg"
                label="اسم الخادم"
              />
              <Input
                onChange={(e) => {
                  setData({ ...data, password: e.target.value });
                }}
                type="password"
                size="lg"
                label="كلمة المرور"
              />
            </div>

            <Button onClick={loginUser} className="mt-6 text-2xl" fullWidth>
              دخول
            </Button>
          </form>
        </Card>
      </div>
    </>
  );
}

export default Login;
