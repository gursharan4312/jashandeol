import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ className, type, children }) {
  return (
    <div
      className="d-flex flex-column justify-content-between"
      style={{ minHeight: "100vh" }}
    >
      <div>
        <Header type={type} />
        <main
          className={`${className} flex-1`}
          style={{ marginTop: type === "home" ? "0" : "110px" }}
        >
          {children}
        </main>
      </div>
      {type !== "home" && <Footer />}
    </div>
  );
}

export default Layout;
