import "./Footer.css";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <p className="copyright">
          © Enzo BLOTTIN 2023. Tous droits reservés. 2023
        </p>
        <div className="social">
          <a href="https://github.com/EBLOTTIN">
            <div>
              <img className="github" src={github} alt="Mon github" />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/enzo-blottin-201416234/">
            <div>
              <img className="linkedin" src={linkedin} alt="Mon Linkedin" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
