import React, { Component, useState } from 'react';
import HomePage from "../home";
import NewActivityPage from "../new-activity";
import ActivityLogPage from "../activity-log";
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
    };

    const [sprintTime, setSprintTime] = useState(null);

    const changeSprintTime = (time) => {
        setSprintTime(time);
    };

    const [wordCount, setWordCount] = useState(0);

    const changeWordCount = (count) => {
        setWordCount(count);
    };

    const [breakTime, setBreakTime] = useState(null);

    const changeBreakTime = (time) => {
        setBreakTime(time);
    };

    function showConfirmExitPopup() {
        document.getElementById('confirm-exit-popup').style.visibility = 'visible';
    }

    function getActivityList() {
        let activityListJSONString = localStorage.getItem("activityList");
        let finalActivityList = [];
        if (!activityListJSONString) {
            return finalActivityList;
        }
        else {
            finalActivityList = JSON.parse(activityListJSONString);
            return finalActivityList;
        }
    }

    const [activityList, setActivityList] = useState(getActivityList());

    function storeActivityList() {
        localStorage.setItem("activityList", JSON.stringify(activityList));
    }

    const addActivity = (activity) => {
        const activityDate = new Date();
        const stringDate = activityDate.getMonth() + 1 + "/" + activityDate.getDate() + "/" + activityDate.getFullYear();
        let newActivityList = activityList + [[activity, stringDate]];
        setActivityList(newActivityList);
        storeActivityList();
    };

    return (
        <div>
            {currentPage === "home" && (<HomePage onNextPage={handleClick}/>)}
            {currentPage === "new-activity" && (<NewActivityPage onNextPage={handleClick}/>)}
            {currentPage === "activity-log" && (<ActivityLogPage onNextPage={handleClick} activityList={activityList}/>)}
            {currentPage === "which-block" && (<WhichBlockPage onNextPage={handleClick}/>)}
            {currentPage === "groove-info" && (<GrooveInfoPage onNextPage={handleClick}/>)}
            {currentPage === "project-vibe" && (<ProjectVibePage onNextPage={handleClick} getProjectVibe={changeProjectVibe}/>)}
            {currentPage === "playlist" && (<PlaylistPage onNextPage={handleClick} projectVibe={projectVibe}/>)}
            {currentPage === "groove-activity" && (<GrooveActivityPage onNextPage={handleClick} projectVibe={projectVibe} showConfirmPopup={showConfirmExitPopup}/>)}
            {currentPage === "groove-complete" && (<GrooveCompletePage onNextPage={handleClick} saveActivity={addActivity}/>)}
            {currentPage === "sprint-info" && (<SprintInfoPage onNextPage={handleClick} getSprintTime={changeSprintTime}/>)}
            {currentPage === "sprint-activity" && (<SprintActivityPage onNextPage={handleClick} sprintTime={sprintTime} showConfirmPopup={showConfirmExitPopup}/>)}
            {currentPage === "sprint-count" && (<SprintCountPage onNextPage={handleClick} getWordCount={changeWordCount}/>)}
            {currentPage === "sprint-complete" && (<SprintCompletePage onNextPage={handleClick} wordCount={wordCount} saveActivity={addActivity}/>)}
            {currentPage === "break-it-info" && (<BreakItDownInfoPage onNextPage={handleClick} getBreakTime={changeBreakTime}/>)}
            {currentPage === "break-it-activity" && (<BreakItDownActivityPage onNextPage={handleClick} breakTime={breakTime} showConfirmPopup={showConfirmExitPopup}/>)}
            {currentPage === "break-it-complete" && (<BreakItDownCompletePage onNextPage={handleClick} saveActivity={addActivity}/>)}

       </div>
    );

}

export default PageContainer;