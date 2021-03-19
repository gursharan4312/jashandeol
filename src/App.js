import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AllImages from "./pages/AllImages";
function App() {
  useEffect(() => {
    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
    return window.removeEventListener("resize", () => {});
  }, []);
  return (
    <Switch>
      <Route exact path="/portfolio" component={AllImages} />
      {/* <Route path="/portfolio/:category" component={Portfolio} /> */}
      <Route path="/contact" component={Contact} />
      <Route extact path="/" component={Home} />
    </Switch>
  );
}

export default App;
