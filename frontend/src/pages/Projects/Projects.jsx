import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
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

  const getIdImage = (i) => {
    const imageName = i.name.split(".")[0];
    const idImage = imageName[imageName.length - 1];
    return idImage;
  };
  return (
    <div className="pagePorject">
      <h2 className="titreProjet">My projects</h2>
      <div className="contenuProjet">
        {images.map((i) => (
          <Link to={`/projets/${getIdImage(i)}`}>
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
