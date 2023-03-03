import React from 'react'
import PauseIcon from '@mui/icons-material/Pause'
import StopIcon from '@mui/icons-material/Stop'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

const Musicplayer = ({
  handleNext,
  playing,
  handlePrevious,
  isPlaying,
  song,
}) => {
  return (
    <div>
      <SkipNextIcon onClick={handleNext} />

      {!isPlaying ? (
        //if playing is false, play the audio
        <PlayArrowIcon onClick={playing} />
      ) : (
        //else pause the audio
        <PauseIcon onClick={playing} />
      )}

      <SkipPreviousIcon onClick={handlePrevious} />
    </div>
  )
}

export default Musicplayer
