import React, { useEffect, useState } from "react";
import Header from "@/layout/header";
import Sidebar from "@/layout/sidebar";
import { useRouter } from "next/router";
import { jwtDecode } from "jwt-decode";

const AdminLayout = ({ children }) => {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const isTokenExpired = (token) => {
    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return decodedToken.exp < currentTime;
    } catch (err) {
      return true;
    }
  };

  useEffect(() => {
    if (!token) return;
    if (isTokenExpired(token)) {
      window.location.href = "/";
      localStorage.clear();
      console.log("Token expired");
      return;
    }
    console.log("Token is valid");
  }, [token]);

  useEffect(() => {
    if (
      !token &&
      !router.pathname.startsWith("/login") &&
      !router.pathname.startsWith("/register")
    ) {
      router.push("/");
    }
  }, [router, token]);

  return (
    <div className="flex min-h-screen">
      <div>
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>
      <div className="w-full h-screen flex flex-col">
        <Header
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <div className="w-full flex-1 bg-purple-50 p-5 overflow-x-hidden overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
