import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Book from "./components/Registration-Form/Book";
import Landing from "./pages/Landing";
import Register from "./pages/Register"
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
// import "./App.css";

function App() {
  return (
    <Router>
      <AudioPlayer/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/register/*" element={<Register />} />
        <Route path="/book" element={<Book />} />  
      </Routes>
    </Router>
  );
}

export default App;