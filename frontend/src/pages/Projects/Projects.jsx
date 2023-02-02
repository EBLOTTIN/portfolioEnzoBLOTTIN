import axios from "axios";
import { useEffect, useState } from "react";
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
  return (
    <div className="pagePorject">
      <div className="contenuProjet">
        {images.map((i) => (
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}${i.chemin}`}
            className="imageProjet"
            alt="imageProjet"
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
