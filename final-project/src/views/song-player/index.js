import React, { useState, useEffect } from "react";
import useSound from "use-sound";

function SongPlayer(props) {

    function Song(title, artist, filePath) {
        this.title = title;
        this.artist = artist;
        this.filePath = filePath;
    }

    let songList;
    if (props.projectVibe == "spooky") {
        songList = [
            new Song("Inside the Asylum", "GREGOIRE LOURME", "/InsideTheAsylum.mp3"),
            new Song("Cros", "HYPNOCRATES", "/Crows.mp3"),
            new Song("Cthulhu Rising", "CRYPT OF INSOMNIA", "/CthulhuRising.mp3"),
            new Song("Scary Halloween Cinematic Trailer", "ALEX CHE", "/ScaryHalloweenCinematicTrailer.mp3"),
            new Song("Scary", "MATTI PAALANEN", "/Scary.mp3"),
        ];
    } else if (props.projectVibe == "epic") {
        songList = [
            new Song("Black & White", "ARROW & OLIVE", "/Black&White.mp3"),
            new Song("Endless Dreams", "INFRACTION", "/EndlessDreams.mp3"),
            new Song("Rise to Glory", "GREGOIRE LOURME", "/RiseToGlory.mp3"),
            new Song("The Storm", "INFRACTION", "/TheStorm.mp3"),
            new Song("War (Epic Battle Trailer)", "ENERGYSOUND", "/WarEpicBattleTrailer.mp3"),
        ];
    }
    else {
        songList = [
            new Song("For Those Whom I've Met", "THE ROOMS", "/ForThoseWhomIveMet.mp3"),
            new Song("Find a Way", "THE DLX", "/FindAWay.mp3"),
            new Song("Tiptoe", "RIVERS AND LEAFS", "/Tiptoe.mp3"),
            new Song("I Say That I Feel Better", "KRISTIAN VULIJAR", "/ISayThatIFeelBetter.mp3"),
            new Song("Destruction Mill", "ACOUSTIC ASTRONAUT", "/DestructionMill.mp3"),
        ];
    }

    
    const [isPlaying0, setIsPlaying0] = useState(false);
    const [isPlaying1, setIsPlaying1] = useState(false);
    const [isPlaying2, setIsPlaying2] = useState(false);
    const [isPlaying3, setIsPlaying3] = useState(false);
    const [isPlaying4, setIsPlaying4] = useState(false);

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [currentSongPath, setCurrentSongPath] = useState((songList[currentSongIndex]).filePath);

    const [play, {pause, stop}] = useSound(currentSongPath, {
        onend: () => {
            props.onNextPage("groove-complete");
        }
    });

    const togglePlayButton0 = () => {
        if (isPlaying0) {
            pause();
            setIsPlaying0(false);
        } else {
            play();
            setIsPlaying0(true);
        }
    }

    const togglePlayButton1 = () => {
        if (isPlaying1) {
            pause();
            setIsPlaying1(false);
        } else {
            play();
            setIsPlaying1(true);
        }
    }

    const togglePlayButton2 = () => {
        if (isPlaying2) {
            pause();
            setIsPlaying2(false);
        } else {
            play();
            setIsPlaying2(true);
        }
    }

    const togglePlayButton3 = () => {
        if (isPlaying3) {
            pause();
            setIsPlaying3(false);
        } else {
            play();
            setIsPlaying3(true);
        }
    }

    const togglePlayButton4 = () => {
        if (isPlaying4) {
            pause();
            setIsPlaying4(false);
        } else {
            play();
            setIsPlaying4(true);
        }
    }

    const clickBackSkip = () => {
        const isPlaying = isPlaying0 || isPlaying1 || isPlaying2 || isPlaying3 || isPlaying4;
        stop();

        if (isPlaying0) {
            setIsPlaying0(false);

        }
        if (isPlaying1) {
            setIsPlaying1(false);
        }
        if (isPlaying2) {
            setIsPlaying2(false);
        }
        if (isPlaying3) {
            setIsPlaying3(false);
        }
        if (isPlaying4) {
            setIsPlaying4(false);
        }

        if (currentSongIndex > 0) {
            setCurrentSongPath(songList[currentSongIndex - 1].filePath);
            setCurrentSongIndex(currentSongIndex - 1);
        }
    }

    const clickForwardSkip = () => {
        
        const isPlaying = isPlaying0 || isPlaying1 || isPlaying2 || isPlaying3 || isPlaying4;
        stop();

        if (isPlaying0) {
            setIsPlaying0(false);

        }
        if (isPlaying1) {
            setIsPlaying1(false);
        }
        if (isPlaying2) {
            setIsPlaying2(false);
        }
        if (isPlaying3) {
            setIsPlaying3(false);
        }
        if (isPlaying4) {
            setIsPlaying4(false);
        }
        
        if (currentSongIndex < 4) {
            setCurrentSongPath(songList[currentSongIndex + 1].filePath);
            setCurrentSongIndex(currentSongIndex + 1);
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

    let song1;
    if (currentSongIndex > 0) {
        song1 = songList[currentSongIndex-1];
    } else {song1 = null}

    let song2 = songList[currentSongIndex];

    let song3;
    if (currentSongIndex < 4) {
        song3 = songList[currentSongIndex+1];
    } else {song1 = null}


    return (
        <div className="song-player">
            <div className="playlist-container">
                <div className="song-card">
                    <div className="song-visual"></div>
                    {song1 != null && <p className="song-title">{song1.title}</p>}
                    {song1 != null && <p className="artist-name">{song1.artist}</p>}
                    {song1 == null && <p className="song-title"></p>}
                    {song1 == null && <p className="artist-name"></p>}
                </div>
                <div className="song-card">
                    <div className="song-visual"></div>
                    <p className="song-title">{song2.title}</p>
                    <p className="artist-name">{song2.artist}</p>
                </div>
                <div className="song-card">
                    <div className="song-visual"></div>
                    {song3 != null && <p className="song-title">{song3.title}</p>}
                    {song3 != null && <p className="artist-name">{song3.artist}</p>}
                    {song3 == null && <p className="song-title"></p>}
                    {song3 == null && <p className="artist-name"></p>}
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