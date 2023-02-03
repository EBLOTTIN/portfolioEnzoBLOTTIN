import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import NavBar from "./pages/NavBar/NavBar";
import Footer from "./pages/Footer/Footer";
import ProjetItem from "./pages/Projects/ProjetItem";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projets/:id " element={<ProjetItem />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
