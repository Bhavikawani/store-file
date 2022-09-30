import React, { useState } from "react";
import { useEffect } from "react";
import bot from "../Images/abcd.mp4";

const Video = () => {
  const [muted, setMuted] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setMuted(!muted);
    }, 10000);
  }, [muted]);
  return (
    <div>
      <video
        // style={{ border: "2px solid black" }}
        src={bot}
        width="700"
        height="700"
        autoPlay={muted}
        loop="true"
        muted="true"
      />
    </div>
  );
};

export default Video;
