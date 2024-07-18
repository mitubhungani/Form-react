import React, { useState } from "react";

import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  let [userinfo, setuserinfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  let [err, seterr] = useState({
    username: false,
    email: false,
    password: false,
  });

  const inputdata = (e) => {
    const { name, value } = e.target;
    setuserinfo({ ...userinfo, [name]: value });
    seterr({ ...err, [name]: false });
  };
  console.log(userinfo);

  const check = (e) => {
    e.preventDefault();

    let rexuname = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
    let rexemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let rexpass = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

    let { username, email, password } = userinfo;
    if (!rexuname.test(username)) {
      toast.error('Enter Valid Username', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
      seterr({ ...err, username: true });
      return;
    }

    if (!rexemail.test(email)) {
      toast.error('Enter Valid Email', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
      seterr({ ...err, email: true });
      return;
    }

    if (!rexpass.test(password)) {
      toast.error('Enter Valid Password', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
      seterr({ ...err, password: true });
      return;
    } else {
      toast.success('Submit Successfull', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
    }
  };
  return (
    <>
    <ToastContainer />
      <div className=" h-screen p-1">
        <form onSubmit={check} className="w-1/4 mx-auto my-40 flex flex-col">
          <h1 className="text-black text-4xl font-bold text-center mb-6">
            Sign Up
          </h1>
          <input
            type="text"
            
            className="m-2 p-2 rounded-lg focus:outline-none border-4"
            placeholder="username"
            name="username"
            onChange={inputdata}
            // style={{ borderColor: err.username ? "green" : userinfo.username.length>0?"green":"red" }}
            style={{ borderColor: err.username ? "red" : null }}
          />
          {err.username ? <p>Enter valid Username</p> : null}
          <input
            type="text"
            
            className="m-2 p-2 rounded-lg focus:outline-none border-4"
            placeholder="email"
            name="email"
            onChange={inputdata}
            style={{ borderColor: err.email ? "red" : null }}
          />
          {err.email ? <p>Enter valid Email</p> : null}
          <input
            type="text"
            
            className="m-2 p-2 rounded-lg focus:outline-none border-4"
            placeholder="password"
            name="password"
            onChange={inputdata}
            style={{ borderColor: err.password ? "red" : null }}
          />

          {err.password ? <p>Enter valid password</p> : null}

          <input
            type="submit"
            className="m-2 p-2 rounded-lg focus:outline-none border-4 cursor-pointer hover:bg-slate-100"
          />
        </form>
      </div>
    </>
  );
};

export default Form;
