import React from "react";
import '../css/style.css';
import TopBar from "../../top-bar/js/function.js";

// component for the page that shows a log of all locally stored activities
function ActivityLogPage(props) {

    // creating an array to populate with activities to display
    let activityListItems = [];

    // populating the array with divs (each with activity name and date)
    for (let i = 0; i < props.activityList.length; i++) {

        activityListItems.push(
            <div id={i.toString()} className="activity-list-row">
                <p>{props.activityList[i].name}</p>
                <p>{(new Date(props.activityList[i].saveDate)).toISOString().split('T')[0]}</p>
            </div>
        );
    }

    return (
        <div className="page-with-topbar">
            <TopBar showBackArrow="true" pageTitle="ACTIVITY LOG" onNextPage={props.onNextPage} lastPage="new-activity"/>
            <div className="sized-page">
                    <h2>Here's how often you've been doing activities.</h2>
                    <div className="activity-list-container">
                        {activityListItems}
                    </div>
            </div>
        </div>
    );
}

export default ActivityLogPage;