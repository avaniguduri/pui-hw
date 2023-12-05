import React, { Component } from "react";
import TopBar from "../top-bar";
import SongPlayer from "../song-player";
import './index.css';
import { motion } from "framer-motion";

function GrooveActivityPage(props) {
    
    return (
        <div className="page-with-topbar">
            <TopBar showBackArrow="true" pageTitle="THE GROOVE" onNextPage={props.onNextPage} lastPage="playlist"/>
            <div className="sized-page">
                <SongPlayer projectVibe={props.projectVibe} onNextPage={props.onNextPage}/>
            </div>
        </div>
    );
}

export default GrooveActivityPage;