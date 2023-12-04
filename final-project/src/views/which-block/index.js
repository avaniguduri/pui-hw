import React, { Component } from "react";
import TopBar from "../top-bar";
import './index.css';

function WhichBlockPage(props) {
    
    const handleButtonClick = () => {
        props.onNextPage("groove-info");
    };
    
    return (
        <div className="page-with-topbar">
            <TopBar showBackArrow="true" pageTitle="" onNextPage={props.onNextPage} lastPage="new-activity"/>
            <div className="sized-page">
                    <h2>What's blocking you today?</h2>
                    <div className="tall-button-group">
                        <button className="button no-fill tall button-text dark-text" onClick={handleButtonClick}>I’m not interested in a specific project anymore</button>
                        <button className="button no-fill tall button-text dark-text" onClick={handleButtonClick}>I just don’t feel motivated to write today</button>
                        <button className="button no-fill tall button-text dark-text" onClick={handleButtonClick}>I don’t know how to start or to write what I want to say</button>
                    </div>
            </div>
        </div>
    );
}

export default WhichBlockPage;