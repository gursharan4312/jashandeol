import React from "react";
import { Switch, Route } from "react-router-dom";
// import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
// import Categories from "./pages/Categories";
import AllImages from "./pages/AllImages";
function App() {
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
