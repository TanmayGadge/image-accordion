import React, { useState } from "react";
import "./gallery.css";

function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  function handleMouseEnter(index) {
    setHoveredIndex(index);
  }

  function handleMouseLeave() {
    setHoveredIndex(null);
  }

  const images = [
    "./assets/image-1.jpg",
    "./assets/image-2.jpg",
    "./assets/image-3.jpg",
    "./assets/image-4.jpg",
    "./assets/image-5.jpg",
    "./assets/image-6.jpg",
  ];

  return (
    <div className="gallery">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt=""
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          style={{
            filter: hoveredIndex !== null && hoveredIndex !== index ? "grayscale(100%)" : "none",
            transition: "filter 0.3s",
            transition: "width ease-out 0.75s"
          }}
        />
      ))}
    </div>
  );
}

export default Gallery;
