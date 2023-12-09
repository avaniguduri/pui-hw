import React from "react";
import './index.css';
import { motion } from "framer-motion";

function TopBar(props) {
    
    const handleBackButtonClick = () => {
        if (props.lastPage != "") {
        props.onNextPage(props.lastPage);
        }
    };

    let backArrow;
    if (props.showBackArrow == "true") {
        backArrow = <img className="back-arrow" src="icons/BackArrow.svg" alt="left arrow icon" onClick={handleBackButtonClick}/>
    } else {
        backArrow = <div className="hidden-back-arrow"></div>
    }

    return (
        <div className="top-bar">
            <div className="arrow-heading-group upper">
                {backArrow}
                <h4>{props.pageTitle}</h4>
            </div>
        </div>
    );

}

export default TopBar;