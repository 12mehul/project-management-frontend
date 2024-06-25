import React, { useEffect } from "react";
import { useRouter } from "next/router";

const AuthLayout = ({ children }) => {
  const router = useRouter();
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    if (
      token &&
      (router.pathname == "/" ||
        router.pathname.startsWith("/login") ||
        router.pathname.startsWith("/register"))
    ) {
      router.push("/admin");
    }
  }, [router]);

  return <div>{children}</div>;
};

export default AuthLayout;
