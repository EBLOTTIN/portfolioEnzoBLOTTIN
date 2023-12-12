import "./NavBar.css";
import enzo from "../../assets/enzo.jpeg";

const NavBar = () => {
  return (
    <header className="allCategory">
      <div className="category1">
        <h1 className="category">Home</h1>
        <h1 className="category">About me</h1>
        <h1 className="category">My Projects</h1>
        <img className="photoImage" src={enzo} alt="Ma Photo" />
      </div>
      <div className="category2">
        <h1 className="category">Home</h1>
        <h1 className="category">About me</h1>
        <h1 className="category">My Projects</h1>
        <img className="photoImage" src={enzo} alt="Ma Photo" />
      </div>
    </header>
  );
};

export default NavBar;
