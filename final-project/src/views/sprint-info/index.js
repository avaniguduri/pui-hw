import React, { useState, useEffect, useCallback } from "react";
import TopBar from "../top-bar";
import { motion } from "framer-motion";

function SprintInfoPage(props) {

    const [activityTime, setActivityTime] = useState(15);

    const addTime = () => {
        if (activityTime < 60) {
            setActivityTime(activityTime + 5);
        }
    };

    const subtractTime = () => {
        if (activityTime > 10) {
            setActivityTime(activityTime - 5);
        }
    }

    const handleButtonClick = () => {
        props.getSprintTime(activityTime);
        props.onNextPage("sprint-activity");
    };

    const handleKeyPress = useCallback((event) => {
        if (event.key == "ArrowUp") {
            document.getElementById("add").click();
        } else if (event.key == "ArrowDown") {
            document.getElementById("subtract").click();
        }
      }, []);
    
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
                <img className="centered-image" src="drawings/Bloo.svg" alt="Bloo character in sketchy style"/>
                <div className="button-group">
                    <motion.button className="button black-fill button-text white-text" whileHover={{ scale: [1,1.1] }} onClick={handleButtonClick}>Start</motion.button>
                </div>
            </div>
        </div>
    );
}

export default SprintInfoPage;