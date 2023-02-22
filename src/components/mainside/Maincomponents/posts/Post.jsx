import React, { useState, useRef } from "react";
import "./style.css";
import drum_roll from "../../../../assets/drum_roll.mp3";
import chimes from "../../../../assets/chimes.mp3";

const Post = () => {
  const [currentTrack, setCurrentTrack] = useState(null);
  // const [currentTime, setCurrentTime] = useState(0);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef(null);

  const songs = [
    {
      id: 1,
      name: "Track 1",
      src: drum_roll,
    },
    {
      id: 2,
      name: "Track 2",
      src: chimes,
    },
  ];

  //   const handlePlay = (track) => {
  //     setCurrentTrack(track);
  //     setIsPlaying(true);
  //   };

  //   const handlePause = () => {
  //     setIsPlaying(false);
  //   };

  //   const handleTimeUpdate = () => {
  //     setCurrentTime(audioRef.current.currentTime);
  //   };

  //   const handleTimelineChange = (event) => {
  //     audioRef.current.currentTime = event.target.value;
  //   };

  //   const handleMasterPlay = () => {
  //     setCurrentTrack(tracks[0]);
  //     setIsPlaying(true);
  //   };

  //   const handleMasterPause = () => {
  //     setIsPlaying(false);
  //   };

  //   const handleEnded = () => {
  //     if (currentTrackIndex === tracks.length - 1) {
  //       setCurrentTrackIndex(0);
  //     } else {
  //       setCurrentTrackIndex(currentTrackIndex + 1);
  //     }
  //     setCurrentTrack(tracks[currentTrackIndex]);
  //   };

  //   return (
  //     <div>
  //       <div>
  //         <button onClick={handleMasterPlay}>Master Play</button>
  //         <button onClick={handleMasterPause}>Master Pause</button>
  //         {tracks.map((track) => (
  //           <div key={track.id}>
  //             <h4>{track.name}</h4>
  //             <button onClick={() => handlePlay(track)}>Play</button>
  //             <button onClick={handlePause}>Pause</button>
  //           </div>
  //         ))}
  //       </div>

  //       {currentTrack && (
  //         <>
  //           <audio
  //             ref={audioRef}
  //             src={currentTrack.src}
  //             onPlay={handlePlay}
  //             onPause={handlePause}
  //             onTimeUpdate={handleTimeUpdate}
  //             onEnded={handleEnded}
  //             autoPlay={isPlaying}
  //           />

  //           <input
  //             type="range"
  //             min={0}
  //             value={currentTime}
  //             onChange={handleTimelineChange}
  //           />
  //         </>
  //       )}
  //     </div>
  //   );

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentSong = songs[currentSongIndex];

  const handlePlay = (index) => {
    setCurrentSongIndex(index);
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handlePrevious = () => {
    if (currentSongIndex === 0) {
      setCurrentSongIndex(songs.length - 1);
    } else {
      setCurrentSongIndex(currentSongIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentSongIndex === songs.length - 1) {
      setCurrentSongIndex(0);
    } else {
      setCurrentSongIndex(currentSongIndex + 1);
    }
  };

  return (
    <div>
      <h1>Music Player</h1>
      <h2>Now Playing: {currentSong.name}</h2>
      <ul>
        {songs.map((song, index) => (
          <li key={song.id}>
            {song.name}{" "}
            <button onClick={() => handlePlay(index)}>
              {index === currentSongIndex && isPlaying ? "Pause" : "Play"}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handlePause}>{isPlaying ? "Pause" : "Play"}</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Post;
