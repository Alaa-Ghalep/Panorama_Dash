/* import logo from './logo.svg'; */

import { useEffect } from "react";
import Dashboard from "./Dashboard";
import {  Route, Routes, useNavigate } from "react-router-dom";
import Add from "./Crud/Add";
import ImageComp from "./Components/ImageComp";
import TestCrud from "./Crud/TestCrud";
import Update from "./Crud/Update";
import Read from "./Crud/Read";
import TestSlidbar from "./Components/TestSlidbar";

function App() {
   const navigate = useNavigate();

  return (
    <>
{/* <TestSlidbar/> */}



    <Dashboard/>

      {/* <TestCrud/> */}
    {/* <ImageComp/> */}
    <Routes>
      {/* <Route path="/" element={<Dashboard/>}></Route> */}
      {/* <Route path="/Dashboard" element={<Dashboard/>}></Route> */}


      {/* <Route path="/Add" element={<Add/>}></Route>
      <Route path="/TestCrud" element={<TestCrud/>}></Route>
      <Route path="/Update/:id" element={<Update/>}></Route>
      <Route path="/Read/:id" element={<Read/>}></Route> */}



      {/* <Route path="/TestCrud" element={<TestCrud/>}></Route> */}







    </Routes>

    </>
  );
}

export default App;
