/* eslint-disable react/style-prop-object */
import "./Carroussel3D.css";
import { useEffect, useState } from "react";
import HTML from "../../assets/html5.svg";
import CSS from "../../assets/css3-alt.svg";
import JS from "../../assets/js.svg";
import Node from "../../assets/node.svg";
import React2 from "../../assets/react.svg";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [HTML, CSS, JS, Node, React2];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="carousel"
          className="theCaroussel"
          style={{
            transform: `rotateY(${
              (360 / images.length) * (index - currentIndex)
            }deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default Carousel;
