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
    
    const [currentSongIndex, setCurrentSongIndex] = useState(0);

    const forward = () => {
        let newIndex = currentSongIndex + 1;
        if (newIndex < 5) setCurrentSongIndex(newIndex);
        updatePlayer(currentSongIndex, newIndex);
    };

    const back = () => {
        let newIndex = currentSongIndex - 1;
        if (newIndex >=  0) setCurrentSongIndex(newIndex);
        updatePlayer(currentSongIndex, newIndex);
    };

    const onSongEnd = () => {document.getElementById("forwardSkip").click(); };
    const onLastSongEnd = () => {props.onNetPage("groove-complete"); };

    const [isPlaying, setIsPlaying] = useState(false);
    const [play0, options0] = useSound(songList[0].filePath, {onend: onSongEnd});
    const [play1, options1] = useSound(songList[1].filePath, {onend: onSongEnd});
    const [play2, options2] = useSound(songList[2].filePath, {onend: onSongEnd});
    const [play3, options3] = useSound(songList[3].filePath, {onend: onSongEnd});
    const [play4, options4] = useSound(songList[4].filePath, {onend: onLastSongEnd});

    const players = [
        {play: play0, pause: options0.pause, stop: options0.stop},
        {play: play1, pause: options1.pause, stop: options1.stop},
        {play: play2, pause: options2.pause, stop: options2.stop},
        {play: play3, pause: options3.pause, stop: options3.stop},
        {play: play4, pause: options4.pause, stop: options4.stop},
    ];

    const updatePlayer = (currentIndex, newIndex) => {
        players[currentIndex].stop();
        if (isPlaying) {
            if (newIndex < 0) players[0].play();
            else if (newIndex < 5) players[newIndex].play();
            else props.onNextPage("groove-complete");
        }
    };

    const playPause = () => {
        setIsPlaying(!isPlaying);
        !isPlaying ? players[currentSongIndex].play() : players[currentSongIndex].pause();
    };

    
    let playPauseButton;
    if (isPlaying) {
        playPauseButton = <img className="icon" id="pause0" src="song-player-buttons/Pause.svg" alt="pause icon"/>
    } else {
        playPauseButton = <img className="icon" id="play0" src="song-player-buttons/Play.svg" alt="play icon"/>
    }

    return (
        <div className="song-player">
            <div className="playlist-container">
                <div className="song-card">
                    {currentSongIndex > 0 && <div className="song-visual"></div>}
                    {currentSongIndex > 0 && <p className="song-title">{songList[currentSongIndex - 1].title}</p>}
                    {currentSongIndex > 0 && <p className="artist-name">{songList[currentSongIndex - 1].artist}</p>}
                </div>
                <div className="song-card">
                    <div className="song-visual"></div>
                    <p className="song-title">{songList[currentSongIndex].title}</p>
                    <p className="artist-name">{songList[currentSongIndex].artist}</p>
                </div>
                <div className="song-card">
                    {currentSongIndex < 4 && <div className="song-visual"></div>}
                    {currentSongIndex < 4 && <p className="song-title">{songList[currentSongIndex + 1].title}</p>}
                    {currentSongIndex < 4 && <p className="artist-name">{songList[currentSongIndex + 1].artist}</p>}
                </div>
            </div>
            <div className="play-controls">
                <button className="song-control-button" id="backSkip" onClick={back}>
                    <img className="icon" src="song-player-buttons/BackSkip.svg" alt="back skip icon"/>
                </button>
                <button className="song-control-button" onClick={playPause}>
                    {playPauseButton}
                </button>
                <button className="song-control-button" id="forwardSkip" onClick={forward}>
                    <img className="icon" src="song-player-buttons/ForwardSkip.svg" alt="forward skip icon"/>
                </button>
            </div>
        </div>
    );
}

export default SongPlayer;