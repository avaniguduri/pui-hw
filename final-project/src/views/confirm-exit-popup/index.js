import React from "react";
import './index.css';
import { motion } from "framer-motion";

function ConfirmExitPopup(props) {
    
    const handleConfirmButtonClick = () => {
        if (props.completePage == "groove-complete") {
            props.song.stop();
        }
        props.onNextPage(props.completePage);
    };

    const handleCancelButtonClick = () => {
        document.getElementById("confirm-exit-popup").style.visibility = "hidden";
        if (props.completePage == "groove-complete") {
            props.song.play();
        }
    };
    
    return (
        <div id="confirm-exit-popup">
            <h2 className="pop-up-text">Are you sure you want to end this activity?</h2>
            <div className="button-group">
                <div className="button-pair">
                    <motion.button className="button no-fill button-text dark-text" whileHover={{ scale: [1,1.1] }} onClick={handleCancelButtonClick}>Cancel</motion.button>
                    <motion.button className="button black-fill button-text white-text" whileHover={{ scale: [1,1.1] }} onClick={handleConfirmButtonClick}>Yes</motion.button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmExitPopup;
