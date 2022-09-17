import "./App.css";
import React from "react";
import {  Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Form from "./Components/Form";
import EnqList from "./Components/EnqList"
function App() {
  return (
    <>
    <NavBar />
   
      <Routes>
        <Route path="/" element={<Form/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/list" element={<EnqList/>}/>
      </Routes>
     
    </>
  );
}

export default App;