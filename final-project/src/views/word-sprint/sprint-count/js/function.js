
import React, { useState } from "react";
import TopBar from "../../../top-bar/js/function.js";
import '../css/style.css';
import { motion } from "framer-motion";

// component for the page where a user inputs their word count during the word sprint activity
function SprintCountPage(props) {

    // state for storing the user's word count
    const [wordCount, setWordCount] = useState("");

    //
    const [feedbackIcon, setFeedbackIcon] = useState(false);

    // checks if there's a valid input for the word count and shows the correct feedback (checkmark or an "x")
    const handleInputChange = (event) => {
        setWordCount(event.target.value);

        if ((!isNaN(event.target.value)) && event.target.value !== "") {
            setFeedbackIcon(true);
        } else {
            setFeedbackIcon(false);
        }
    };

    // only goes to the next page if there's a valid input for the word count
    const handleButtonClick = () => {
        if (!isNaN(wordCount) && wordCount !== "") {
            props.getWordCount(wordCount);
            props.onNextPage("sprint-complete");
        } else {
            setFeedbackIcon(false);
        }
    };
    
    return (
        <div className="page-with-topbar">
            <TopBar showBackArrow="false" pageTitle="WORD SPRINT" onNextPage={props.onNextPage} lastPage="sprint-activity"/>
            <div className="sized-page">
                <h2>How many words did you write?</h2>
                <div className="word-count-row">
                    <label>
                        Word count:
                        <input type="text" id="word-count-input" value={wordCount} onChange={handleInputChange}/>
                    </label>
                    {feedbackIcon ? <img src="icons/Correct.svg" alt="checkmark icon"/> : <img src="icons/Incorrect.svg" alt="cancel icon"/>}
                </div>
                <div className="button-group">
                    <motion.button className="button black-fill button-text white-text" whileHover={{ scale: [1,1.1] }} onClick={handleButtonClick}>Submit</motion.button>
                </div>
            </div>
        </div>
    );
}

export default SprintCountPage;