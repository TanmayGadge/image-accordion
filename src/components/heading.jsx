import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import "./heading.css";

function Heading() {
  gsap.registerPlugin(TextPlugin);

  useEffect(() => {
    gsap.to(".anim-text", {
      duration: 2,
      text: {
        value: "Gallery",
        // speed: 0.3,
      },
    });
  });

  return (
    <header>
      Welcome to <br /><span className="anim-text"></span>
    </header>
  );
}

export default Heading;
