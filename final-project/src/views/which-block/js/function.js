import React from "react";
import TopBar from "../../top-bar/js/function.js";
import '../css/style.css';
import { motion } from "framer-motion";

// a component for the page that asks what type of writer's block
function WhichBlockPage(props) {
    
    // functions that change the page state to the correct one based on which button the user chooses
    const handleButtonClickInterest = () => {
        props.onNextPage("groove-info");
    };

    const handleButtonClickMotivation = () => {
        props.onNextPage("sprint-info");
    };

    const handleButtonClickContent = () => {
        props.onNextPage("break-it-info");
    };

    // color variants of the buttons for animation
    // learned about variants from here: https://www.framer.com/motion/animation/
    const variants = {
        initial: {
        backgroundColor: '#FFFFFF',
        },
        animate: {
        backgroundColor: '#ABB3FF',
        },
    };
    
    return (
        <div className="page-with-topbar">
            <TopBar showBackArrow="true" pageTitle="" onNextPage={props.onNextPage} lastPage="new-activity"/>
            <div className="sized-page">
                    <h2>What's blocking you today?</h2>
                    <div className="tall-button-group">
                        <motion.button className="button no-fill tall button-text dark-text" whileHover="animate" variants={variants} onClick={handleButtonClickInterest}>I’m not interested in a specific project anymore</motion.button>
                        <motion.button className="button no-fill tall button-text dark-text" whileHover="animate" variants={variants} onClick={handleButtonClickMotivation}>I just don’t feel motivated to write today</motion.button>
                        <motion.button className="button no-fill tall button-text dark-text" whileHover="animate" variants={variants} onClick={handleButtonClickContent}>I don’t know how to start or to write what I want to say</motion.button>
                    </div>
            </div>
        </div>
    );
}

export default WhichBlockPage;