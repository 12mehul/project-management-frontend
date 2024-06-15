import "../app/globals.css";
import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import AuthLayout from "./authLayout";
import AdminLayout from "./adminLayout";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;

  const renderLayout = () => {
    if (pathname == "/" || pathname === "/login" || pathname === "/register") {
      return (
        <AuthLayout>
          <Component {...pageProps} />
        </AuthLayout>
      );
    } else {
      return (
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
      );
    }
  };

  return (
    <>
      <Head>
        <title>Project Management</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      {renderLayout()}
    </>
  );
}

export default MyApp;
