import React from "react";
import TopBar from "../top-bar";
import './index.css';
import { motion } from "framer-motion";

function WhichBlockPage(props) {
    
    const handleButtonClickInterest = () => {
        props.onNextPage("groove-info");
    };

    const handleButtonClickMotivation = () => {
        props.onNextPage("sprint-info");
    };

    const handleButtonClickContent = () => {
        props.onNextPage("break-it-info");
    };

    const variants = {
        initial: {
        backgroundColor: '#FFFFFF',
        },
        animate: {
        backgroundColor: '#ABB3FF',
        },
    };

    const transition = {duration: 2};
    
    return (
        <div className="page-with-topbar">
            <TopBar showBackArrow="true" pageTitle="" onNextPage={props.onNextPage} lastPage="new-activity"/>
            <div className="sized-page">
                    <h2>What's blocking you today?</h2>
                    <div className="tall-button-group">
                        <motion.button className="button no-fill tall button-text dark-text" whileHover="animate" variants={variants} transition="transition" onClick={handleButtonClickInterest}>I’m not interested in a specific project anymore</motion.button>
                        <motion.button className="button no-fill tall button-text dark-text" whileHover="animate" variants={variants} transition="transition" onClick={handleButtonClickMotivation}>I just don’t feel motivated to write today</motion.button>
                        <motion.button className="button no-fill tall button-text dark-text" whileHover="animate" variants={variants} transition="transition" onClick={handleButtonClickContent}>I don’t know how to start or to write what I want to say</motion.button>
                    </div>
            </div>
        </div>
    );
}

export default WhichBlockPage;