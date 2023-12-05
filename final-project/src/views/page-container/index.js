import React, { Component, useState } from 'react';
import HomePage from "../home";
import NewActivityPage from "../new-activity";
import WhichBlockPage from "../which-block";
import GrooveInfoPage from "../groove-info";
import ProjectVibePage from "../project-vibe";
import PlaylistPage from "../playlist";
import GrooveActivityPage from "../groove-activity";
import GrooveCompletePage from "../groove-complete";
import './index.css';
import { motion } from "framer-motion";


function PageContainer() {
    const [currentPage, setCurrentPage] = useState("home");
    const handleClick = (nextPage) => {
        setCurrentPage(nextPage);
    };

    const [projectVibe, setProjectVibe] = useState("none");

    const changeProjectVibe = (vibe) => {
        setProjectVibe(vibe);
    }

    return (
        <div>
            {currentPage === "home" && (<HomePage onNextPage={handleClick}/>)}
            {currentPage === "new-activity" && (<NewActivityPage onNextPage={handleClick}/>)}
            {currentPage === "which-block" && (<WhichBlockPage onNextPage={handleClick}/>)}
            {currentPage === "groove-info" && (<GrooveInfoPage onNextPage={handleClick}/>)}
            {currentPage === "project-vibe" && (<ProjectVibePage onNextPage={handleClick} getProjectVibe={changeProjectVibe}/>)}
            {currentPage === "playlist" && (<PlaylistPage onNextPage={handleClick} projectVibe={projectVibe}/>)}
            {currentPage === "groove-activity" && (<GrooveActivityPage onNextPage={handleClick} projectVibe={projectVibe}/>)}
            {currentPage === "groove-complete" && (<GrooveCompletePage onNextPage={handleClick}/>)}
        </div>
    );

}

export default PageContainer;