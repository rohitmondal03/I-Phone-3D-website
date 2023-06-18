import React from "react";

// COMPONENTS
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import SoundSection from "./components/SoundSection";
import DisplaySection from "./components/DisplaySection";
import WebGiViewer from "./components/WebGiViewer";


function App() {
  return (
    <div className="App">
      <Nav />
      <Jumbotron />
      <SoundSection />
      <DisplaySection />
      <WebGiViewer />
    </div>
  );
}

export default App;
