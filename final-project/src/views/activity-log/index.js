import React from "react";
import TopBar from "../top-bar";
import { motion } from "framer-motion";

function ActivityLogPage(props) {

    let activityListItems = [];

    for (let i = 0; i < props.activityList.length; i++) {

        activityListItems.push(
            <div id={i.toString()} className="activity-list-row">
                <p>{props.activityList[i][0]}</p>
                <p>{props.activityList[i][1]}</p>
            </div>
        );
    }

    return (
        <div className="page-with-topbar">
            <TopBar showBackArrow="true" pageTitle="ACTIVITY LOG" onNextPage={props.onNextPage} lastPage="new-activity"/>
            <div className="sized-page">
                    <h2>Here's how often you've been doing activites.</h2>
                    <div id="activity-list-container">
                        {activityListItems}
                    </div>
            </div>
        </div>
    );
}

export default ActivityLogPage;