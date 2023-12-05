import React, { Component } from "react";
import TopBar from "../top-bar";
import './index.css';
import { motion } from "framer-motion";

function PlaylistPage(props) {

    function Song(title, artist, filePath, length) {
        this.title = title;
        this.artist = artist;
        this.filePath = filePath;
        this.length = length;
    }

    let songList;
    if (props.projectVibe == "spooky") {
        songList = [
            new Song("Inside the Asylum", "GREGOIRE LOURME", "/InsideTheAsylum.mp3", 278),
            new Song("Cros", "HYPNOCRATES", "/Crows.mp3", 256),
            new Song("Cthulhu Rising", "CRYPT OF INSOMNIA", "/CthulhuRising.mp3", 154),
            new Song("Scary Halloween Cinematic Trailer", "ALEX CHE", "/ScaryHalloweenCinematicTrailer.mp3", 147),
            new Song("Scary", "MATTI PAALANEN", "/Scary.mp3", 154),
        ];
    } else if (props.projectVibe == "epic") {
        songList = [
            new Song("Black & White", "ARROW & OLIVE", "/Black&White.mp3", 244),
            new Song("Endless Dreams", "INFRACTION", "/EndlessDreams.mp3", 154),
            new Song("Rise to Glory", "GREGOIRE LOURME", "/RiseToGlory.mp3", 162),
            new Song("The Storm", "INFRACTION", "/TheStorm.mp3", 145),
            new Song("War (Epic Battle Trailer)", "ENERGYSOUND", "/WarEpicBattleTrailer.mp3", 155),
        ];
    }
    else {
        songList = [
            new Song("For Those Whom I've Met", "THE ROOMS", "/ForThoseWhomIveMet.mp3", 194),
            new Song("Find a Way", "THE DLX", "/FindAWay.mp3", 166),
            new Song("Tiptoe", "RIVERS AND LEAFS", "/Tiptoe.mp3", 272),
            new Song("I Say That I Feel Better", "KRISTIAN VULIJAR", "/ISayThatIFeelBetter.mp3", 132),
            new Song("Destruction Mill", "ACOUSTIC ASTRONAUT", "/DestructionMill.mp3", 223),
        ];
    }

    const handleButtonClick = () => {
        props.onNextPage("groove-activity");
    };

    const getPlaylistLength = (songList) => {
        let length = 0;
        for (let i = 0; i < songList.length; i++) {
            length += songList[i].length;
        }
        return Math.ceil(length/60);
    }
    
    return (
        <div className="page-with-topbar">
            <TopBar showBackArrow="true" pageTitle="THE GROOVE" onNextPage={props.onNextPage} lastPage="project-vibe"/>
            <div className="sized-page">
                <h2>Let's put on some music.</h2>
                <div className="playlist-view">
                    <div className="song-card">
                        <div className="song-visual"></div>
                        <div className="song-text-info">
                            <p className="song-title">{songList[0].title}</p>
                            <p className="artist-name">{songList[0].artist}</p>
                        </div>
                    </div>
                    <div className="song-card">
                        <div className="song-visual"></div>
                        <div className="song-text-info">
                            <p className="song-title">{songList[1].title}</p>
                            <p className="artist-name">{songList[1].artist}</p>
                        </div>
                    </div>
                    <div className="song-card">
                        <div className="song-visual"></div>
                        <div className="song-text-info">
                            <p className="song-title">{songList[2].title}</p>
                            <p className="artist-name">{songList[2].artist}</p>
                        </div>
                    </div>
                    <div className="song-card">
                        <div className="song-visual"></div>
                        <div className="song-text-info">
                            <p className="song-title">{songList[3].title}</p>
                            <p className="artist-name">{songList[3].artist}</p>
                        </div>
                    </div>
                    <div className="song-card">
                        <div className="song-visual"></div>
                        <div className="song-text-info">
                            <p className="song-title">{songList[4].title}</p>
                            <p className="artist-name">{songList[4].artist}</p>
                        </div>
                    </div>
                </div>
                <h2 className="playlistLength">{getPlaylistLength(songList)} min</h2>
                <p className="description">Choose to read through past writing, look at relevant notes/sketches, or close your head to imagine your story as the songs play.</p>
                <div className="button-group">
                    <motion.button className="button black-fill button-text white-text" whileHover={{ scale: [1,1.1] }} onClick={handleButtonClick}>Start playlist</motion.button>
                </div>
            </div>
        </div>
    );
}

export default PlaylistPage;