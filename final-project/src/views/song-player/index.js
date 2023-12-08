import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import './index.css';
import { motion } from "framer-motion";

function SongPlayer(props) {

    function Song(title, artist, filePath, length) {
        this.title = title;
        this.artist = artist;
        this.filePath = filePath;
        this.length = length;
    }

    let songList;
    if (props.projectVibe == "spooky") {
        songList = [
            new Song("Inside the Asylum", "GREGOIRE LOURME", "InsideTheAsylum.mp3", 278),
            new Song("Cros", "HYPNOCRATES", "Crows.mp3", 256),
            new Song("Cthulhu Rising", "CRYPT OF INSOMNIA", "CthulhuRising.mp3", 154),
            new Song("Scary Halloween Cinematic Trailer", "ALEX CHE", "ScaryHalloweenCinematicTrailer.mp3", 147),
            new Song("Scary", "MATTI PAALANEN", "Scary.mp3", 154),
        ];
    } else if (props.projectVibe == "epic") {
        songList = [
            new Song("Black & White", "ARROW & OLIVE", "Black&White.mp3", 244),
            new Song("Endless Dreams", "INFRACTION", "EndlessDreams.mp3", 154),
            new Song("Rise to Glory", "GREGOIRE LOURME", "RiseToGlory.mp3", 162),
            new Song("The Storm", "INFRACTION", "TheStorm.mp3", 145),
            new Song("War (Epic Battle Trailer)", "ENERGYSOUND", "WarEpicBattleTrailer.mp3", 155),
        ];
    }
    else {
        songList = [
            new Song("For Those Whom I've Met", "THE ROOMS", "ForThoseWhomIveMet.mp3", 194),
            new Song("Find a Way", "THE DLX", "FindAWay.mp3", 166),
            new Song("Tiptoe", "RIVERS AND LEAFS", "Tiptoe.mp3", 272),
            new Song("I Say That I Feel Better", "KRISTIAN VULIJAR", "ISayThatIFeelBetter.mp3", 132),
            new Song("Destruction Mill", "ACOUSTIC ASTRONAUT", "DestructionMill.mp3", 223),
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
    const onLastSongEnd = () => {props.onNextPage("groove-complete"); };

    const [isPlaying, setIsPlaying] = useState(false);
    const [play0, options0] = useSound(songList[0].filePath, {onend: onSongEnd});
    const [play1, options1] = useSound(songList[1].filePath, {onend: onSongEnd});
    const [play2, options2] = useSound(songList[2].filePath, {onend: onSongEnd});
    const [play3, options3] = useSound(songList[3].filePath, {onend: onSongEnd});
    const [play4, options4] = useSound(songList[4].filePath, {onend: onLastSongEnd});

    const players = [
        {play: play0, pause: options0.pause, stop: options0.stop, sound : options0.sound},
        {play: play1, pause: options1.pause, stop: options1.stop, sound : options1.sound},
        {play: play2, pause: options2.pause, stop: options2.stop, sound : options2.sound},
        {play: play3, pause: options3.pause, stop: options3.stop, sound : options3.sound},
        {play: play4, pause: options4.pause, stop: options4.stop, sound : options4.sound}
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
        playPauseButton = <img id="pause" src="song-player-buttons/Pause.svg" alt="pause icon"/>;
    } else {
        playPauseButton = <img id="play" src="song-player-buttons/Play.svg" alt="play icon"/>;
    }

    const handleButtonClick = () => {
        players[currentSongIndex].stop();
        props.onNextPage("groove-complete");
    };

    let totalSec = songList.map((song) => song.length).reduce((totalLength, songLength) => totalLength + songLength, 0);
    const totalMin = Math.ceil(totalSec/60);

    const [timeLeft, setTimeLeft] = useState(totalMin);

    const getTimeLeft = () => {
        // used to https://github.com/goldfire/howler.js#documentation to understand what seek does (how to get the current time position of the song)
        if (isPlaying) {
            let secInCurrentSong = (songList[currentSongIndex].length) - (players[currentSongIndex].sound).seek();
            let secInRest = 0;
            for (let i = currentSongIndex + 1; i < songList.length; i++) {
                secInRest += songList[i].length;
            };
            setTimeLeft(Math.ceil((secInCurrentSong + secInRest)/60));
        }
    };

    useEffect( () => {
        getTimeLeft(); // updates when you click a button so there isn't the delay of a second which comes with interval
        const interval = setInterval(getTimeLeft, 1000);
        return () => clearInterval(interval);
    }, [currentSongIndex, isPlaying]);

    return (
        <div className="song-player">
            <h2 className="time-left">{timeLeft} min left</h2>
            <div className="playlist-view playlist-container">

                {currentSongIndex > 0 &&
                    <div className="song-card">
                        <div className="song-visual"></div>
                        <div className="song-text-info">
                            <p className="song-title">{songList[currentSongIndex - 1].title}</p>
                            <p className="artist-name">{songList[currentSongIndex - 1].artist}</p>
                        </div>
                    </div>
                }

                <div className="song-card current">
                    <div className="song-visual"></div>
                    <div className="song-text-info">
                        <p className="song-title">{songList[currentSongIndex].title}</p>
                        <p className="artist-name">{songList[currentSongIndex].artist}</p>
                    </div>
                </div>

                {currentSongIndex < 4 &&
                    <div className="song-card">
                        <div className="song-visual"></div>
                        <div className="song-text-info">
                            <p className="song-title">{songList[currentSongIndex + 1].title}</p>
                            <p className="artist-name">{songList[currentSongIndex + 1].artist}</p>
                        </div>
                    </div>
                }

            </div>
            <div className="play-controls">
                <motion.button className="song-control-button" whileTap={{ scale : [1, 1.2, 1] }} onClick={back}>
                    <img src="song-player-buttons/BackSkip.svg" alt="back skip icon"/>
                </motion.button>
                <motion.button className="song-control-button" whileTap={{ scale : [1, 1.2, 1] }} onClick={playPause}>
                    {playPauseButton}
                </motion.button>
                <motion.button className="song-control-button" id="forwardSkip" whileTap={{ scale : [1, 1.2, 1] }} onClick={forward}>
                    <img src="song-player-buttons/ForwardSkip.svg" alt="forward skip icon"/>
                </motion.button>
            </div>
            <div className="button-group">
                <motion.button className="button no-fill button-text dark-text" whileHover={{ scale: [1,1.1] }} onClick={handleButtonClick}>End activity early</motion.button>
            </div>
        </div>
    );
}

export default SongPlayer;