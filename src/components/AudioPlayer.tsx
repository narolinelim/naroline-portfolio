import playButton from '../assets/play-button.png';
import React, { useState, useEffect, useRef } from "react";
import AudioControls from "./AudioControl";

/* 
https://www.letsbuildui.dev/articles/building-an-audio-player-with-react-hooks/ 
*/

interface AudioPlayerProps {
  track: {
    src: string;
  };
};

const AudioPlayer = ({ track }: AudioPlayerProps) => {

  const [isPlaying, setIsPlaying] = useState(false);
  const { src } = track;

  const audioRef = useRef(new Audio(src));

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener("ended", () => setIsPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setIsPlaying(false));
    };
  }, []);

  useEffect(() => {
    const keyPress = (e: KeyboardEvent) => {
      if (e.code == "Space") {
        e.preventDefault();
        setIsPlaying(prev => !prev);
      }
    };

    window.addEventListener("keydown", keyPress);
    window.addEventListener("keydown", (e) => console.log(e.code, e.key));
    return () => {
      window.removeEventListener("keydown", keyPress);
    }
  }, []);
  
  return (
    <div className="flex h-20 w-20 content-center">
      <AudioControls
        isPlaying={isPlaying}
        isPaused={setIsPlaying}
      />
    </div>
  )
}

export default AudioPlayer;