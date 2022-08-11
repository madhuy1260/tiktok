import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
// import Ticker from "react-ticker";

function VideoFooter({ Channel, Description, Song }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>{Channel}</h3>
        <p>{Description}</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          <p>{Song}</p>
          {/* <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{Song}!</p>
              </>
            )}
          </Ticker> */}
        </div>
      </div>
      <img
        src="https://static.thenounproject.com/png/934821-200.png"
        className="videoFooter__record"
        alt=""
      />
    </div>
  );
}

export default VideoFooter;
