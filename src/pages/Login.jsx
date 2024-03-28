import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import { rolesHeaders } from "../components/headers";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Input,
  Button,
  Typography,
  MenuItem,
  label,
  MenuHandler,
  MenuList,
  Checkbox,
  Spinner,
  Alert,
  Menu,
} from "@material-tailwind/react";
import axios from "axios";
import useSignin from "../hooks/useSignin";
function Login() {
  const { user } = React.useContext(AuthContext);
  useEffect(() => {
    if (user) {
      console.log(user);
      navigate("/select");
    }
  }, []);

  const { signup, isloading, error } = useSignin();
  const navigate = useNavigate();
  const [newacc, setNewacc] = useState(false);
  const [data, setData] = useState({
    phone_number: " ",
    password: " ",
  });
  const [roles, setRoles] = useState([]);

  const formik = useFormik({
    initialValues: {
      name: "",
      father_name: "",
      phone_number: "",
      password: "",
      repassword: "",
      role: [],
      acsess: "user",
    },
    onSubmit: async (values) => {
      axios.post("/signup", values).then((res) => {
        console.log(res);
      });
    },

    validationSchema: Yup.object(
      {
        repassword: Yup.string()
          .required("مطلوب")
          .oneOf([Yup.ref("password"), null], "Passwords must match"),
        role: Yup.array().min(1, "اختار خدمة واحدة علي الاقل"),
      },
      {
        phone_number: Yup.string()
          .matches(/^(01)[0-9]{9}$/, "تاكد من الرقم")
          .required("مطلوب رقم الموبايل"),
      }
    ),
  });
  const handlerole = (event, value) => {
    const isChecked = event.target.checked;
    let updatedRoles = isChecked
      ? [...formik.values.role, value]
      : formik.values.role.filter((role) => role !== value);
    console.log(updatedRoles);
    formik.setFieldValue("role", updatedRoles);
    console.log(formik.values.role);
  };

  const loginUser = async (e) => {
    const { phone_number, password } = data;
    await signup(phone_number, password);
  };
  return (
    <>
      <div
        className="w-full mx-auto flex content-center p-4 justify-center
      "
      >
        <Card color="transparent" shadow={false}>
          <Typography variant="h2" className=" text-center" color="blue-gray">
            تسجيل الدخول{" "}
          </Typography>

          <div className="mt-8 mb-2   sm:w-96">
            {newacc ? (
              <form
                onSubmit={formik.handleSubmit}
                className="grid gap-x-8 gap-y-3 w-full grid-cols-2"
              >
                <Input
                  shrink
                  size="sm"
                  placeholder="الاسم"
                  htmlFor="name"
                  id="name"
                  className="!border-t-blue-gray-200 placeholder:text-right focus:!border-t-gray-900"
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Input
                  placeholder="اسم الأب"
                  htmlFor="father_name"
                  id="father_name"
                  name="father_name"
                  className="!border-t-blue-gray-200 placeholder:text-right focus:!border-t-gray-900"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.father_name}
                />
                <Input
                  htmlFor="repassword"
                  placeholder="اعد ادخال كلمة السر"
                  id="repassword"
                  name="repassword"
                  type="password"
                  className="!border-t-blue-gray-200 placeholder:text-right focus:!border-t-gray-900"
                  onChange={formik.handleChange}
                  value={formik.values.repassword}
                />
                <Input
                  htmlFor="password"
                  placeholder="كلمة السر"
                  id="password"
                  name="password"
                  type="password"
                  className="!border-t-blue-gray-200 placeholder:text-right focus:!border-t-gray-900"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                <Input
                  htmlFor="phone_number"
                  placeholder="رقم الموبايل"
                  id="phone_number"
                  className="!border-t-blue-gray-200 placeholder:text-right focus:!border-t-gray-900"
                  name="phone_number"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.phone_number}
                />{" "}
                <Menu>
                  <MenuHandler>
                    <Button>خدمات</Button>
                  </MenuHandler>
                  <MenuList className="max-h-72">
                    {rolesHeaders.map((head, index) => (
                      <MenuItem key={index} className="p-0 text-black text-xl">
                        <label
                          htmlFor={"item-"}
                          className="flex cursor-pointer items-center gap-2 p-2"
                        >
                          <Checkbox
                            name="role"
                            onChange={(e) => handlerole(e, head)}
                            ripple={false}
                            checked={formik.values.role.includes(head)}
                            containerProps={{ className: "p-0" }}
                            className="hover:before:content-none"
                          />
                          {head}
                        </label>
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
                <Button
                  type="submit"
                  className="mt-6 bg-blue-gray-700 flex justify-center"
                  fullWidth
                >
                  {isloading ? <Spinner /> : "تاكيد"}
                </Button>
              </form>
            ) : (
              <div className="mb-1 flex flex-col gap-6">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="-mb-3 text-right "
                >
                  رقم الموبايل
                </Typography>
                <Input
                  onChange={(e) => {
                    setData({ ...data, phone_number: e.target.value });
                  }}
                  size="lg"
                  placeholder="رقم الموبايل"
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
            )}

            {newacc ? (
              <Button
                type="submit"
                className="mt-6 flex justify-center"
                fullWidth
              >
                {isloading ? <Spinner /> : "تاكيد"}
              </Button>
            ) : (
              <Button
                onClick={loginUser}
                type="submit"
                className="mt-6 flex justify-center"
                fullWidth
              >
                {isloading ? <Spinner /> : "تسجيل الدخول"}
              </Button>
            )}
            <Button
              type={"reset"}
              className="mt-6 flex justify-center"
              fullWidth
              onClick={() => setNewacc(true)}
            >
              {isloading ? <Spinner /> : "حساب جديد"}
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Login;
