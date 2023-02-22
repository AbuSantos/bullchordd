import React from 'react'
import PauseIcon from "@mui/icons-material/Pause";
import StopIcon from "@mui/icons-material/Stop";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";


const Musicplayer = ({handleNext,playing,handlePrevious,isPlaying}) => {
  return (
    <div>
        <button onClick={handleNext}>
            <SkipNextIcon />
          </button>

          {!isPlaying ? (
            //if playing is false, play the audio
              <PlayArrowIcon onClick = {playing} />
          ) : (
            //else pause the audio
             <PauseIcon onClick = {playing} />
          )}

          <button className="next_button" onClick={() => handlePrevious}>
            <SkipPreviousIcon />
          </button>
     </div>
  )
}

export default Musicplayer