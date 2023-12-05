import React, { Component } from "react";
import TopBar from "../top-bar";
import './index.css';
import { motion } from "framer-motion";

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
                <div className="button-group">
                    <motion.button className="button black-fill button-text white-text" whileHover={{ scale: [1,1.1] }} onClick={handleButtonClick}>Let's go</motion.button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;