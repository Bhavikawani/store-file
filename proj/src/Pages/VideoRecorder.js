import React, { useState, useEffect, useRef } from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import Webcam from "react-webcam";
import FlipCameraIosIcon from "@material-ui/icons/FlipCameraIos";
import "../App.css";
import vid from "../Images/vid.mp4";
import ReactPlayer from "react-player";

const FACING_MODE_USER = "user";
const FACING_MODE_ENVIRONMENT = "environment";
const videoConstraints = {
  facingMode: FACING_MODE_USER,
};

function VideoRecorder() {
  const [off, setOff] = useState(false);
  const webcamRef = useRef(null);
  const [showData, setShowData] = useState(false);

  // Code to switch camera   one method
  const [deviceNo, setDeviceNo] = useState(0);
  const [deviceId, setDeviceId] = useState("");
  const [devices, setDevices] = useState([]);

  const handleDevices = React.useCallback(
    (mediaDevices) =>
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
    [setDevices]
  );
  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices);
  }, [handleDevices]);

  const switchCamera = () => {
    if (deviceNo === 0) {
      setDeviceNo(1);
    } else if (deviceNo === 1) {
      setDeviceNo(0);
    }
  };
  useEffect(() => {
    if (devices.length > 0) {
      setDeviceId(devices[deviceNo].deviceId);
    }
  }, [deviceNo]);

  // Code to switch camera   socond method
  const [facingMode, setFacingMode] = useState(FACING_MODE_ENVIRONMENT);
  const handleClick = React.useCallback(() => {
    setFacingMode((prevState) =>
      prevState === FACING_MODE_USER
        ? FACING_MODE_ENVIRONMENT
        : FACING_MODE_USER
    );
  }, []);

  return (
    <div className="App">
      <ReactMediaRecorder
        video
        render={({
          status,
          startRecording,
          stopRecording,
          mediaBlobUrl,
          pauseRecording,
          resumeRecording,
        }) => (
          <div>
            <p>{status}</p>
            {/* {showData ? null : <Webcam videoConstraints={{ deviceId: device.deviceId }} audio={true} ref={webcamRef} />} */}
            {/* {devices.map((device, key) => ( */}
            <div>
              {showData ? null : (
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  // videoConstraints={{ deviceId: deviceId }}
                  videoConstraints={{
                    ...videoConstraints,
                    facingMode,
                  }}
                />
              )}

              {/* {device.deviceId} */}
            </div>
            {/* ))} */}

            {showData ? (
              <video src={mediaBlobUrl} autoPlay controls loop />
            ) : null}
            {console.log(mediaBlobUrl)}

            <div className="p-1 m-1">
              <FlipCameraIosIcon
                onClick={() => {
                  handleClick();
                }}
              />

              <button
                className="btn btn-success p-1 m-1 starRecord"
                onClick={startRecording}
              >
                <i class="fas fa-record-vinyl mx-1"></i> Start
              </button>
              <button
                className="btn btn-success p-1 m-1 starRecord"
                onClick={pauseRecording}
              >
                <i class="fas fa-record-vinyl mx-1"></i> Pause
              </button>

              <button
                className="btn btn-success p-1 m-1 starRecord"
                onClick={resumeRecording}
              >
                <i class="fas fa-record-vinyl mx-1"></i> Resume
              </button>

              <button
                className="btn btn-info p-1 m-1 starRecord"
                onClick={() => {
                  setShowData(true);
                  stopRecording();
                  setOff(true);
                }}
              >
                {" "}
                Stop
              </button>
            </div>
          </div>
        )}
      />
      {/* <ReactPlayer
  url={vid}
  config={{
    youtube: {
      playerVars: { showinfo: 1 }
    },
    facebook: {
      appId: '12345'
    }
  }}
/> */}
    </div>
  );
}

export default VideoRecorder;
