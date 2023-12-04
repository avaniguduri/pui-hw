import React, { Component } from "react";
import TopBar from "../top-bar";

function GrooveInfoPage(props) {
    
    const handleButtonClick = () => {
        props.onNextPage("project-vibe");
    };
    
    return (
        <div className="page-with-topbar">
            <TopBar showBackArrow="true" pageTitle="THE GROOVE" onNextPage={props.onNextPage} lastPage="which-block"/>
            <div className="sized-page">
                <h3 className="activity-title">Back into the Groove</h3>
                <p className="activity-time">10-30 min</p>
                <div className="prompt-question">
                    <h2>Listen to a playlist. Songs match the mood of your project in order to help you get back into the headspace of your project.</h2>
                </div>
                <p className="activity-subdescription">Choose to read through past writing, look at relevant notes/sketches, or close your head to imagine your story as the songs play.</p>
                <div className="button black-fill">
                    <button className="button-text white-text" onClick={handleButtonClick}>Start</button>
                </div>
            </div>
        </div>
    );
}

export default GrooveInfoPage;