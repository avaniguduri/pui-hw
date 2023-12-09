import React, { useState, useEffect } from "react";
import TopBar from "../../../top-bar/js/function";
import { motion } from "framer-motion";
import ConfirmExitPopup from "../../../confirm-exit-popup/js/function.js";

// component for the page for during the break it down activity
function BreakItDownActivityPage(props) {

    // shows the confirmation pop-up when user tries to end activity early
    const handleButtonClick = () => {
        props.showConfirmPopup()
    };


    // ACTIVITY TIMER

    // state to store how much time is left in the activity
    const [timeLeft, setTimeLeft] = useState(props.breakTime * 60);
    
    // timer to change how much time is left in the activity
    const decreaseTime = () => {
        if (timeLeft > 0) {
            setTimeLeft(timeLeft - 1);
        } else {
            props.onNextPage("break-it-complete");
        }
    }

    // hook for timer for how much time is left in the activity
    // got setInterval from this website: https://devtrium.com/posts/set-interval-react
    useEffect(() => {
        const intervalTime = setInterval(() => {
            decreaseTime();
        }, 1000);
        return () => {clearInterval(intervalTime)}
    }, [timeLeft]);



    // STOP-MOTION ANIMATION OF BLOO

    // state to store which image to show for the stop-motion animation of the character Bloo
    const [blooState, setBlooState] = useState(false);

    // changes which image is shown to create a stop-motion animation
    const toggleBloo = () => {
        setBlooState(!blooState);
    }

    // hook for timer for the stop-motion animation (changing every second)
    // got setInterval from this website: https://devtrium.com/posts/set-interval-react
    useEffect(() => {
        const intervalBloo = setInterval(() => {
            toggleBloo();
        }, 1000);
        return () => {clearInterval(intervalBloo)}
    }, [blooState]);
    
    
    return (
        <div className="page-with-topbar">
            <TopBar showBackArrow="true" pageTitle="BREAK IT DOWN" onNextPage={props.onNextPage} lastPage="break-it-info"/>
            <div className="sized-page">
                <h2>What’s a phrase your main character might say?</h2>
                <h2 className="time-left">{Math.ceil(timeLeft/60)} min left</h2>
                {blooState ? <img className="centered-image" src="drawings/DeskBloo1.svg" alt="Bloo character on computer at desk in sketch style position 1"/>
                    : <img className="centered-image" src="drawings/DeskBloo2.svg" alt="Bloo character on computer at desk in sketch style position 2"/>
                }
                <div className="button-group">
                    <motion.button className="button no-fill button-text dark-text" whileHover={{ scale: [1,1.1] }} onClick={handleButtonClick}>End activity early</motion.button>
                </div>
                <ConfirmExitPopup onNextPage={props.onNextPage} completePage="break-it-complete"/>
            </div>
        </div>
    );
}

export default BreakItDownActivityPage;