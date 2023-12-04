import React, { Component } from "react";
import TopBar from "../top-bar";

function ProjectVibePage(props) {
    
    const handleButtonClick = () => {
        props.getProjectVibe(document.getElementById("vibe-options").value);
        props.onNextPage("playlist");
    };
    
    return (
        <div className="page-with-topbar">
            <TopBar showBackArrow="true" pageTitle="THE GROOVE" onNextPage={props.onNextPage} lastPage="groove-info"/>
            <div className="sized-page">
                <div className="prompt-question">
                    <h2>What’s the mood or vibe of your project?</h2>
                </div>
                <select id="vibe-options">
                    <option value="spooky">Spooky</option>
                    <option value="epic">Epic</option>
                    <option value="Melancholic">Melancholic</option>
                </select>
                <div className="button black-fill">
                    <button className="button-text white-text" onClick={handleButtonClick}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default ProjectVibePage;