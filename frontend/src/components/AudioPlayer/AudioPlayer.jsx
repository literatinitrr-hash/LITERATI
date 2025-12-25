import React, { useRef, useEffect } from "react";
import bgMusic from "../../assets/The Legend of El Dorado_spotdown.org.mp3";

const AudioPlayer = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.2;

    const startAudio = () => {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Autoplay blocked:", error.message);
        });
      }
    };

    const handleInteraction = () => {
      startAudio();
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
    };

    setTimeout(() => startAudio(), 100);
    document.addEventListener("click", handleInteraction);
    document.addEventListener("touchstart", handleInteraction);

    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src={bgMusic}
      loop
      preload="auto"
    />
  );
};

export default AudioPlayer;
