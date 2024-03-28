import React, { useContext } from "react";
import { ClassContext } from "../context/ClassContext";

function useClassContext() {
  const context = useContext(ClassContext);

  if (!context) {
    throw Error("useAuthContext in the provider");
  }

  return context;
}

export default useClassContext;
