import React, { Component } from "react";
import TopBar from "../top-bar";
import './index.css';
import { motion } from "framer-motion";

function ProjectVibePage(props) {
    
    const handleButtonClick = () => {
        props.getProjectVibe(document.getElementById("vibe-options").value);
        props.onNextPage("playlist");
    };
    
    return (
        <div className="page-with-topbar">
            <TopBar showBackArrow="true" pageTitle="THE GROOVE" onNextPage={props.onNextPage} lastPage="groove-info"/>
            <div className="sized-page">
                <h2>What’s the mood or vibe of your project?</h2>
                <select id="vibe-options">
                    <option className="button-text" value="spooky">Spooky</option>
                    <option className="button-text" value="epic">Epic</option>
                    <option className="button-text" value="Melancholic">Melancholic</option>
                </select>
                <div className="button-group">
                    <motion.button className="button black-fill button-text white-text" whileHover={{ scale: [1,1.1] }} onClick={handleButtonClick}>Submit</motion.button>
                </div>
            </div>
        </div>
    );
}

export default ProjectVibePage;