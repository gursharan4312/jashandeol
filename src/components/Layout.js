import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ className, type, children }) {
  return (
    <>
      <Header type={type} />
      <main className={className}>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
