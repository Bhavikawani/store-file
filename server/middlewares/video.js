const multer = require("multer");
const fs = require("fs");

const location = (destination) => {
    return (req, res, next) => {
      req.destination = destination;
      next();
    };
};

const videoStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = req.destination;
        const exist = fs.existsSync(dir);
        if (!exist) {
          return fs.mkdir(dir, (error) => cb(error, dir));
        }
        return cb(null, dir);
      },
    filename: (req, file, cb) => {
        cb(null, `${file.originalname.split(" ").join("-")}`)
    }
});

const videoUpload = multer({
    storage: videoStorage,
    limits: {
    fileSize: 10000000 // 10000000 Bytes = 10 MB
    },
    fileFilter(req, file, cb) {
      // upload only mp4 and mkv format
      if (!file.originalname.match(/\.(mp4|MPEG-4|mkv)$/)) { 
         return cb(new Error('Please upload a video'))
      }
      cb(undefined, true)
   }
})

exports.videoUpload = videoUpload;
exports.location = location;