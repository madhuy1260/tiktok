import React from "react";
import { useRef, useState } from "react";
import VideoFooter from "../VideoFooter/VideoFooter";
import VideoSidebar from "../VideoSidebar/VideoSidebar";
import "./video.css";

function Video(props) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const { url, Channel, Description, Song, Likes, Messages, Shares } = props;

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        ref={videoRef}
        controls="controls autoplay"
        controlsList="nodownload"
      >
        <source src={url} type="video/mp4" />
      </video>
      <VideoFooter Channel={Channel} Description={Description} Song={Song} />
      <VideoSidebar Likes={Likes} Shares={Shares} Messages={Messages} />
    </div>
  );
}

export default Video;
