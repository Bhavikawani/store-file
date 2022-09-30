let path = require("path");
const fs = require("fs");
const nodecallspython = require("node-calls-python");
let py = nodecallspython.interpreter;

module.exports.uploadFile = async (req, res, next) => {
  if (req.file) {
    py.import(path.join(__dirname, "../python/pdftotxt.py")).then(
      async function (pymodule) {
        let predict = await py.call(pymodule, "ptt");
        py.import(path.join(__dirname, "../python/extextfrompdf.py")).then(
          async function (pymodule) {
            // import the python module
            //   let logreg = await py.create(pymodule, "LogReg", "iris"); // create the instance of the classifier
            let data = await py.call(pymodule, "extract"); // call predict
            if (data) {
              py.import(path.join(__dirname, "../python/resumep.py")).then(
                async function (pymodule) {
                  let result = await py.call(pymodule, "rp", data);
                  console.log(result);
                }
              );
            }
          }
        );
      }
    );
  }
};

module.exports.speak = async (req, res, next) => {
  console.log("called");
  py.import(path.join(__dirname, "../python/speakquestions.py")).then(
    async function (pymodule) {
      // import the python module
      // create the instance of the classifier
      data = ["NLP", "Java"];
      audio = [
        "Can you discuss a time where you had to manage your team through a difficult situation?",
        "How do you prioritize your tasks when you have multiple deadlines to meet?",
      ];
      let predict = await py.call(pymodule, "speak", audio);
      let predict1 = await py.call(pymodule, "skills_question", data);
      // call predict
      // console.log(predict);
      // console.log(predict1);
    }
  );
};

module.exports.uploadVideo = async (req, res, next) => {
  console.log(req.file, "mil gayi");
};
