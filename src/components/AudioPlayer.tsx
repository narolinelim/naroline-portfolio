import playButton from '../assets/play-button.png';

/* 
https://www.letsbuildui.dev/articles/building-an-audio-player-with-react-hooks/ 
*/

function AudioPlayer() {
  return (
    <div className="flex h-15 w-15 content-center">
      <img src={playButton} alt="play button"></img>
    </div>
  )
}

export default AudioPlayer;