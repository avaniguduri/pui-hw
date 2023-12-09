import React from "react";
import '../css/style.css';
import { motion } from "framer-motion";

// a component for the confirmation pop-up for when a user tries to end an activity early
function ConfirmExitPopup(props) {
    
    // goes to the next page when the user confirms
    const handleConfirmButtonClick = () => {
        if (props.completePage === "groove-complete") {
            props.song.stop(); // stopping the music in the groove activity when the activity ends early
        }
        props.onNextPage(props.completePage);
    };

    // hides the pop-up when the user cancels
    const handleCancelButtonClick = () => {
        document.getElementById("confirm-exit-popup").style.visibility = "hidden";
        if (props.completePage === "groove-complete") {
            props.song.play(); // continuing the music in the groove activity once the pop-up disappears
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
