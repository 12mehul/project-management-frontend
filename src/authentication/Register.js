import React from "react";
import Link from "next/link";

const Register = () => {
  return (
    <div className="my-12">
      <div className="max-w-lg w-full mx-auto bg-white p-8 rounded-xl shadow shadow-slate-300">
        <h1 className="text-4xl font-medium">Sign up</h1>
        <p className="text-slate-500">Hi, Welcome back 👋</p>
        <form className="my-8">
          <div className="flex flex-col space-y-5">
            <label htmlFor="firstname">
              <p className="font-medium text-slate-700 pb-2">First Name</p>
              <input
                id="firstname"
                name="firstname"
                type="text"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Enter firstname"
              />
            </label>
            <label htmlFor="lastname">
              <p className="font-medium text-slate-700 pb-2">Last Name</p>
              <input
                id="lastname"
                name="lastname"
                type="text"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Enter lastname"
              />
            </label>
            <label htmlFor="email">
              <p className="font-medium text-slate-700 pb-2">Email Address</p>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Enter email address"
              />
            </label>
            <label htmlFor="password">
              <p className="font-medium text-slate-700 pb-2">Password</p>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Enter your password"
              />
            </label>
            <label htmlFor="confirmPassword">
              <p className="font-medium text-slate-700 pb-2">
                Confirm Password
              </p>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Enter your confirm password"
              />
            </label>
            <label htmlFor="img">
              <p className="font-medium text-slate-700 pb-2">Image</p>
              <div className="w-full flex">
                <input id="img" name="img" type="file" hidden />
                <div className="flex w-28 h-9 px-2 flex-col bg-purple-600 hover:bg-purple-500 rounded-full shadow text-white text-xs font-semibold leading-4 items-center justify-center cursor-pointer focus:outline-none">
                  Choose File
                </div>
              </div>
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
            <button className="w-full py-3 font-medium text-white bg-purple-600 hover:bg-purple-500 rounded-lg border-purple-500 hover:shadow inline-flex space-x-2 items-center justify-center">
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
              <span>Create Account</span>
            </button>
          </div>
        </form>
        <p className="flex gap-1 items-center justify-center">
          Registered yet?
          <Link
            href="/login"
            className="text-teal-400 font-medium inline-flex space-x-1 items-center hover:text-purple-600"
          >
            <span>Login now</span>
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
  );
};

export default Register;
