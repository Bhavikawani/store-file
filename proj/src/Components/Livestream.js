import React from "react";
import ReactLivestream from "react-livestream";
import VideOpen from "../Pages/VideoRecorder";

function LiveStream() {
  return (
    <div className="LiveStream">
      <ReactLivestream
        mixerChannelId
        platform
        twitchClientId
        twitchUserName
        youtubeApiKey
        youtubeChannelId
      >
        <VideOpen />
      </ReactLivestream>
    </div>
  );
}

export default LiveStream;