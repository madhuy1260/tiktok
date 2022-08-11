import React from "react";
import { useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import CommentIcon from "@material-ui/icons/Comment";
import FavoriteIcon from "@material-ui/icons/Favorite";

import "./VideoSidebar.css";

export default function VideoSidebar({ Likes, Shares, Messages }) {
  const [Liked, setLiked] = useState(false);
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {Liked ? (
          <FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteBorderIcon
            fontSize="large"
            onClick={(e) => setLiked(true)}
          />
        )}

        <p>{Liked ? Likes + 1 : Likes}</p>
      </div>
      <div className="videoSidebar__button">
        <CommentIcon fontSize="large" />
        <p>{Messages}</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon fontSize="large" />
        <p>{Shares}</p>
      </div>
    </div>
  );
}
