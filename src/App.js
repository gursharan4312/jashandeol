import React from "react";
import { Switch, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import { default as PortfolioComponent } from "./components/Portfolio";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Categories from "./pages/Categories";
function App() {
  return (
    <Switch>
      <Route exact path="/portfolio" component={Categories} />
      <Route path="/portfolio/:category" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <Route extact path="/" component={Home} />
    </Switch>
  );
}

export default App;
