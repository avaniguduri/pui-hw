import React, { Component } from "react";
import TopBar from "../top-bar";

function GrooveCompletePage(props) {
    
    const handleAgainButtonClick = () => {
        props.onNextPage("groove-info");
    };

    const handleHomeButtonClick = () => {
        props.onNextPage("home");
    };

    const handleSaveButtonClick = () => {
        props.onNextPage("home");
    };
    
    return (
        <div className="page-with-topbar">
            <TopBar showBackArrow="true" pageTitle="THE GROOVE" onNextPage={props.onNextPage} lastPage="groove-activity"/>
            <div className="sized-page">
                <div className="prompt-question">
                    <h2>Gotten into the right headspace yet? It’s time to start writing.</h2>
                </div>
                <img className="centered-image" src="BrokenBlock.svg" alt="block in exploded pieces on line in sketchy style"/>
                <div className="button no-fill">
                <button className="button-text dark-text" onClick={handleSaveButtonClick}>Save activity</button>
                </div>
                <div className="button-pair">
                    <div className="button no-fill">
                    <button className="button-text dark-text" onClick={handleHomeButtonClick}>Go to home</button>
                    </div>
                    <div className="button black-fill">
                        <button className="button-text white-text" onClick={handleAgainButtonClick}>Try again</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GrooveCompletePage;