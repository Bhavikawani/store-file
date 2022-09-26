import React from 'react'
import { uploadFile } from "../services/file"
import { useEffect, useState } from 'react';
const formData = require("form-data");

const File = () => {
    let form = new formData();
    const [file, setFile] = useState();
    const handleChange = (event) => {
        console.log(event.target.files[0])
        setFile(event.target.files[0])
        console.log("here")
    }

    const upload = () => {
        console.log("hi")
        form.set("file", file);
        uploadFile(form).then((result) => {
            console.log(result, "Ssss")
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <>
            <input type="file" onChange={(e) => handleChange(e)}></input>
            <button onClick={upload}>Upload</button>
        </>
    )
}

export default File;