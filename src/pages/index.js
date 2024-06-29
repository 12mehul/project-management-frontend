import React from "react";
import Dashboard from "./admin";
import Login from "@/authentication/Login";

const isUserLoggedIn = () => {
  const isLoggedIn = false;
  return isLoggedIn;
};

const Home = () => {
  const isLoggedIn = isUserLoggedIn();

  return isLoggedIn ? <Dashboard /> : <Login />;
};

export default Home;
