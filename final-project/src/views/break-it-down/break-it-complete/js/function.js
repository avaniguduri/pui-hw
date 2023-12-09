import React from "react";
import TopBar from "../../../top-bar/js/function.js";
import { motion } from "framer-motion";

// component for page for when the break it down activity is completed
function BreakItDownCompletePage(props) {

    // goes to the activity info page when the user wants to go again
    const handleAgainButtonClick = () => {
        props.onNextPage("break-it-info");
    };

    // goes to the home page when the users clicks home
    const handleHomeButtonClick = () => {
        props.onNextPage("home");
    };

    // saves the activity locally when the user clicks save and then goes to home page
    const handleSaveButtonClick = () => {
        props.saveActivity("Break It Down");
        props.onNextPage("home");
    };
    
    return (
        <div className="page-with-topbar">
            <TopBar showBackArrow="false" pageTitle="BREAK IT DOWN" onNextPage={props.onNextPage} lastPage="break-it-activity"/>
            <div className="sized-page">
                <h2>Got a scene going? Keep on writing.</h2>
                <img className="centered-image" src="drawings/BrokenBlock.svg" alt="block in exploded pieces on line in sketch style"/>
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

export default BreakItDownCompletePage;