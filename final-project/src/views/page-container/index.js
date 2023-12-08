import React, { Component, useState } from 'react';
import HomePage from "../home";
import NewActivityPage from "../new-activity";
import WhichBlockPage from "../which-block";
import GrooveInfoPage from "../groove-info";
import ProjectVibePage from "../project-vibe";
import PlaylistPage from "../playlist";
import GrooveActivityPage from "../groove-activity";
import GrooveCompletePage from "../groove-complete";
import SprintInfoPage from "../sprint-info";
import SprintActivityPage from "../sprint-activity";
import SprintCountPage from "../sprint-count";
import SprintCompletePage from "../sprint-complete";
import BreakItDownInfoPage from "../break-it-info";
import BreakItDownActivityPage from "../break-it-activity";
import BreakItDownCompletePage from "../break-it-complete";
import './index.css';


function PageContainer() {
    const [currentPage, setCurrentPage] = useState("home");
    const handleClick = (nextPage) => {
        setCurrentPage(nextPage);
    };

    const [projectVibe, setProjectVibe] = useState("none");

    const changeProjectVibe = (vibe) => {
        setProjectVibe(vibe);
    }

    const [sprintTime, setSprintTime] = useState(null);

    const changeSprintTime = (time) => {
        setSprintTime(time);
    }

    const [wordCount, setWordCount] = useState(0);

    const changeWordCount = (count) => {
        setWordCount(count);
    }

    const [breakTime, setBreakTime] = useState(null);

    const changeBreakTime = (time) => {
        setBreakTime(time);
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
            {currentPage === "sprint-info" && (<SprintInfoPage onNextPage={handleClick} getSprintTime={changeSprintTime}/>)}
            {currentPage === "sprint-activity" && (<SprintActivityPage onNextPage={handleClick} sprintTime={sprintTime}/>)}
            {currentPage === "sprint-count" && (<SprintCountPage onNextPage={handleClick} getWordCount={changeWordCount}/>)}
            {currentPage === "sprint-complete" && (<SprintCompletePage onNextPage={handleClick} wordCount={wordCount}/>)}
            {currentPage === "break-it-info" && (<BreakItDownInfoPage onNextPage={handleClick} getBreakTime={changeBreakTime}/>)}
            {currentPage === "break-it-activity" && (<BreakItDownActivityPage onNextPage={handleClick} breakTime={breakTime}/>)}
            {currentPage === "break-it-complete" && (<BreakItDownCompletePage onNextPage={handleClick}/>)}

       </div>
    );

}

export default PageContainer;