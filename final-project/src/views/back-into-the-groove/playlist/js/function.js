import React from "react";
import TopBar from "../../../top-bar/js/function.js";
import '../css/style.css';
import { motion } from "framer-motion";

// component for the page that displays the playlist before the groove activity starts
function PlaylistPage(props) {

    // goes to the activity page when the user clicks start
    const handleButtonClick = () => {
        props.onNextPage("groove-activity");
    };

    // list of songs created based on the project vibe
    const songList = props.createSongList();

    // gets the total length of the playlist in minutes
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