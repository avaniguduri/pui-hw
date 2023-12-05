import React, { Component } from "react";
import TopBar from "../top-bar";
import './index.css';
import { motion } from "framer-motion";

function WhichBlockPage(props) {
    
    const handleButtonClick = () => {
        props.onNextPage("groove-info");
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
                        <motion.button className="button no-fill tall button-text dark-text" whileHover="animate" variants={variants} transition="transition" onClick={handleButtonClick}>I’m not interested in a specific project anymore</motion.button>
                        <motion.button className="button no-fill tall button-text dark-text" whileHover="animate" variants={variants} transition="transition" onClick={handleButtonClick}>I just don’t feel motivated to write today</motion.button>
                        <motion.button className="button no-fill tall button-text dark-text" whileHover="animate" variants={variants} transition="transition" onClick={handleButtonClick}>I don’t know how to start or to write what I want to say</motion.button>
                    </div>
            </div>
        </div>
    );
}

export default WhichBlockPage;