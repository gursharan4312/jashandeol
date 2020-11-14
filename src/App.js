import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
function App() {
  return (
    <Switch>
      <Route path="/portfolio/:category" component={Portfolio} />
      <Route extact path="/" component={Home} />
    </Switch>
  );
}

export default App;
