import { Switch, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
function App() {
  return (
    <Switch>
      <Route path="/portfolio" component={Portfolio} />
      <Route extact path="/" component={Home} />
    </Switch>
  );
}

export default App;
