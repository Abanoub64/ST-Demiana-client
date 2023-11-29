import axios from "axios";
import React, { useState } from "react";
import useAuthContext from "./useAuthContext";
import { useNavigate } from "react-router-dom";

function useSignin() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isloading, setisloading] = useState(null);
  const { dispatch } = useAuthContext();
  const singup = async (name, password) => {
    setisloading(true);
    setError(null);

    const res = await axios.post("/login", {
      Headers: {
        "content-Type": "application/json",
      },
      name,
      password,
    });
    if (!res.ok) {
      setisloading(false);
      setError(true);
    }
    if (res.ok) {
      //save the user to localHOST
      const json = res.json();
      localStorage.setItem("user", JSON.stringify(json));
      // update Auth
      dispatch({
        type: "LOGIN",
        PAYLOAD: json,
      });
      setisloading(false);
      toast.success("Login successfull");
      navigate("/database");
    }
  };
  return { singup, isloading, error };
}

export default useSignin;
