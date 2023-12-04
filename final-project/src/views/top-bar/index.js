import React, { Component } from "react";

function TopBar(props) {
    
    const handleBackButtonClick = () => {
        if (props.lastPage != "") {
        props.onNextPage(props.lastPage);
        }
    };

    let backArrow;
    if (props.showBackArrow == "true") {
        backArrow = <img className="back-arrow" src="BackArrow.svg" alt="left arrow icon" onClick={handleBackButtonClick}/>
    } else {
        backArrow = <div className="hidden-back-arrow"></div>
    }

    return (
        <div className="top-bar">
            {backArrow}
            <h4>{props.pageTitle}</h4>
        </div>
    );

}

export default TopBar;