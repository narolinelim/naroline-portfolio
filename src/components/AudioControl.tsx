import React from "react";
import { ReactComponent as Play } from "./assets/play-button.png";
import { ReactComponent as Pause } from "./assets/pause.png"

/* 
https://www.letsbuildui.dev/articles/building-an-audio-player-with-react-hooks/ 
*/

const AudioControls = ({isPlaying, isPaused}) => (
  <div className="audio-controls">
    {isPlaying ? (
      <button type="button" className="play-button" aria-label="Play" onClick={isPaused(false)}>
        <Play />
      </button>
    ) : (
      <button type="button" className="pause-button" aria-label="Pause" onClick={isPaused(true)}>
        <Pause />
      </button>
    )}
  
  </div>
);


export default AudioControls;