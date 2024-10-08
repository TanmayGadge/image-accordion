import React, { useEffect, useRef } from "react";
import "./App.css";
import Gallery from "./components/gallery/gallery";
import Input from "./components/input/input";
import images from "./components/gallery/images";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Heading from "./components/heading/heading";

function App() {
  // gsap.registerPlugin(TextPlugin);

  // const headingRef = useRef(null);

  // const animText = new SplitType(headingRef.current, {type: "words, chars"});

  // useEffect(()=>{
  //   gsap.to(".anim-text", {
  //     duration: 3,
  //     text: {
  //       value: "Gallery"
  //     }
  //   })
  // });

  return (
    <div className="App">
      <Heading />
      <main>
        <Gallery images={images} />
      </main>
      {/* <footer>
        <Input />
      </footer> */}
    </div>
  );
}

export default App;
