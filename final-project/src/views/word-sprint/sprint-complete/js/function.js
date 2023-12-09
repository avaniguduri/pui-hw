import React, { useState, useEffect } from "react";
import TopBar from "../../../top-bar/js/function.js";
import { motion } from "framer-motion";

// component for the word sprint activity completion page
function SprintCompletePage(props) {
    

    // HANDING BUTTON CLICKS

    // goes to the activity info page when user wants to go again
    const handleAgainButtonClick = () => {
        props.onNextPage("sprint-info");
    };

    // goes to home when the the users clicks the button
    const handleHomeButtonClick = () => {
        props.onNextPage("home");
    };

    // saves the activity when the users want to save and goes to the home page
    const handleSaveButtonClick = () => {
        props.saveActivity("Word Sprint");
        props.onNextPage("home");
    };


    // LOGIC FOR ACTIVITY WINNER

    // generates Bloo's word count randomly from 100 to 700
    const [blooWordCount, setBlooWordCount] = useState(0);
    setBlooWordCount(((((Math.floor(Math.random() * 100)) % 6) * 100) + 100) + (Math.floor(Math.random() * 100)));
    
    const userWordCount = props.wordCount; // retrieves word count user inputted on previous page

    // variables to manage activity end state
    let endText;
    let image1;
    let image2;
    let altText1;
    let altText2;

    if (blooWordCount > userWordCount) { // if Bloo wins, shows the correct text and images
        endText = <h2 className="text-center">You lose. Bloo got {blooWordCount} words.</h2>;
        image1 = "drawings/BlooWins1.svg";
        image2 = "drawings/BlooWins2.svg";
        altText1 = "Bloo character with trophy in sketch style position 1";
        altText2 = "Bloo character with trophy in sketch style position 2";
    } else if (blooWordCount < userWordCount) { // if the user wins, shows the correct text and images
        endText = <h2 className="text-center">You win! Bloo got {blooWordCount} words.</h2>;
        image1 = "drawings/Trophy1.svg";
        image2 = "drawings/Trophy2.svg";
        altText1 = "smiling trophy with confetti in sketch style position 1";
        altText2 = "smiling trophy with confetti in sketch style position 2";
    } else { // if there's a tie, shows the correct text and images
        endText = <h2 className="text-center">You tie. Bloo got {blooWordCount} words.</h2>;
        image1 = "drawings/BrokenBlock.svg";
        image2 = "drawings/BrokenBlock.svg";
        altText1 = "block in exploded pieces on line in sketch style";
        altText2 = "block in exploded pieces on line in sketch style";
    }

    const [imageState, setImageState] = useState(image1); // current image state
    const [altTextState, setAltTextState] = useState(altText1); // current alt text state

    // chages image and alt text every second to create stop-motion animation effect
    const toggleImage = () => {
        if (imageState === image1) {
            setImageState(image2);
            setAltTextState(altText2)
        } else{
            setImageState(image1);
            setAltTextState(altText1);
        }
    }

    // hook for timing when the images change for the animation (every second)
    // got setInterval from this website: https://devtrium.com/posts/set-interval-react
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
                <img className="centered-image" src={imageState} alt={altTextState}/>
                <div className="button-group">
                    <motion.button className="button no-fill button-text dark-text" whileHover={{ scale: [1,1.1] }} onClick={handleSaveButtonClick}>Log activity</motion.button>
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