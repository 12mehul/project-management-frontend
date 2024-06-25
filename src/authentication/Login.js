import React, { useState } from "react";
import Link from "next/link";
import Loader from "@/components/common/Loader";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Login = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loader, setLoader] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!data.email) {
      newErrors.email = "Email is required";
    }
    if (!data.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setLoader(true);

    try {
      const res = await axios.post(`${apiUrl}/users/login`, {
        email: data.email,
        password: data.password,
      });
      if (res.data) {
        toast.success(res.data.msg);
        setLoader(false);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.userId);
        setData({
          email: "",
          password: "",
        });
        setTimeout(() => {
          window.location.href = "/admin";
        }, 3000);
      }
    } catch (err) {
      if (err) {
        setLoader(false);
        toast.error(err.response.data.msg);
      }
    }
  };

  return (
    <>
      <Toaster />
      <div className="flex items-center justify-center h-screen">
        <div className="max-w-lg w-full mx-auto bg-white p-8 rounded-xl shadow shadow-slate-300">
          <h1 className="text-4xl font-medium">Login</h1>
          <p className="text-slate-500">Hi, Welcome back 👋</p>
          <form className="my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-5">
              <label htmlFor="email">
                <p className="font-medium text-slate-700 pb-2">Email Address</p>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={data.email}
                  onChange={handleChange}
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-purple-500 hover:shadow"
                  placeholder="Enter email address"
                />
                <p className="text-red-500 pt-2">{errors.email}</p>
              </label>
              <label htmlFor="password">
                <p className="font-medium text-slate-700 pb-2">Password</p>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={data.password}
                  onChange={handleChange}
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-purple-500 hover:shadow"
                  placeholder="Enter your password"
                />
                <p className="text-red-500 pt-2">{errors.password}</p>
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 border-slate-200 focus:bg-indigo-600"
                />
                <label htmlFor="remember" className="text-purple-600">
                  Remember me
                </label>
              </div>
              <button
                className="w-full py-3 font-medium text-white bg-purple-600 hover:bg-purple-500 rounded-lg border-purple-500 hover:shadow inline-flex space-x-2 items-center justify-center"
                type="submit"
                disabled={loader}
              >
                {loader ? (
                  <Loader />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                )}
                <span>Login</span>
              </button>
            </div>
          </form>
          <p className="flex gap-1 items-center justify-center">
            Not registered yet?
            <Link
              href="/register"
              className="text-teal-400 font-medium inline-flex space-x-1 items-center hover:text-purple-600"
            >
              <span>Register now</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
