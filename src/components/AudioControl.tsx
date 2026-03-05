
import playIcon from "../assets/play-button.png";
import pauseIcon from "../assets/pause.png"

/* 
https://www.letsbuildui.dev/articles/building-an-audio-player-with-react-hooks/ 
*/

interface AudioControlsProps {
  isPlaying: boolean;
  isPaused: (paused: boolean | ((prev: boolean) => boolean)) => void;
}

const AudioControls = ({ isPlaying, isPaused }: AudioControlsProps ) => (
  <div className="audio-controls">
    {isPlaying ? (
      <button type="button" className="pause-button" aria-label="Pause" onClick={() => isPaused(prev => !prev)}>
        <img src={pauseIcon} alt="Pause" />
      </button>
    ) : (
      <button type="button" className="play-button" aria-label="Play" onClick={() => isPaused(prev => !prev)}>
        <img src={playIcon} alt="Play" />
      </button>
    )}
  
  </div>
);


export default AudioControls;