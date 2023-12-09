import React, { useState, useEffect } from "react";
import TopBar from "../../../top-bar/js/function.js";
import ConfirmExitPopup from "../../../confirm-exit-popup/js/function.js";
import { motion } from "framer-motion";

// component for the page during the word sprint activity
function SprintActivityPage(props) {

    // shows confirmation pop-up in case user made an error when they try to end the session
    const handleButtonClick = () => {
        props.showConfirmPopup();
    };


    // KEEPING TRACK OF TIME LEFT IN ACTIVITY

    // a state to store how much time is left in the activity
    const [timeLeft, setTimeLeft] = useState(props.sprintTime * 60);
    const decreaseTime = () => {
        if (timeLeft > 0) {
            setTimeLeft(timeLeft - 1);
        } else {
            props.onNextPage("sprint-count"); // goes to the activity completion page when the timer ends
        }
    }

    // a hook to change the timer every second
    // got setInterval from this website: https://devtrium.com/posts/set-interval-react
    useEffect(() => {
        const intervalTime = setInterval(() => {
            decreaseTime();
        }, 1000);
      
        return () => {
            clearInterval(intervalTime);
        }
    }, [timeLeft]);


    // STOP-MOTION ANIMATION OF THE BLOO CHARACTER

    // a state to store which image is showing in the animation
    const [blooState, setBlooState] = useState(false);
    const toggleBloo = () => {
        setBlooState(!blooState);
    }

    // a hook to change the image state every second
    // got setInterval from this website: https://devtrium.com/posts/set-interval-react
    useEffect(() => {
        const intervalBloo = setInterval(() => {
            toggleBloo();
        }, 1000);
      
        return () => {
            clearInterval(intervalBloo);
        }
      }, [blooState]);

    
    return (
        <div className="page-with-topbar">
            <TopBar showBackArrow="true" pageTitle="WORD SPRINT" onNextPage={props.onNextPage} lastPage="sprint-info"/>
            <div className="sized-page">
                <h2 className="time-left">{Math.ceil(timeLeft/60)} min left</h2>
                {blooState ? <img className="centered-image" src="drawings/DeskBloo1.svg" alt="Bloo character on computer at desk in sketch style position 1"/>
                    : <img className="centered-image" src="drawings/DeskBloo2.svg" alt="Bloo character on computer at desk in sketch style position 2"/>
                }
                <div className="button-group">
                    <motion.button className="button no-fill button-text dark-text" whileHover={{ scale: [1,1.1] }} onClick={handleButtonClick}>End activity early</motion.button>
                </div>
                <ConfirmExitPopup onNextPage={props.onNextPage} completePage="sprint-count"/>
            </div>
        </div>
    );
}

export default SprintActivityPage;