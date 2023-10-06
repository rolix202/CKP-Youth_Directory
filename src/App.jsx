import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/home/homepage";
import HireMe from "./pages/hire_me";
import Cyonites from "./pages/cyonites";
import AboutCkp from "./pages/about_ckp";
import "./App.css"
// import MainLayout from "./components/main_layout";

function App(){

  // console.log(window.location);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/ckp" element={<AboutCkp/>} />
        <Route path="/cyonites" element={<Cyonites/>} />
        <Route path="/developer" element={<HireMe/>} />
      </Routes>
    </BrowserRouter>
   
  )
}
export default App;