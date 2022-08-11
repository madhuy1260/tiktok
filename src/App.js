import React, { useEffect, useState } from "react";
import Video from "./Components/Video/Video";
import axios from "axios";
import "./App.css";

function App() {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    const loadTikTokData = async () => {
      const response = await axios.get(
        "https://tiktok-mernstack1260.herokuapp.com/v2/getposts"
      );

      setVideoData(response.data);
      return response;
    };
    loadTikTokData();
  }, []);

  console.log(videoData);
  return (
    <div className="app">
      <div className="app__videos">
        {videoData.map((each) => (
          <Video
            url={each.url}
            Channel={each.Channel}
            Description={each.Description}
            Song={each.Song}
            Likes={each.Likes}
            Messages={each.Messages}
            Shares={each.Shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
