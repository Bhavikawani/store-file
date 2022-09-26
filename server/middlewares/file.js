const multer = require("multer");
const fs = require("fs");

const setLocation = (destination) => {
    return (req, res, next) => {
      req.destination = destination;
      next();
    };
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const dir = req.destination;
      const exist = fs.existsSync(dir);
      if (!exist) {
        return fs.mkdir(dir, (error) => cb(error, dir));
      }
      return cb(null, dir);
    },
    // let filetype = file.mimetype.split("/")[1]
    filename: (req, file, cb) => {
      return cb(
        null,
        `${file.originalname.split(" ").join("-")}`
      );
    },
  });

const upload = multer({ 
    storage: storage, 
});

exports.upload = upload;
exports.setLocation = setLocation;