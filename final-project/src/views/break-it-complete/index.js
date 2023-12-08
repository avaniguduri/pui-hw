import React, { Component } from "react";
import TopBar from "../top-bar";
import { motion } from "framer-motion";

function BreakItDownCompletePage(props) {
    
    const handleAgainButtonClick = () => {
        props.onNextPage("break-it-info");
    };

    const handleHomeButtonClick = () => {
        props.onNextPage("home");
    };

    const handleSaveButtonClick = () => {
        props.onNextPage("home");
    };
    
    return (
        <div className="page-with-topbar">
            <TopBar showBackArrow="false" pageTitle="BREAK IT DOWN" onNextPage={props.onNextPage} lastPage="break-it-activity"/>
            <div className="sized-page">
                <h2>Got a scene going? Keep on writing.</h2>
                <img className="centered-image" src="BrokenBlock.svg" alt="block in exploded pieces on line in sketchy style"/>
                <div className="button-group">
                    <motion.button className="button no-fill button-text dark-text" whileHover={{ scale: [1,1.1] }} onClick={handleSaveButtonClick}>Save activity</motion.button>
                    <div className="button-pair">
                        <motion.button className="button no-fill button-text dark-text" whileHover={{ scale: [1,1.1] }} onClick={handleHomeButtonClick}>Go to home</motion.button>
                        <motion.button className="button black-fill button-text white-text" whileHover={{ scale: [1,1.1] }} onClick={handleAgainButtonClick}>Try again</motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BreakItDownCompletePage;