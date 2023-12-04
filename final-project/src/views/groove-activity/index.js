import React, { Component } from "react";
import TopBar from "../top-bar";
import SongPlayer from "../song-player"

function GrooveActivityPage(props) {
    
    const handleButtonClick = () => {
        props.onNextPage("groove-complete");
    };
    
    return (
        <div className="page-with-topbar">
            <TopBar showBackArrow="false" pageTitle="THE GROOVE" onNextPage={props.onNextPage} lastPage="playlist"/>
            <div className="sized-page">
                <h3 className="activity-title">13 min left</h3>
                <SongPlayer projectVibe={props.projectVibe} onNextPage={props.onNextPage}/>
                <div className="button no-fill">
                <button className="button-text dark-text" onClick={handleButtonClick}>End activity early</button>
                </div>
            </div>
        </div>
    );
}

export default GrooveActivityPage;