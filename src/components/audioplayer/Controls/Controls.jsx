import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import StopIcon from "@mui/icons-material/Stop";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";

const Controls = (playing) => {
  return (
    <div>
      <button>
        <SkipNextIcon />
      </button>
      {!playing ? (
        <button>
          <PlayArrowIcon />
        </button>
      ) : (
        <PauseIcon />
      )}
      <button className="next_button">
        <SkipPreviousIcon />
      </button>
    </div>
  );
};

export default Controls;
