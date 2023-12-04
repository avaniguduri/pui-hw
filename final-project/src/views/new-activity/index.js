import React, { Component } from "react";
import TopBar from "../top-bar";

function NewActivityPage(props) {
    
    const handleButtonClick = () => {
        props.onNextPage("which-block");
    };
    
    return (
        <div className="page-with-topbar">
            <TopBar showBackArrow="true" pageTitle="" onNextPage={props.onNextPage} lastPage="home"/>
            <div className="sized-page">
                <h2>"The first draft is just you telling yourself the story"</h2>
                <img className="centered-image" src="BreakingBlock.svg" alt="block in pieces on line in sketchy style"/>
                <button className="button black-fill button-text white-text" onClick={handleButtonClick}>Find a new activity</button>
            </div>
        </div>
    );
}

export default NewActivityPage;