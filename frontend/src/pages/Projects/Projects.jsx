import axios from "axios";
import "./Projects.css";
import { useState, useEffect } from "react";

const Projects = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imageReferences = [
      "/assets/images/projet1.png",
      "/assets/images/projet2.png",
      "/assets/images/projet3.png",
      "/assets/images/hackathon2.png",
    ];
    Promise.all(
      imageReferences.map(async (imageReferences) => {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}${imageReferences}`
        );
        return response.data;
      })
    )
      .then((images) => {
        setImages(images);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="pagePorject">
      <div className="projects">
        {images.map((image, index) => {
          <img
            className="imageProjet"
            key={index}
            src={image}
            alt="porjectImage"
          />;
        })}
      </div>
    </div>
  );
};

export default Projects;
