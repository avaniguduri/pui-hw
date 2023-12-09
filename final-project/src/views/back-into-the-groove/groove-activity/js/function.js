import React from "react";
import TopBar from "../../../top-bar/js/function.js";
import SongPlayer from "../../song-player/js/function.js";

// component for page during the groove activity
function GrooveActivityPage(props) {
    
    return (
        <div className="page-with-topbar">
            <TopBar showBackArrow="true" pageTitle="THE GROOVE" onNextPage={props.onNextPage} lastPage="playlist"/>
            <div className="sized-page">
                <SongPlayer createSongList={props.createSongList} onNextPage={props.onNextPage} showConfirmPopup={props.showConfirmPopup}/>
            </div>
        </div>
    );
}

export default GrooveActivityPage;