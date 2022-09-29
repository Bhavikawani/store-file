import React, { useState } from "react";
import { useEffect } from "react";
import bot from "../Images/bot.mp4";

const Video = () => {
  const [muted, setMuted] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setMuted(!muted);
    }, 2000);
  }, [muted]);
  return (
    <div>
      <video
        src={bot}
        width="500"
        height="500"
        autoPlay={muted}
        loop="true"
        muted="true"
      />
    </div>
  );
};

export default Video;
