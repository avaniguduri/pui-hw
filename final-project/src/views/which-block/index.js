import React, { Component } from "react";
import TopBar from "../top-bar";

function WhichBlockPage(props) {
    
    const handleButtonClick = () => {
        props.onNextPage("groove-info");
    };
    
    return (
        <div className="page-with-topbar">
            <TopBar showBackArrow="true" pageTitle="" onNextPage={props.onNextPage} lastPage="new-activity"/>
            <div className="sized-page">
                <div className="prompt-question">
                    <h2>What's blocking you today?</h2>
                </div>
                <div className="button no-fill tall">
                    <button className="button-text dark-text" onClick={handleButtonClick}>I’m not interested in a specific project anymore</button>
                </div>
                <div className="button no-fill tall">
                    <button className="button-text dark-text" onClick={handleButtonClick}>I just don’t feel motivated to write today</button>
                </div>
                <div className="button no-fill tall">
                    <button className="button-text dark-text" onClick={handleButtonClick}>I don’t know how to start or to write what I want to say</button>
                </div>
            </div>
        </div>
    );
}

export default WhichBlockPage;