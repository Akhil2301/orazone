import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { API } from "./config";
const Form = () => {

  const [values,setValues]=useState({
    fname:'',
    lname:'',
    phone:'',
    email:'',   
    message:'',
    error:'',
    success:false
  })
  const navigate=useNavigate()
  const handleChange=(name)=>(event)=>{
    setValues({...values,error:false,[name]:event.target.value})
  }

  const { fname,lname,phone,email,message } = values;
  const signup = async (fname,lname,phone, email, message) => {
    await axios
      .post(`${API}/create`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        fname,
        lname,
        phone,
        email,
        message,
      })
      .then((response) => {
        setValues({ ...values, error: "", success: false });
        navigate('/list')
        // return  response.data
      })
      .catch((err) => {
        setValues({
          ...values,
          error: err.response.data.error,
          success: false,
        });
      });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    signup(fname,lname,phone, email, message);
  };

  return (
    <div className="bg-dark-purple">
      <div className="min-h-screen md:flex md:justify-center md:items-center ">
      
        <form className="mx-2 md:w-1/2 lg:w-1/3 bg-white shadow-md rounded px-8 pt-6 pb-10 mb-4 ">
        {values.error.length > 0 ? (
              <div
                className="mx-1 w- rounded-xl py-4 px-2 mb-4 text-sm text-red-700"
                role="alert">
                <span className="font-xl">{values.error}</span>
              </div>
            ) : (
              ""
            )}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username">
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              
              type="text"
              onChange={handleChange("fname")}
              placeholder="First Name"
              value={fname}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username">
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={lname}
              type="text"
              onChange={handleChange("lname")}
              placeholder="Last Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username">
              Phone
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             value={phone}
              type="text"
              onChange={handleChange("phone")}
              placeholder="Phone"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             value={email}
              type="text"
              onChange={handleChange("email")}
              placeholder="Email"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username">
              Message
            </label>

            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="4"
              value={message}
              onChange={handleChange('message')}
              placeholder="Your message"></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
