import React, { Component } from "react";
import TopBar from "../top-bar";
import './index.css';

function HomePage(props) {
    
    const handleButtonClick = () => {
        props.onNextPage("new-activity");
    };
    
    return (
        <div className="page-with-topbar">
            <TopBar showBackArrow="false" pageTitle="" onNextPage={props.onNextPage} lastPage=""/>
            <div className="sized-page">
                <div className="home-title">
                    <p className="project-title">Break<br/>the<br/>Block.</p>
                </div>
                <img className="centered-image" src="HomeImage.svg" alt="block on line in sketchy style"/>
                <button className="button black-fill button-text white-text" onClick={handleButtonClick}>Let's go</button>
            </div>
        </div>
    );
}

export default HomePage;