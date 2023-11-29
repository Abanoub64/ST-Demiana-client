import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("useAuthContext in the provider");
  }

  return context;
}

export default useAuthContext;
