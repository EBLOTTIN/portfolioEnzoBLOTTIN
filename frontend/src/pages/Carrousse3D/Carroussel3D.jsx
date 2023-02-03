import React, { useState, useEffect } from "react";
import "./Carroussel3D.css";

const images = ["css.png", "HTML5.png", "js.png", "node.png", "react.png"];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((i) => (i + 1) % 5);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="carousel-container" style={{ perspective: 800 }}>
      {images.map((image, i) => (
        <img key={i} className="carousel-item" src={image} alt="" />
      ))}
    </div>
  );
}
