import React from "react";

function Input() {
  var styles = {
    display: "flex",
    justifyContent: "center",
  };

  function handleImageChange(event){
    console.log(event.target.files);
  }

  return (
    <div className="input-container" style={styles}>
      <input
        className="image-input"
        type="file"
        accept="image/jpg, image/png, image/jpeg"
        style={{ 
            borderRadius: "5px", 
            padding: "20px 10px 20px 10px",
        }} 
        onChange={handleImageChange}
      />
    </div>
  );
}

export default Input;
