import React, { Component } from "react";
import TopBar from "../top-bar";
import './index.css';
import { motion } from "framer-motion";

function GrooveCompletePage(props) {
    
    const handleAgainButtonClick = () => {
        props.onNextPage("groove-info");
    };

    const handleHomeButtonClick = () => {
        props.onNextPage("home");
    };

    const handleSaveButtonClick = () => {
        props.saveActivity("Back Into The Groove");
        props.onNextPage("home");
    };
    
    return (
        <div className="page-with-topbar">
            <TopBar showBackArrow="false" pageTitle="THE GROOVE" onNextPage={props.onNextPage} lastPage="groove-activity"/>
            <div className="sized-page">
                <h2>Gotten into the right headspace yet? It’s time to start writing.</h2>
                <img className="centered-image" src="drawings/BrokenBlock.svg" alt="block in exploded pieces on line in sketchy style"/>
                <div className="button-group">
                    <motion.button className="button no-fill button-text dark-text" whileHover={{ scale: [1,1.1] }} onClick={handleSaveButtonClick}>Log activity</motion.button>
                    <div className="button-pair">
                        <motion.button className="button no-fill button-text dark-text" whileHover={{ scale: [1,1.1] }} onClick={handleHomeButtonClick}>Go to home</motion.button>
                        <motion.button className="button black-fill button-text white-text" whileHover={{ scale: [1,1.1] }} onClick={handleAgainButtonClick}>Try again</motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GrooveCompletePage;