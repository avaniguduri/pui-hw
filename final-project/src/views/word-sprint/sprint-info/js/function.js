import React, { useState, useEffect, useCallback } from "react";
import TopBar from "../../../top-bar/js/function.js";
import { motion } from "framer-motion";

// component for the page with info about the word sprint activity
function SprintInfoPage(props) {

    // DETERMINING ACTIVITY LENGTH

    // state to store activity length
    const [activityTime, setActivityTime] = useState(15);

    // adds to the activity length in 5min increments
    const addTime = () => {
        if (activityTime < 60) {
            setActivityTime(activityTime + 5);
        }
    };

    // subtracts from the activity length in 5min increments
    const subtractTime = () => {
        if (activityTime > 10) {
            setActivityTime(activityTime - 5);
        }
    }


    // HANDLING USER INPUTS

    // goes to the activity page when the users clicks start
    const handleButtonClick = () => {
        props.getSprintTime(activityTime);
        props.onNextPage("sprint-activity");
    };

    // handles keyboard shortcut to add or subtract time using up and down arrow keys
    // used this website to understand how to handle keys: https://upmostly.com/tutorials/how-to-react-onkeypress-event
    const handleKeyPress = useCallback((event) => {
        if (event.key === "ArrowUp") {
            document.getElementById("add").click();
        } else if (event.key === "ArrowDown") {
            document.getElementById("subtract").click();
        }
      }, []);
    
    // hook to check if any keys are pressed
    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
          document.removeEventListener('keydown', handleKeyPress);
        };
      }, [handleKeyPress]);
    
    return (
        <div className="page-with-topbar">
            <TopBar showBackArrow="true" pageTitle="WORD SPRINT" onNextPage={props.onNextPage} lastPage="which-block"/>
            <div className="sized-page">
                <h1>Word Sprint</h1>
                <div className="time-container">
                    <h3>{activityTime} min</h3>
                    <div className="time-controls">
                        <motion.button className="time-control-button" id="subtract" whileTap={{ scale : [1, 1.2, 1] }} onClick={subtractTime}>
                            <img src="icons/Subtract.svg" alt="subtraction icon"/>
                        </motion.button>
                        <motion.button className="time-control-button" id="add" whileTap={{ scale : [1, 1.2, 1] }} onClick={addTime}>
                            <img src="icons/Add.svg" alt="addition icon"/>
                        </motion.button>
                    </div>
                </div>
                <div className="instructions">
                    <h2 className="purple-text bold-text">Compete with Bloo.</h2>
                    <h2>Who can write more words in {activityTime} minutes?</h2>
                </div>
                <img className="centered-image" src="drawings/Bloo.svg" alt="Bloo character in sketch style"/>
                <div className="button-group">
                    <motion.button className="button black-fill button-text white-text" whileHover={{ scale: [1,1.1] }} onClick={handleButtonClick}>Start</motion.button>
                </div>
            </div>
        </div>
    );
}

export default SprintInfoPage;