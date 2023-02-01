import Home from "./pages/Home/Home";
import "./App.css";
import NavBar from "./pages/NavBar/NavBar";
import AboutMe from "./pages/AboutMe/AboutMe";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
