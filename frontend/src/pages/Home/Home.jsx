import "./Home.css";
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <div>
      <div className="fondHome">
        <div className="bureau">
          <h1 className="textImage">Enzo BLOTTIN</h1>
          <h1 className="texteImage">Web Developer</h1>
        </div>
      </div>
      <AboutMe />
      <Projects />
    </div>
  );
};

export default Home;
