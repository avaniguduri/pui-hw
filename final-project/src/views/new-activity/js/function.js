import React from "react";
import TopBar from "../../top-bar/js/function.js";
import { motion } from "framer-motion";

// a component for the page where you decide to do a new activity or to view saved activities
function NewActivityPage(props) {
    
    // goes to the what's blocking you page if users clicks on new activity
    const handleFindButtonClick = () => {
        props.onNextPage("which-block");
    };

    // goes to the activity log page if users clicks on activity log
    const handleLogButtonClick = () => {
        props.onNextPage("activity-log");
    };
    
    return (
        <div className="page-with-topbar">
            <TopBar showBackArrow="true" pageTitle="" onNextPage={props.onNextPage} lastPage="home"/>
            <div className="sized-page">
                <h2>"The first draft is just you telling yourself the story"</h2>
                <img className="centered-image" src="drawings/BreakingBlock.svg" alt="block in pieces on line in sketch style"/>
                <div className="button-group">
                    <motion.button id="log-activity-button" className="button no-fill button-text dark-text" whileHover={{ scale: [1,1.1] }} onClick={handleLogButtonClick}>View activity log</motion.button>
                    <motion.button id="new-activity-button" className="button black-fill button-text white-text" whileHover={{ scale: [1,1.1] }} onClick={handleFindButtonClick}>Find a new activity</motion.button>
                </div>
            </div>
        </div>
    );
}

export default NewActivityPage;