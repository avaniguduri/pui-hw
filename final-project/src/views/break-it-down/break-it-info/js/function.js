import React, { useState, useEffect, useCallback } from "react";
import TopBar from "../../../top-bar/js/function.js";
import { motion } from "framer-motion";

// component for page with info about the break it down activity
function BreakItDownInfoPage(props) {

    // DETERMINING THE ACTIVITY LENGTH

    // state to store the length of the activity
    const [activityTime, setActivityTime] = useState(15);

    // adds 5min to the length of the activity when the user wants to increase the time
    const addTime = () => {
        if (activityTime < 60) {
            setActivityTime(activityTime + 5);
        }
    };

    // subtracts 5min from the length of the activity when the users wants to decrease the time
    const subtractTime = () => {
        if (activityTime > 10) {
            setActivityTime(activityTime - 5);
        }
    }


    // HANDLING USER INPUTS

    // goes to the next page when the user clicks start
    const handleButtonClick = () => {
        props.getBreakTime(activityTime);
        props.onNextPage("break-it-activity");
    };

    // handles keyboard shortcut to add/subtract time from the activity length with up and down arrow keys
    // used this website to understand how to handle keys: https://upmostly.com/tutorials/how-to-react-onkeypress-event
    const handleKeyPress = useCallback((event) => {
        if (event.key === "ArrowUp") {
            document.getElementById("add").click();
        } else if (event.key === "ArrowDown") {
            document.getElementById("subtract").click();
        }
      }, []);
    
    // hook to check for if any keys are pressed
    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
          document.removeEventListener('keydown', handleKeyPress);
        };
      }, [handleKeyPress]);
    
    return (
        <div className="page-with-topbar">
            <TopBar showBackArrow="true" pageTitle="BREAK IT DOWN" onNextPage={props.onNextPage} lastPage="which-block"/>
            <div className="sized-page">
                <h1>Break It Down</h1>
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
                    <h2 className="purple-text bold-text">Write to a prompt.</h2>
                    <h2>Break down your writing task into something more manageable.</h2>
                    <h2>"Progress over perfection."</h2>
                </div>
                <div className="button-group">
                    <motion.button className="button black-fill button-text white-text" whileHover={{ scale: [1,1.1] }} onClick={handleButtonClick}>Start</motion.button>
                </div>
            </div>
        </div>
    );
}

export default BreakItDownInfoPage;