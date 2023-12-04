import React, { Component } from "react";
import TopBar from "../top-bar";

function PlaylistPage(props) {
    
    const handleButtonClick = () => {
        props.onNextPage("groove-activity");
    };
    
    return (
        <div className="page-with-topbar">
            <TopBar showBackArrow="true" pageTitle="THE GROOVE" onNextPage={props.onNextPage} lastPage="project-vibe"/>
            <div className="sized-page">
                <div className="prompt-question">
                    <h2>Let's put on some music.</h2>
                </div>
                <div className="playlist-view">
                    <div className="song-card">
                        <p className="song-title">Monster Mash</p>
                        <p className="artist-name">Bobby Pickett</p>
                    </div>
                    <div className="song-card">
                        <p className="song-title">Monster Mash</p>
                        <p className="artist-name">Bobby Pickett</p>
                    </div>
                    <div className="song-card">
                        <p className="song-title">Monster Mash</p>
                        <p className="artist-name">Bobby Pickett</p>
                    </div>
                </div>
                <p className="activity-time left">23 min</p>
                <p className="activity-subdescription">Choose to read through past writing, look at relevant notes/sketches, or close your head to imagine your story as the songs play.</p>
                <div className="button black-fill">
                <button className="button-text white-text" onClick={handleButtonClick}>Start playlist</button>
                </div>
            </div>
        </div>
    );
}

export default PlaylistPage;