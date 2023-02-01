import "./Home.css";
import bureau from "../../assets/bureau.jpg";

const Home = () => {
  return (
    <div>
      <div className="fondHome">
        <img className="bureau" src={bureau} alt="bureau" />
      </div>
    </div>
  );
};

export default Home;
