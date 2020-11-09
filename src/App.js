// import React from "react";
const { default: AboutMe } = require("./components/AboutMe");
const { default: Header } = require("./components/Header");
const { default: Hero } = require("./components/Hero");
// import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
    </>
  );
}

export default App;
