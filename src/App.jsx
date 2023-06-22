import React, { useRef } from "react";

// COMPONENTS
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import SoundSection from "./components/SoundSection";
import DisplaySection from "./components/DisplaySection";
import WebGiViewer from "./components/WebGiViewer";
import Loader from "./components/Loader";


function App() {
  const webGiViewerUserRef = useRef()
  const contentRef = useRef()

  const handlePreview = () => {
    webGiViewerUserRef.current.triggerPreview();
  }

  return (
    <div className="App">
      <Loader />
      <div ref={contentRef} id='content'>
        <Nav />
        <Jumbotron />
        <SoundSection />
        <DisplaySection triggerPreview={handlePreview} />
      </div>
      <WebGiViewer contentRef={contentRef} ref={webGiViewerUserRef} />
    </div>
  );
}

export default App;
