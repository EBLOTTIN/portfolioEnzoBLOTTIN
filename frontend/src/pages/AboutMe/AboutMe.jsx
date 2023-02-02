import "./AboutMe.css";
import chapeau from "../../assets/chapeaulogo.svg";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="textAboutMe">
        <h2 className="titreAboutMe">About Me</h2>
        <div className="presentation">
          <p className="textPresentation">
            My name is Enzo BLOTTIN, I'm 20 years old, I'm a web developer. In
            my studies I did a year of BTS SNIR (Digital system and networks)
            before integrating the wild code school to learn the job of Web
            developer for 5 months.
          </p>
          <img className="chapeau" src={chapeau} alt="etude" />
        </div>
        <p className="textLanguage">
          Here are the different languages I learned.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
