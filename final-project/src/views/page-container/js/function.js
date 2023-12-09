import React, { useState } from 'react';
import HomePage from "../../home/js/function.js";
import NewActivityPage from "../../new-activity/js/function.js";
import ActivityLogPage from "../../activity-log/js/function.js";
import WhichBlockPage from "../../which-block/js/function.js";
import GrooveInfoPage from "../../back-into-the-groove/groove-info/js/function.js";
import ProjectVibePage from "../../back-into-the-groove/project-vibe/js/function.js";
import PlaylistPage from "../../back-into-the-groove/playlist/js/function.js";
import GrooveActivityPage from "../../back-into-the-groove/groove-activity/js/function.js";
import GrooveCompletePage from "../../back-into-the-groove/groove-complete/js/function.js";
import SprintInfoPage from "../../word-sprint/sprint-info/js/function.js";
import SprintActivityPage from "../../word-sprint/sprint-activity/js/function.js";
import SprintCountPage from "../../word-sprint/sprint-count/js/function.js";
import SprintCompletePage from "../../word-sprint/sprint-complete/js/function.js";
import BreakItDownInfoPage from "../../break-it-down/break-it-info/js/function.js";
import BreakItDownActivityPage from "../../break-it-down/break-it-activity/js/function.js";
import BreakItDownCompletePage from "../../break-it-down/break-it-complete/js/function.js";

// a component to contain the page as a state

function PageContainer() {

    // RELEVANT FOR ALL PAGES

    // a state to store the current page to render
    const [currentPage, setCurrentPage] = useState("home");
    const handleClick = (nextPage) => {
        setCurrentPage(nextPage);
    };

    // I use motion throughout the pages, all of that is based off what I learned from here: https://www.framer.com/motion/animation/



    // BACK INTO THE GROOVE ACTIVITY

    // groove activity: state to store the project vibe
    const [projectVibe, setProjectVibe] = useState("none");

    // groove activity: function to update the project vibe state
    const changeProjectVibe = (vibe) => {
        setProjectVibe(vibe);
    };

    // class for a song to store information about it
    function Song(title, artist, filePath, length) {
        this.title = title;
        this.artist = artist;
        this.filePath = filePath;
        this.length = length;
    }

    // function to create list of songs based on the vibe of the project that the user chose
    const createSongList = () => {
        let songList;
        if (projectVibe === "spooky") {
            songList = [
                new Song("Inside the Asylum", "GREGOIRE LOURME", "songs/spooky/InsideTheAsylum.mp3", 278),
                new Song("Crows", "HYPNOCRATES", "songs/spooky/Crows.mp3", 256),
                new Song("Cthulhu Rising", "CRYPT OF INSOMNIA", "songs/spooky/CthulhuRising.mp3", 154),
                new Song("Scary Halloween Cinematic Trailer", "ALEX CHE", "songs/spooky/ScaryHalloweenCinematicTrailer.mp3", 147),
                new Song("Scary", "MATTI PAALANEN", "songs/spooky/Scary.mp3", 154),
            ];
        } else if (projectVibe === "epic") {
            songList = [
                new Song("Black & White", "ARROW & OLIVE", "songs/epic/Black&White.mp3", 244),
                new Song("Endless Dreams", "INFRACTION", "songs/epic/EndlessDreams.mp3", 154),
                new Song("Rise to Glory", "GREGOIRE LOURME", "songs/epic/RiseToGlory.mp3", 162),
                new Song("The Storm", "INFRACTION", "songs/epic/TheStorm.mp3", 145),
                new Song("War (Epic Battle Trailer)", "ENERGYSOUND", "songs/epic/WarEpicBattleTrailer.mp3", 155),
            ];
        }
        else {
            songList = [
                new Song("For Those Whom I've Met", "THE ROOMS", "songs/melancholic/ForThoseWhomIveMet.mp3", 194),
                new Song("Find a Way", "THE DLX", "songs/melancholic/FindAWay.mp3", 166),
                new Song("Tiptoe", "RIVERS AND LEAFS", "songs/melancholic/Tiptoe.mp3", 272),
                new Song("I Say That I Feel Better", "KRISTIAN VULIJAR", "songs/melancholic/ISayThatIFeelBetter.mp3", 132),
                new Song("Destruction Mill", "ACOUSTIC ASTRONAUT", "songs/melancholic/DestructionMill.mp3", 223),
            ];
        }
        return songList;
    }



    // WORD SPRINT ACTIVITY

    // sprint activity: state to store the activity length
    const [sprintTime, setSprintTime] = useState(null);

    // sprint activity: function to update the activity length state
    const changeSprintTime = (time) => {
        setSprintTime(time);
    };

    // sprint activity: state to store the user's inputted word count
    const [wordCount, setWordCount] = useState(0);

    // sprint activity: function to store the word count state
    const changeWordCount = (count) => {
        setWordCount(count);
    };



    // BREAK IT DOWN ACTIVITY

    // break-it activity: state to store the activity length state
    const [breakTime, setBreakTime] = useState(null);

    // break-it activity: function to update the activity length state
    const changeBreakTime = (time) => {
        setBreakTime(time);
    };



    // FOR ALL ACTIVTIES

    // shows the confirmation pop-up when trying to exit an activity
    function showConfirmExitPopup() {
        document.getElementById('confirm-exit-popup').style.visibility = 'visible';
    }



    // STORING ACTIVITIES IN THE LOG

    // a class for an activity to be stored
    function ActivityItem(name, saveDate) {
        this.name = name;
        this.saveDate = saveDate.toISOString();
    }

    // retrieves the list of saved activities from local storage
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

    // a state to store the list of past activities
    const [activityList, setStateActivityList] = useState(getActivityList());

    // stores the current list of activities in local storage
    function storeActivityList(activityItemsList) {
        localStorage.setItem("activityList", JSON.stringify(activityItemsList));
    }

    // adds an activity to the list of activities stored locally
    const addActivity = (activity) => {
        activityList.push(new ActivityItem(activity, new Date()));
        setStateActivityList(activityList);
        storeActivityList(activityList);
    };

    // returns all the possible page states -- only one show up depending on the state of the current page
    return (
        <div>
            {currentPage === "home" && (<HomePage onNextPage={handleClick}/>)}
            {currentPage === "new-activity" && (<NewActivityPage onNextPage={handleClick}/>)}
            {currentPage === "activity-log" && (<ActivityLogPage onNextPage={handleClick} activityList={activityList}/>)}
            {currentPage === "which-block" && (<WhichBlockPage onNextPage={handleClick}/>)}
            {currentPage === "groove-info" && (<GrooveInfoPage onNextPage={handleClick}/>)}
            {currentPage === "project-vibe" && (<ProjectVibePage onNextPage={handleClick} getProjectVibe={changeProjectVibe}/>)}
            {currentPage === "playlist" && (<PlaylistPage onNextPage={handleClick} createSongList={createSongList}/>)}
            {currentPage === "groove-activity" && (<GrooveActivityPage onNextPage={handleClick} createSongList={createSongList} showConfirmPopup={showConfirmExitPopup}/>)}
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