import React, { createContext, useReducer } from "react";

const ClassContext = createContext();

const classReducer = (state, action) => {
  switch (action.type) {
    case "SELECT_CLASS":
      return { classdata: action.payload };
    case "UNSELECT_CLASS":
      return { classdata: null };
    default:
      return state;
  }
};

export default function ClassProvider({ children }) {
  const [state, dispatch] = useReducer(classReducer, {
    class: null,
  });

  return (
    <ClassContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ClassContext.Provider>
  );
}

export { classReducer, ClassContext };
