import React, { useState } from "react";
import TopBar from "../top-bar";
import { motion } from "framer-motion";

function BreakItDownInfoPage(props) {

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
        props.getBreakTime(activityTime);
        props.onNextPage("break-it-activity");
    };
    
    return (
        <div className="page-with-topbar">
            <TopBar showBackArrow="true" pageTitle="BREAK IT DOWN" onNextPage={props.onNextPage} lastPage="which-block"/>
            <div className="sized-page">
                <h1>Break It Down</h1>
                <div className="time-container">
                    <h3>{activityTime} min</h3>
                    <div className="time-controls">
                        <motion.button className="time-control-button" whileTap={{ scale : [1, 1.2, 1] }} onClick={subtractTime}>
                            <img src="Subtract.svg" alt="subtraction icon"/>
                        </motion.button>
                        <motion.button className="time-control-button" whileTap={{ scale : [1, 1.2, 1] }} onClick={addTime}>
                            <img src="Add.svg" alt="addition icon"/>
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