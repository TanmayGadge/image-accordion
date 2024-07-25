import React, { useState } from "react";
import "./gallery.css";

function Gallery(props) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expanded, setExpanded] = useState({
    isExpanded: false,
    imageIndex: null,
  });

  const [focus, setFocus] = useState(false);

  function handleMouseEnter(index) {
    setHoveredIndex(index);
  }

  function handleMouseLeave() {
    setHoveredIndex(null);
  }

  function handleClick(index) {
    setExpanded((prevValue) => {
      return {
        isExpanded: !prevValue.isExpanded,
        imageIndex: index,
      };
    });

    if (expanded.isExpanded) {
      setFocus((prevValue) => !prevValue);
    }
  }

  return (
    <div className="gallery">
      {props.images.map((src, index) => (
        <img
          key={index}
          src={src}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
          style={{
            filter:
              hoveredIndex !== null && hoveredIndex !== index
                ? "grayscale(100%)"
                : "none",
            transition: "filter 0.3s",
            transition: "width ease-out 0.75s",

            width:
              expanded.isExpanded && expanded.imageIndex === index
                ? "100vw"
                : "10vw", //on click

            width:
              hoveredIndex === index && hoveredIndex !== null ? "30vw" : "10vw", //on hover

            width:
              expanded.isExpanded &&
              
              hoveredIndex === index &&
              hoveredIndex !== null
                ? "100vw"
                : null, //on hover when expanded

            height:
              expanded.isExpanded && expanded.imageIndex === index
                ? "100vh"
                : "80vh",
            display:
              expanded.isExpanded && expanded.imageIndex !== index && "none",
          }}
        />
      ))}
    </div>
  );
}

export default Gallery;
