import React, { useEffect, useState } from "react";
import Howl from "howler";
import { Button } from "@mui/material";
import drum_roll from "../../../assets/drum_roll.mp3";

const Playlist = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [player, setPlayer] = useState(null);

  const playlist = [drum_roll];
  console.log(playlist[currentTrackIndex]);

  useEffect(() => {
    const sound = new Howl({
      src: [playlist[currentTrackIndex].src],
      onend: handleNext,
    });
    setPlayer(sound);
  }, [currentTrackIndex]);

  //   useEffect(() => {
  //     if (isPlaying) {
  //       player.play();
  //     } else {
  //       player.pause();
  //     }
  //   }, [isPlaying, player]);

  const playing = () => {
    if (isPlaying) {
      player.pause();
      setIsPlaying(false);
    } else {
      player.play();
      setIsPlaying(true);
    }
  };

  const handleNext = () => {
    setCurrentTrackIndex((currentTrackIndex + 1) % playlist.length);
  };

  const currentTrack = playlist[currentTrackIndex];
  return (
    <div>
      <div className="track_title">{currentTrack.title}</div>
      <div className="controls">
        {isPlaying ? (
          <button onClick={playing}>play</button>
        ) : (
          <button onClick={playing}>pause</button>
        )}
      </div>
    </div>
  );
};

export default Playlist;
