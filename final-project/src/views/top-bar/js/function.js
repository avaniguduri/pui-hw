import React from "react";
import '../css/style.css';

// a component for the top bar containing the page title and back button

function TopBar(props) {
    
    // changes page state to the previous page
    const handleBackButtonClick = () => {
        if (props.lastPage !== "") {
        props.onNextPage(props.lastPage);
        }
    };

    // shows back arrow only when the page requires it
    let backArrow;
    if (props.showBackArrow === "true") {
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