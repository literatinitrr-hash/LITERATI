import React, { useState } from "react";
import Landing from "./pages/Landing";
import Register from "./pages/Register"
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import "./App.css";

function App() {
  const [showRegister, setShowRegister] = useState(false)
  return (
    <div>
      <AudioPlayer />
      {showRegister ? (
        <Register onBack={() => setShowRegister(false)} />
      ) : (
        <Landing onRegisterClick={() => setShowRegister(true)} />
      )}
    </div>
  );
}

export default App;