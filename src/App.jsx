import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbarr from "./components/Navbarr";
import Database from "./pages/Database";
import axios from "axios";
import Delete from "./pages/Delete";
import Addform from "../src/pages/Addform";
import Showdata from "./pages/Showdata";
import { Toaster } from "react-hot-toast";

import EditData from "./pages/EditData";

axios.defaults.baseURL = "https://st-deimana-server.onrender.com";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Navbarr />
      <Toaster position="bottom right" toastOptions={{ duration: 2000 }} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/database" element={<Database />} />
        <Route path="/database/:id" element={<Showdata />} />
        <Route path="/database/edit/:id" element={<EditData />} />
        <Route path="/database/delete/:id" element={<Delete />} />
        <Route path="/database/add" element={<Addform />} />
      </Routes>
    </>
  );
}

export default App;
