let path = require("path");
const fs = require("fs");

module.exports.uploadFile = async (req, res,next) => {
  console.log(req.file)
  };
  
module.exports.uploadVideo = async (req, res,next) => {
    console.log(req.file,"mil gayi")
 };