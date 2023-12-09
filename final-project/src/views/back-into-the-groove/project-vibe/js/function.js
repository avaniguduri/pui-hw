import React from "react";
import TopBar from "../../../top-bar/js/function.js";
import '../css/style.css';
import { motion } from "framer-motion";

// Component for the page where user chooses the vibe of their writing project
function ProjectVibePage(props) {
    
    // goes to the page that shows the playlist when the user clicks next
    const handleButtonClick = () => {
        props.getProjectVibe(document.getElementById("vibe-options").value); // sends the project vibe that the users chose to the parent component
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