import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const Projects = (id) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/images`)
      .then(({ data }) => {
        setImages(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="pagePorject">
      <h1 className="titreProjet">My Projects</h1>
      <div className="contenuProjet">
        {images.map((i) => (
          <Link to={`/projet/${id}`}>
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}${i.chemin}`}
              className="imageProjet"
              alt="imageProjet"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
