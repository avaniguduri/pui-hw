import React from "react";
import TopBar from "../../../top-bar/js/function.js";
import { motion } from "framer-motion";

// component for the page with info about the groove activity
function GrooveInfoPage(props) {
    
    // goes to the page asking about the vibe of the project when the users clicks start
    const handleButtonClick = () => {
        props.onNextPage("project-vibe");
    };
    
    return (
        <div className="page-with-topbar">
            <TopBar showBackArrow="true" pageTitle="THE GROOVE" onNextPage={props.onNextPage} lastPage="which-block"/>
            <div className="sized-page">
                <h1>Back into the Groove</h1>
                <h3>10-30 min</h3>
                <div className="instructions">
                    <h2 className="purple-text bold-text">Listen to a playlist.</h2>
                    <h2>Songs match the mood of your project in order to help you get back into the headspace of your project.</h2>
                </div>
                <p className="activity-subdescription">Choose to read through past writing, look at relevant notes/sketches, or close your eyes to imagine your story as the songs play.</p>
                <div className="button-group">
                    <motion.button className="button black-fill button-text white-text" whileHover={{ scale: [1,1.1] }} onClick={handleButtonClick}>Start</motion.button>
                </div>
            </div>
        </div>
    );
}

export default GrooveInfoPage;