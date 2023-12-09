import React, { Component } from "react";
import TopBar from "../top-bar";
import SongPlayer from "../song-player";
import './index.css';

function GrooveActivityPage(props) {
    
    return (
        <div className="page-with-topbar">
            <TopBar showBackArrow="true" pageTitle="THE GROOVE" onNextPage={props.onNextPage} lastPage="playlist"/>
            <div className="sized-page">
                <SongPlayer projectVibe={props.projectVibe} onNextPage={props.onNextPage} showConfirmPopup={props.showConfirmPopup}/>
            </div>
        </div>
    );
}

export default GrooveActivityPage;