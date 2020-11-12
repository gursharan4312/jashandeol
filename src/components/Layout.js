import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ type, children }) {
  return (
    <>
      <Header type={type} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
