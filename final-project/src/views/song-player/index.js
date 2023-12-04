import React, { useState, useEffect } from "react";
import useSound from "use-sound";

function SongPlayer(props) {

    function Song(title, artist, color, filePath) {
        this.title = title;
        this.artist = artist;
        this.color = color;
        this.filePath = filePath;
    }

    let songList;
    if (props.projectVibe == "spooky") {
        songList = [
            new Song("Black & White", "ARROW & OLIVE", "gray", "/Black&White.mp3"),
            new Song("Endless Dreams", "INFRACTION", "green", "/EndlessDreams.mp3"),
            new Song("Rise to Glory", "GREGOIRE LOURME", "yellow", "/RiseToGlory.mp3"),
            new Song("The Storm", "INFRACTION", "blue", "/TheStorm.mp3"),
            new Song("War (Epic Battle Trailer)", "ENERGYSOUND", "red", "/WarEpicBattleTrailer.mp3"),
        ];
    } else if (props.projectVibe == "epic") {
        songList = [
            new Song("Black & White", "ARROW & OLIVE", "gray", "/Black&White.mp3"),
            new Song("Endless Dreams", "INFRACTION", "green", "/EndlessDreams.mp3"),
            new Song("Rise to Glory", "GREGOIRE LOURME", "yellow", "/RiseToGlory.mp3"),
            new Song("The Storm", "INFRACTION", "blue", "/TheStorm.mp3"),
            new Song("War (Epic Battle Trailer)", "ENERGYSOUND", "red", "/WarEpicBattleTrailer.mp3"),
        ];
    }
    else {
        songList = [
            new Song("Black & White", "ARROW & OLIVE", "gray", "/Black&White.mp3"),
            new Song("Endless Dreams", "INFRACTION", "green", "/EndlessDreams.mp3"),
            new Song("Rise to Glory", "GREGOIRE LOURME", "yellow", "/RiseToGlory.mp3"),
            new Song("The Storm", "INFRACTION", "blue", "/TheStorm.mp3"),
            new Song("War (Epic Battle Trailer)", "ENERGYSOUND", "red", "/WarEpicBattleTrailer.mp3"),
        ];
    }

    
    const [isPlaying0, setIsPlaying0] = useState(false);
    const [isPlaying1, setIsPlaying1] = useState(false);
    const [isPlaying2, setIsPlaying2] = useState(false);
    const [isPlaying3, setIsPlaying3] = useState(false);
    const [isPlaying4, setIsPlaying4] = useState(false);

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [currentSongPath, setCurrentSongPath] = useState((songList[currentSongIndex]).filePath);

    const [play, {pause, stop}] = useSound(currentSongPath);

    const togglePlayButton0 = () => {
        if (isPlaying0) {
            stop();
            setIsPlaying0(false);
        } else {
            play();
            setIsPlaying0(true);
        }
    }

    const togglePlayButton1 = () => {
        if (isPlaying1) {
            stop();
            setIsPlaying1(false);
        } else {
            play();
            setIsPlaying1(true);
        }
    }

    const togglePlayButton2 = () => {
        if (isPlaying2) {
            stop();
            setIsPlaying2(false);
        } else {
            play();
            setIsPlaying2(true);
        }
    }

    const togglePlayButton3 = () => {
        if (isPlaying3) {
            stop();
            setIsPlaying3(false);
        } else {
            play();
            setIsPlaying3(true);
        }
    }

    const togglePlayButton4 = () => {
        if (isPlaying4) {
            stop();
            setIsPlaying4(false);
        } else {
            play();
            setIsPlaying4(true);
        }
    }

    const clickBackSkip = () => {
        const isPlaying = isPlaying0 || isPlaying1 || isPlaying2 || isPlaying3 || isPlaying4;
        if (isPlaying) {
            stop();
        }
        if (currentSongIndex > 0) {
            setCurrentSongIndex(currentSongIndex - 1);
            setCurrentSongPath(songList[currentSongIndex].filePath);
            if (isPlaying) {
                play();
            }
        }
    }

    const clickForwardSkip = () => {
        
        const isPlaying = isPlaying0 || isPlaying1 || isPlaying2 || isPlaying3 || isPlaying4;

        if (isPlaying0) {
            stop();
            setIsPlaying0(false);

        }
        if (isPlaying1) {
            stop();
            setIsPlaying1(false);
        }
        if (isPlaying2) {
            stop();
            setIsPlaying2(false);
        }
        if (isPlaying3) {
            stop();
            setIsPlaying3(false);
        }
        if (isPlaying4) {
            stop();
            setIsPlaying4(false);
        }
        
        if (currentSongIndex < 5) {
            setCurrentSongIndex(currentSongIndex + 1);
            setCurrentSongPath(songList[currentSongIndex].filePath);
            if (isPlaying) {
                if (currentSongIndex == 0) {
                    setIsPlaying0(true)
                } else if (currentSongIndex == 1) {
                    setIsPlaying1(true)
                } else if (currentSongIndex == 2) {
                    setIsPlaying2(true)
                } else if (currentSongIndex == 3) {
                    setIsPlaying3(true)
                } else if (currentSongIndex == 4) {
                    setIsPlaying4(true)
                }
                play();
            }
            console.log("forward clicked", currentSongIndex);
        }
    }

    let playPauseButton;
    if (currentSongIndex == 0) {
        if (isPlaying0) {
            playPauseButton = <button className="song-control-button" onClick={togglePlayButton0}><img className="icon" id="pause0" src="song-player-buttons/Pause.svg" alt="pause icon"/></button>
        } else {
            playPauseButton = <button className="song-control-button" onClick={togglePlayButton0}><img className="icon" id="play0" src="song-player-buttons/Play.svg" alt="play icon"/></button>
        }
    } else if (currentSongIndex == 1) {
        if (isPlaying1) {
            playPauseButton = <button className="song-control-button" onClick={togglePlayButton1}><img className="icon" id="pause1" src="song-player-buttons/Pause.svg" alt="pause icon"/></button>
        } else {
            playPauseButton = <button className="song-control-button" onClick={togglePlayButton1}><img className="icon" id="play1" src="song-player-buttons/Play.svg" alt="play icon"/></button>
        }
    } else if (currentSongIndex == 2) {
        if (isPlaying2) {
            playPauseButton = <button className="song-control-button" onClick={togglePlayButton2}><img className="icon" id="pause2" src="song-player-buttons/Pause.svg" alt="pause icon"/></button>
        } else {
            playPauseButton = <button className="song-control-button" onClick={togglePlayButton2}><img className="icon" id="play2" src="song-player-buttons/Play.svg" alt="play icon"/></button>
        }
    } else if (currentSongIndex == 3) {
        if (isPlaying3) {
            playPauseButton = <button className="song-control-button" onClick={togglePlayButton3}><img className="icon" id="pause3" src="song-player-buttons/Pause.svg" alt="pause icon"/></button>
        } else {
            playPauseButton = <button className="song-control-button" onClick={togglePlayButton3}><img className="icon" id="play3" src="song-player-buttons/Play.svg" alt="play icon"/></button>
        }
    } else if (currentSongIndex == 4) {
        if (isPlaying4) {
            playPauseButton = <button className="song-control-button" onClick={togglePlayButton4}><img className="icon" id="pause4" src="song-player-buttons/Pause.svg" alt="pause icon"/></button>
        } else {
            playPauseButton = <button className="song-control-button" onClick={togglePlayButton4}><img className="icon" id="play4" src="song-player-buttons/Play.svg" alt="play icon"/></button>
        }
    }

    return (
        <div className="song-player">
            <div className="playlist-container">
                <div className="song-card">
                    <div className="song-visual"></div>
                    <p className="song-title">Black & White</p>
                    <p className="artist-name">Artist</p>
                </div>
                <div className="song-card">
                    <div className="song-visual"></div>
                    <p className="song-title">Epic Dreams</p>
                    <p className="artist-name">Artist</p>
                </div>
                <div className="song-card">
                    <div className="song-visual"></div>
                    <p className="song-title">Rise to Glory</p>
                    <p className="artist-name">Artist</p>
                </div>
            </div>
            <div className="play-controls">
                <button className="song-control-button" onClick={clickBackSkip}>
                    <img className="icon" src="song-player-buttons/BackSkip.svg" alt="back skip icon"/>
                </button>
                {playPauseButton}
                <button className="song-control-button" onClick={clickForwardSkip}>
                    <img className="icon" src="song-player-buttons/ForwardSkip.svg" alt="forward skip icon"/>
                </button>
            </div>
        </div>
    );
}

export default SongPlayer;