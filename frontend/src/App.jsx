import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import NavBar from "./pages/NavBar/NavBar";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/projet/:id " element={<projetItem />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
