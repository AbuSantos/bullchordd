import React from 'react'
import Musicplayer from '../../audioplayer/Musicplayer'
import './style.css'

const Audionav = ({ handleNext, playing, handlePrevious, isPlaying }) => {
  return (
    <div className="bottom_nav">
      <Musicplayer
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        playing={playing}
        isPlaying={isPlaying}
      />
    </div>
  )
}

export default Audionav;
