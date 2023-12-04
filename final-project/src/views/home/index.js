import React, { Component } from "react";
import TopBar from "../top-bar";

function HomePage(props) {
    
    const handleButtonClick = () => {
        props.onNextPage("new-activity");
    };
    
    return (
        <div className="page-with-topbar">
            <TopBar showBackArrow="false" pageTitle="" onNextPage={props.onNextPage} lastPage=""/>
            <div className="sized-page">
                <div className="home-title">
                    <h1>Break</h1>
                    <h1>the</h1>
                    <h1>Block.</h1>
                </div>
                <img className="centered-image" src="HomeImage.svg" alt="block on line in sketchy style"/>
                <div className="button black-fill">
                    <button className="button-text white-text" onClick={handleButtonClick}>Let's go</button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;