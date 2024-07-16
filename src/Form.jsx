import React, { useState } from "react";

import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  let [userinfo, setuserinfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  const inputdata = (e) => {
    const { name, value } = e.target;
    setuserinfo({ ...userinfo, [name]: value });
  };
  console.log(userinfo);

  const [submited, setsubmited] = useState(false);
  const [not, setnot] = useState(false);

  const check = (e) => {
    e.preventDefault();
    if (
      userinfo.username.length > 0 &&
      userinfo.email.length > 0 &&
      userinfo.password.length > 0
    ) {
      toast.success("🦄 Wow so easy!", {
        position: "top-center",
        autoClose: 2992,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      setsubmited(true);
    } else {
      toast.error("Enter All Fild", {
        position: "top-center",
        autoClose: 2992,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      setnot(true);
    }
  };

  return (
    <>
      {submited ? (
        <video id="video1" autoPlay width="100%" className="fixed">
          <source src="./video/meme2.mp4" />
        </video>
      ) : (
        ""
      )}

      {not ? (
        <video id="video1" autoPlay width="100%" className="fixed">
          <source src="./video/meme3.mp4" />
        </video>
      ) : (
        ""
      )}
      <ToastContainer />
      <div className=" h-screen p-1">
        <form onSubmit={check} className="w-1/4 mx-auto my-40 flex flex-col">
          <h1 className="text-black text-6xl font-bold text-center">Form</h1>
          <input
            type="text"
            className="m-2 p-2 rounded-lg focus:outline-none border-4"
            placeholder="name"
            name="username"
            onChange={inputdata}
          />
          <input
            type="email"
            className="m-2 p-2 rounded-lg focus:outline-none border-4"
            placeholder="email"
            name="email"
            onChange={inputdata}
          />
          <input
            type="password"
            className="m-2 p-2 rounded-lg focus:outline-none border-4"
            placeholder="password"
            name="password"
            onChange={inputdata}
          />
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
