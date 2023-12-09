import React, { useState, useEffect, useCallback } from "react";
import useSound from "use-sound";
import ConfirmExitPopup from "../../../confirm-exit-popup/js/function.js";
import '../css/style.css';
import { motion } from "framer-motion";

// component for the song player, including the playlist, time left, and the music controls
function SongPlayer(props) {

    let songList = props.createSongList(); // creates a song list based on the vibe the user chose earlier
    
    // goes to the next song when the song ends
    const onSongEnd = () => {document.getElementById("forwardSkip").click(); };
    // goes to the activity end page when the last song finishes
    const onLastSongEnd = () => {props.onNextPage("groove-complete"); };
    

    // SONG CONTROLS

    // state for storing whether a song is playing
    const [isPlaying, setIsPlaying] = useState(false);

    // gettings controls for each song
    // used the use-sound library (https://github.com/joshwcomeau/use-sound) documentation
    const [play0, options0] = useSound(songList[0].filePath, {onend: onSongEnd});
    const [play1, options1] = useSound(songList[1].filePath, {onend: onSongEnd});
    const [play2, options2] = useSound(songList[2].filePath, {onend: onSongEnd});
    const [play3, options3] = useSound(songList[3].filePath, {onend: onSongEnd});
    const [play4, options4] = useSound(songList[4].filePath, {onend: onLastSongEnd});

    // storing the controls for each song to be used later
    const players = [
        {play: play0, pause: options0.pause, stop: options0.stop, sound : options0.sound},
        {play: play1, pause: options1.pause, stop: options1.stop, sound : options1.sound},
        {play: play2, pause: options2.pause, stop: options2.stop, sound : options2.sound},
        {play: play3, pause: options3.pause, stop: options3.stop, sound : options3.sound},
        {play: play4, pause: options4.pause, stop: options4.stop, sound : options4.sound}
    ];

    // toggles the play/pause button
    const playPause = () => {
        setIsPlaying(!isPlaying);
        !isPlaying ? players[currentSongIndex].play() : players[currentSongIndex].pause();
    };

    // shows the play or pause button depending on if the song is playing or not
    let playPauseButton;
    if (isPlaying) {
        playPauseButton = <img id="pause" src="icons/Pause.svg" alt="pause icon"/>;
    } else {
        playPauseButton = <img id="play" src="icons/Play.svg" alt="play icon"/>;
    }



    // PLAYLIST CONTROLS

    // state to store which song the user is currently on
    const [currentSongIndex, setCurrentSongIndex] = useState(0);

    // goes to the next song
    const forward = () => {
        let newIndex = currentSongIndex + 1;
        if (newIndex < 5) setCurrentSongIndex(newIndex);
        updatePlayer(currentSongIndex, newIndex);
    };

    // goes back a song
    const back = () => {
        let newIndex = currentSongIndex - 1;
        if (newIndex >=  0) setCurrentSongIndex(newIndex);
        updatePlayer(currentSongIndex, newIndex);
    };

    // keyboard shortcut to use the left and right arrow keys to (forward or back) skip through songs
    const handleKeyPress = useCallback((event) => {
        if (event.key === "ArrowLeft") {
            document.getElementById("backSkip").click();
        } else if (event.key === "ArrowRight") {
            document.getElementById("forwardSkip").click();
        }
      }, []);
    
    // hook to check for when keys are pressed
    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
          document.removeEventListener('keydown', handleKeyPress);
        };
      }, [handleKeyPress]);

    // controls songs when the current song changes
    const updatePlayer = (currentIndex, newIndex) => {
        players[currentIndex].stop();
        if (isPlaying) {
            if (newIndex < 0) players[0].play();
            else if (newIndex < 5) players[newIndex].play();
            else props.onNextPage("groove-complete");
        }
    };


    // ACTIVITY TIMER

    // gets the total length of the playlist in seconds
    let totalSec = songList.map((song) => song.length).reduce((totalLength, songLength) => totalLength + songLength, 0);
    const totalMin = Math.ceil(totalSec/60); // converts the total length to minutes

    const [timeLeft, setTimeLeft] = useState(totalMin); // a state for how much time is left in the song playlist

    // gets how much time is left based on the position of the current song and playlist
    const getTimeLeft = () => {
        // used https://github.com/goldfire/howler.js#documentation to understand what seek does
        if (isPlaying) {
            let secInCurrentSong = (songList[currentSongIndex].length) - (players[currentSongIndex].sound).seek();
            let secInRest = 0;
            for (let i = currentSongIndex + 1; i < songList.length; i++) {
                secInRest += songList[i].length;
            };
            setTimeLeft(Math.ceil((secInCurrentSong + secInRest)/60));
        }
    };

    // hook to set up timer to update every second
    useEffect( () => {
        getTimeLeft(); // updates when you click a button so there isn't the delay of a second which comes with interval
        const interval = setInterval(getTimeLeft, 1000);
        return () => clearInterval(interval);
    }, [currentSongIndex, isPlaying]);


    // HANDLING USER INPUTS

    // pauses the music when shows confirmation pop-up when the user tries to exit the activity early
    const handleButtonClick = () => {
        players[currentSongIndex].pause();
        props.showConfirmPopup();
    };

    return (
        <div className="song-player">
            <h2 className="time-left">{timeLeft} min left</h2>
            <div className="playlist-view playlist-container">

                {currentSongIndex > 0 ?
                    <div className="song-card">
                        <div className="song-visual"></div>
                        <div className="song-text-info">
                            <p className="song-title">{songList[currentSongIndex - 1].title}</p>
                            <p className="artist-name">{songList[currentSongIndex - 1].artist}</p>
                        </div>
                    </div>
                    : <div className="song-card-hidden"></div>
                }

                <div className="song-card current">
                    <div className="song-visual"></div>
                    <div className="song-text-info">
                        <p className="song-title">{songList[currentSongIndex].title}</p>
                        <p className="artist-name">{songList[currentSongIndex].artist}</p>
                    </div>
                </div>

                {currentSongIndex < 4 ?
                    <div className="song-card">
                        <div className="song-visual"></div>
                        <div className="song-text-info">
                            <p className="song-title">{songList[currentSongIndex + 1].title}</p>
                            <p className="artist-name">{songList[currentSongIndex + 1].artist}</p>
                        </div>
                    </div>
                    : <div className="song-card-hidden"></div>
                }

            </div>
            <div className="play-controls">
                <motion.button className="song-control-button" id="backSkip" whileTap={{ scale : [1, 1.2, 1] }} onClick={back}>
                    <img src="icons/BackSkip.svg" alt="back skip icon"/>
                </motion.button>
                <motion.button className="song-control-button" id="playPause" whileTap={{ scale : [1, 1.2, 1] }} onClick={playPause}>
                    {playPauseButton}
                </motion.button>
                <motion.button className="song-control-button" id="forwardSkip" whileTap={{ scale : [1, 1.2, 1] }} onClick={forward}>
                    <img src="icons/ForwardSkip.svg" alt="forward skip icon"/>
                </motion.button>
            </div>
            <div className="button-group">
                <motion.button className="button no-fill button-text dark-text" whileHover={{ scale: [1,1.1] }} onClick={handleButtonClick}>End activity early</motion.button>
            </div>
            <ConfirmExitPopup onNextPage={props.onNextPage} completePage="groove-complete" song={players[currentSongIndex]}/>
        </div>
    );
}

export default SongPlayer;