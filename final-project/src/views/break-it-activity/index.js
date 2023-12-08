import React, { useState, useEffect } from "react";
import TopBar from "../top-bar";
import { motion } from "framer-motion";

function BreakItDownActivityPage(props) {

    const handleButtonClick = () => {
        props.onNextPage("break-it-complete");
    };

    const [timeLeft, setTimeLeft] = useState(props.breakTime * 60);
    const decreaseTime = () => {
        if (timeLeft > 0) {
            setTimeLeft(timeLeft - 1);
        } else {
            props.onNextPage("break-it-complete");
        }
    }

    const [blooState, setBlooState] = useState(false);
    const toggleBloo = () => {
        setBlooState(!blooState);
    }

    useEffect(() => {

        const intervalBloo = setInterval(() => {
            toggleBloo();
        }, 1000);

        const intervalTime = setInterval(() => {
            decreaseTime();
        }, 1000);
      
        return () => {
            clearInterval(intervalTime);
            clearInterval(intervalBloo);
        }
      }, [timeLeft, blooState]);
    
    return (
        <div className="page-with-topbar">
            <TopBar showBackArrow="true" pageTitle="BREAK IT DOWN" onNextPage={props.onNextPage} lastPage="break-it-info"/>
            <div className="sized-page">
                <h2>What’s a phrase your main character might say?</h2>
                <h2 className="time-left">{Math.ceil(timeLeft/60)} min left</h2>
                {blooState ? <img className="centered-image" src="DeskBloo1.svg" alt="Bloo character in sketchy style"/>
                    : <img className="centered-image" src="DeskBloo2.svg" alt="Bloo character in sketchy style"/>
                }
                <div className="button-group">
                    <motion.button className="button no-fill button-text dark-text" whileHover={{ scale: [1,1.1] }} onClick={handleButtonClick}>End activity early</motion.button>
                </div>
            </div>
        </div>
    );
}

export default BreakItDownActivityPage;