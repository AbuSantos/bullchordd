import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import useSound from "use-sound";
// import Controls from "../Controls/Controls";
import drum_roll from "../../../assets/drum_roll.mp3";
import chimes from "../../../assets/chimes.mp3";
import VolumeBar from "../Volume/Volume";
import Musicplayer from "../Musicplayer";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";


const Player = () => {
  const audioRef = useRef(null);

  //playing and pause
  const [songs, setSongs] = useState([
    { id: 1, track_name: "chimes", track_url: chimes },
    { id: 2, track_name: "drums", track_url: drum_roll },
  ]);

  const [volume, setVolume]=useState(0.1)
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [play, { pause, duration, sound, stop }] = useSound(
    songs[currentTrackIndex].track_url
  );
  const [currentTrack, setCurrentTrack] = useState(0);

  //calculating the timeline
  const [currTime, setCurrTime] = useState({ min: "", sec: "" });
  const [time, setTime] = useState({ min: "", sec: "" });
  const [seconds, setSeconds] = useState();

  //setting playlist and creating favorites
  const [favorites, setFavorite] = useState([]);
  const [createPlaylist, setCreatePlaylist] = useState([]);

  //converting the time from the useSound
  useEffect(() => {
    if (duration) {
      const sec = duration / 100;
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      setTime({
        min: min,
        sec: secRemain,
      });
    }
  }, [isPlaying]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (sound) {
  //       setSeconds(sound.seek([]));
  //       const min = Math.floor(sound.seek([]) / 60);
  //       const sec = Math.floor(sound.seek([]) % 60);

  //       setCurrTime({
  //         min,
  //         sec,
  //       });
  //     }
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [sound]);

  //create a playlist
  const handlePlaylist = (song) => {
    setCreatePlaylist([...createPlaylist, song]);
  };

  const deleteSong = (id) => {
    let newPlaylist = createPlaylist.filter((song) => song.id !== id);
    setCreatePlaylist(newPlaylist);
  };

  const handleNext = () => {
    // setCurrentTrackIndex((currentTrackIndex + 1) % songs.length);
    if (currentTrackIndex === songs.length - 1) {
      setCurrentTrackIndex(0);
    } else {
      setCurrentTrackIndex(currentTrackIndex + 1);
    }
  };

  const handlePrevious = () => {
    // setCurrentTrackIndex((currentTrackIndex - 1) % songs.length);
    if (currentTrackIndex === 0) {
      setCurrentTrackIndex(songs.length - 1);
    } else {
      setCurrentTrackIndex(currentTrackIndex - 1);
    }
  };

  const playing = () => {
    
      if(isPlaying){
        setIsPlaying(false)
        audioRef.current.pause();
      }else{
        setIsPlaying(true)
        audioRef.current.play();
      }  
    
  };

  const handleTimeUpdate = () => {
    // setCurrentTime(audioRef.current.currentTime);
  };

  const handleEnded = () => {
    if (currentTrackIndex === songs.length - 1) {
      setCurrentTrackIndex(0);
    } else {
      setCurrentTrackIndex(currentTrackIndex + 1);
    }
    setCurrentTrack(songs[currentTrackIndex]);
  };
    

  const handlePlay = (song) => {
    setCurrentTrack(song);
    setIsPlaying(true);
  };

  

  const handlePause = (song)=>{
    setCurrentTrack(song);
    setIsPlaying(false);
  }

  return (
    <div>
      <div className="player_status">
        <h3>Playing Now</h3>
        <div className="song_image">
          <img src = "" alt="" />
        </div>
      </div>
      <div className="song_details">
        <h2 className="title">Confident</h2>
        <h3 className="subtitle"> BNXN</h3>
      </div>
      <div className="control">
        <div>
          <div className="time">
            <input
              type="range"
              min="0"
              max={duration / 1000}
              default="0"
              value={seconds}
              className="timeline"
              onChange={(e) => {
                sound.seek([e.target.value]);
              }}
            />
          </div>
         <VolumeBar value={volume} min="0" max="1" onChange={(event) => setVolume(event.target.value)} setVolume={setVolume} />
          
          <div className="time">
            <p>
              {currTime.min}:{currTime.sec}
            </p>
            <p>
              {time.min}:{time.sec}
            </p>
          </div>

          <Musicplayer handleNext={handleNext} handlePrevious={handlePrevious} playing={playing} isPlaying={isPlaying}/>

          <ul>
            {songs.map((song) => {
              return (
                <li key={song.id}>
                  {song.track_name}
                  <PlayArrowIcon onClick={() => handlePlay(song)} />
                  <button onClick={() => handlePlaylist(song)}>
                    create playlist
                  </button>
                </li>
              );
            })}
          </ul>

          {currentTrack && (
            <audio
              ref={audioRef}
              src={currentTrack.track_url}
              onPause={()=>handlePause}
              volume={volume}
              onEnded={handleEnded}
              onTimeUpdate={handleTimeUpdate}
              autoPlay={isPlaying}
              />        
          )}
        </div>
        {/* <Controls playing={playing} /> */}
      </div>
      <div className="view_playlist">
        <h3>Your Playlist</h3>
        <ul>

          {createPlaylist.map((song) => {
            return (
              <div>
                <li key={song.id}>{song.track_name}</li>
                <button onClick={() => deleteSong(song.id)}>x</button>
              </div>
            );
          })}

        </ul>
      </div>
    </div>
  );
};

export default Player;
