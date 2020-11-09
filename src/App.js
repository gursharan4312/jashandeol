import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
const { default: AboutMe } = require("./components/AboutMe");
const { default: Header } = require("./components/Header");

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutMe />
      <Portfolio />
    </div>
  );
}

export default App;
