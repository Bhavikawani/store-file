import React from "react";
import { useEffect, useState } from "react";
import { uploadVideo } from "../services/file";
import bot from "../Images/bot.mp4";
import './File.css';
const formData = require("form-data");
var FileSaver = require("file-saver");

const Recorder = () => {
  let form = new formData();
  const [file, setFile] = useState();
  const [id, setId] = useState(0);

  const uploadVideo = () => {
    // console.log("hi")
    form.set("file", file);
    // console.log(file)
    uploadVideo(form)
      .then((result) => {
        console.log(result, "Ssss");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let constraintObj = {
    audio: false,
    video: {
      facingMode: "user",
      width: { min: 500, ideal: 500, max: 500 },
      height: { min: 300, ideal: 300, max: 300 },
    },
  };
  // width: 1280, height: 720  -- preference only
  // facingMode: {exact: "user"}
  // facingMode: "environment"

  //handle older browsers that might implement getUserMedia in some way
  if (navigator.mediaDevices === undefined) {
    navigator.mediaDevices = {};
    navigator.mediaDevices.getUserMedia = function (constraintObj) {
      let getUserMedia =
        navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
      if (!getUserMedia) {
        return Promise.reject(
          new Error("getUserMedia is not implemented in this browser")
        );
      }
      return new Promise(function (resolve, reject) {
        getUserMedia.call(navigator, constraintObj, resolve, reject);
      });
    };
  } else {
    navigator.mediaDevices
      .enumerateDevices()
      .then((devices) => {
        devices.forEach((device) => {
          // console.log(device.kind.toUpperCase(), device.label);
          //, device.deviceId
        });
      })
      .catch((err) => {
        console.log(err.name, err.message);
      });
  }

  navigator.mediaDevices
    .getUserMedia(constraintObj)
    .then(function (mediaStreamObj) {
      //connect the media stream to the first video element
      let video = document.getElementById("videop");
      if ("srcObject" in video) {
        video.srcObject = mediaStreamObj;
      } else {
        //old version
        video.src = window.URL.createObjectURL(mediaStreamObj);
      }

      video.onloadedmetadata = function (ev) {
        //show in the video element what is being captured by the webcam
        video.play();
      };

      //add listeners for saving video/audio
      let start = document.getElementById("btnStart");
      let stop = document.getElementById("btnStop");
      //   let vidSave = document.getElementById(`vid${id}`);
      let vidSave = document.getElementById("vid2");
      let vidSavee = document.getElementById("vid3");

      //   let vidSaves = [];
      //   for (let i = 0; i <= 3; i++){
      //     vidSaves[i] = document.getElementById(`vid${id}`);
      //   }

      let mediaRecorder = new MediaRecorder(mediaStreamObj);
      let chunks = [];

      start.addEventListener("click", (ev) => {
        mediaRecorder.start();
        console.log(mediaRecorder.state);
      });
      stop.addEventListener("click", (ev) => {
        mediaRecorder.stop();
        console.log(mediaRecorder.state);
      });
      mediaRecorder.ondataavailable = function (ev) {
        chunks.push(ev.data);
      };

      mediaRecorder.onstop = (ev) => {
        let blob = new Blob(chunks, { type: "video/mp4;" });
        let videoURL = window.URL.createObjectURL(blob);

        // for (let i = 0; i <= 3; i++){
        // vidSaves[i].src = videoURL;
        // }
        if (id == 0) {
          vidSave.src = videoURL;
        } else if (id == 1) {
          vidSavee.src = videoURL;
      };
    }
    })
    .catch(function (err) {
      console.log(err.name, err.message);
    });

  //   const videos = [];
  //   for (let i = 0; i <= 3; i++) {
  //     videos.push(
  //       <>
  //         <video id={`vid${id}`} controls></video>
  //       </>
  //     );
  //   }

  return (
    <>
      <div>

        {/* {videos} */}

        <video style={{border: "1px solid black"}} id="videop" ></video>
        <p>
          <button class="button-30" id="btnStart">
            Start
          </button>
      
          <button
            class="button-30"
            id="btnStop"
            onClick={() => {
              setId(id + 1);
            }}
          >
            Stop
          </button>
        </p>
        <br></br>
        <video className="recorded" id="vid2" controls></video>

      </div>
    </>
  );
};

export default Recorder;
