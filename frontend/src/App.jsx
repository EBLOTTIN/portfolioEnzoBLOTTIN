import Home from "./pages/Home/Home";
import "./App.css";
import NavBar from "./pages/NavBar/NavBar";
import AboutMe from "./pages/AboutMe/AboutMe";
import Footer from "./pages/Footer/Footer";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
