const nodecallspython = require("node-calls-python");
const path = require("path");

let py = nodecallspython.interpreter;

// py.import(path.join(__dirname, "../python/speakquestions.py")).then(
//   async function (pymodule) {
//     // import the python module
//     // create the instance of the classifier
//     data = ['NLP', "Java"]
//     audio= [
//       "Can you discuss a time where you had to manage your team through a difficult situation?",
//       "How do you prioritize your tasks when you have multiple deadlines to meet?"

//     ];

//     let predict = await py.call(pymodule, "speak", audio);
//     let predict1 = await py.call(pymodule, "skills_question", data)
//     console.log(predict1);// call predict
//     console.log(predict1);

//   }
// );
py.import(path.join(__dirname, "../python/speakquestions.py")).then(
  async function (pymodule) {

    audio = [
      "Can you discuss a time where you had to manage your team through a difficult situation?",
      "How do you prioritize your tasks when you have multiple deadlines to meet?",
    ];
    let data = await py.call(pymodule, "speak", audio); // call predict
    console.log(data);
    py.import(path.join(__dirname, "../python/speakquestions.py")).then(
      async function (pymodule) {
        data = ["NLP", "Java"];
        let predict = await py.call(pymodule, "skills_question", data);
        console.log(predict);
      }
    );
  }
);
