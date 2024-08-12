import React, { useState } from "react";
import "./input.css";
import images from "../gallery/images";

function Input() {
  const [imageSrc, setImageSrc] = useState(null);

  function handleImageUpload(event) {
    // console.log(event.target.files);
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImageSrc(e.target.result);
        console.log(imageSrc);
        images.push(imageSrc);
      };

      reader.readAsDataURL(file);
    }
    // console.log(imageSrc);
  }

  function handleSubmit() {
  }

  return (
    <>
      <div className="input-container">
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
      </div>
      <div className="content">
      {/* {imageSrc && <img src={imageSrc} alt="Uploaded" />} */}
      </div>
    </>
  );
}

export default Input;
