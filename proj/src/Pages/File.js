import React from "react";
import { uploadFile, speak } from "../services/file";
import { useEffect, useState } from "react";
import './File.css';
const formData = require("form-data");

const File = () => {
  let form = new formData();
  const [file, setFile] = useState();
  const handleChange = (event) => {
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
    console.log("here");
  };

  const upload = () => {
    form.set("file", file);
    uploadFile(form)
      .then((result) => {
        console.log(result, "Ssss");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const speakk = () => {
    speak()
      .then((result) => {
        console.log(result, "Ssss");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
   
      <input type="file" className="input" onChange={(e) => handleChange(e)}></input>
   
      <button class="button-30" onClick={upload}>
        Upload Resume
      </button>
   
      <button class="button-30 start" onClick={speakk}>
        Start Interview
      </button>
    </>
  );
};

export default File;
