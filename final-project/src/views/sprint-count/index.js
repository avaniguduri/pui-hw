
import React, { useState } from "react";
import TopBar from "../top-bar";
import "./index.css";
import { motion } from "framer-motion";

function SprintCountPage(props) {

    const [wordCount, setWordCount] = useState("");

    const [feedbackIcon, setFeedbackIcon] = useState(false);

    const handleInputChange = (event) => {
        setWordCount(event.target.value);

        if ((!isNaN(event.target.value)) && event.target.value != "") {
            setFeedbackIcon(true);
        } else {
            setFeedbackIcon(false);
        }
    };

    const handleButtonClick = () => {
        if (!isNaN(wordCount) && wordCount != "") {
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
                    {feedbackIcon ? <img src="icons/Correct.svg" alt="cancel icon"/> : <img src="icons/Incorrect.svg" alt="cancel icon"/>}
                </div>
                <div className="button-group">
                    <motion.button className="button black-fill button-text white-text" whileHover={{ scale: [1,1.1] }} onClick={handleButtonClick}>Submit</motion.button>
                </div>
            </div>
        </div>
    );
}

export default SprintCountPage;