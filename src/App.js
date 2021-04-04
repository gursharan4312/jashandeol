import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
    return window.removeEventListener("resize", () => {});
  }, []);
  return (
    <Switch>
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route extact path="/" component={Home} />
    </Switch>
  );
}

export default App;
