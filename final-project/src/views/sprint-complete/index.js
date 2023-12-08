import React, { useState, useEffect } from "react";
import TopBar from "../top-bar";
import { motion } from "framer-motion";

function SprintCompletePage(props) {
    
    const handleAgainButtonClick = () => {
        props.onNextPage("sprint-info");
    };

    const handleHomeButtonClick = () => {
        props.onNextPage("home");
    };

    const handleSaveButtonClick = () => {
        props.onNextPage("home");
    };

    const blooWordCount = ((((Math.floor(Math.random() * 100)) % 6) * 100) + 100) + (Math.floor(Math.random() * 100));
    const userWordCount = props.wordCount;

    let endText;
    let image1;
    let image2;
    if (blooWordCount > userWordCount) {
        endText = <h2>You lose.</h2>;
        image1 = "BlooWins1.svg";
        image2 = "BlooWins2.svg";
    } else if (blooWordCount < userWordCount) {
        endText = <h2>You win!</h2>;
        image1 = "Trophy1.svg";
        image2 = "Trophy2.svg";
    } else {
        endText = <h2>You tie.</h2>;
        image1 = "BrokenBlock.svg";
        image2 = "BrokenBlock.svg";
    }

    const [imageState, setImageState] = useState(image1);
    const toggleImage = () => {
        if (imageState == image1) {
            setImageState(image2);
        } else{
            setImageState(image1);
        }
    }

    useEffect(() => {

        const interval = setInterval(() => {
            toggleImage();
        }, 1000);
      
        return () => clearInterval(interval)

      }, [imageState]);
    
    return (
        <div className="page-with-topbar">
            <TopBar showBackArrow="true" pageTitle="WORD SPRINT" onNextPage={props.onNextPage} lastPage="sprint-count"/>
            <div className="sized-page">
                {endText}
                <img className="centered-image" src={imageState} alt="block in exploded pieces on line in sketchy style"/>
                <div className="button-group">
                    <motion.button className="button no-fill button-text dark-text" whileHover={{ scale: [1,1.1] }} onClick={handleSaveButtonClick}>Save activity</motion.button>
                    <div className="button-pair">
                        <motion.button className="button no-fill button-text dark-text" whileHover={{ scale: [1,1.1] }} onClick={handleHomeButtonClick}>Go to home</motion.button>
                        <motion.button className="button black-fill button-text white-text" whileHover={{ scale: [1,1.1] }} onClick={handleAgainButtonClick}>Try again</motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SprintCompletePage;