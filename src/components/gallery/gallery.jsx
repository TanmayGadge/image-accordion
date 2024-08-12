import React, { useState } from "react";
import "./gallery.css";

function Gallery(props) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expanded, setExpanded] = useState({
    isExpanded: false,
    imageIndex: null,
  });
  const [imageSrc, setImageSrc] = useState(null);

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
  }

  function handleImageUpload(event) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImageSrc(e.target.result);
        console.log(imageSrc);
        imageSrc && props.images.push(imageSrc);
      };

      reader.readAsDataURL(file);
    }
  }
  function handleSubmit() {}

  return (
    <>
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
                hoveredIndex === index && hoveredIndex !== null
                  ? "30vw"
                  : "10vw", //on hover

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
        {/* <div className="uploaded-image">
          {imageSrc && <img src={imageSrc} alt="Uploaded" />}
        </div> */}
      </div>

      {/* <div className="input-container">
        <button type="submit" onClick={handleSubmit}>
          Upload
        </button>
        <input
          className="image-input"
          type="file"
          accept="image/jpg, image/png, image/jpeg"
          style={{
            borderRadius: "5px",
            padding: "20px 10px 20px 10px",
          }}
          onChange={handleImageUpload}
        />
      </div> */}
    </>
  );
}

export default Gallery;
