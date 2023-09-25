import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

function App() {
  return (
    <Main>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </Main>
  );
}

export default App;
