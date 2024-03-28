import axios from "axios";
import React, { useState } from "react";
import useAuthContext from "./useAuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useSignin() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isloading, setisloading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (phone_number, password) => {
    setisloading(true);
    setError(null);

    try {
      const res = await axios.post("/login", {
        Headers: {
          "content-Type": "application/json",
        },
        phone_number,
        password,
      });

      if (res.data.error) {
        setError(res.data.error);
        toast.error("حدث خطأ");
        setisloading(false);
      } else {
        console.log(res.data);
        const user = JSON.stringify(res.data); // Stringify the user data
        localStorage.setItem("user", user);

        dispatch({
          type: "LOGIN",
          payload: res.data,
        });

        setisloading(false);
        toast.success("تم تسجيل الدخول بنجاح");
        navigate("/select");
      }
    } catch (error) {
      console.log(error);
      setError("حدث خطأ");
      setisloading(false);
      toast.error("حدث خطأ");
    }
  };

  return { signup, isloading, error };
}

export default useSignin;
