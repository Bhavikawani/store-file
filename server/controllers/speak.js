const nodecallspython = require("node-calls-python");
const path = require("path");

let py = nodecallspython.interpreter;

py.import(path.join(__dirname, "../python/speakquestions.py")).then(
  async function (pymodule) {
    // import the python module
    // create the instance of the classifier
    questions = [
      "Can you discuss a time where you had to manage your team through a difficult situation?",
      "How do you prioritize your tasks when you have multiple deadlines to meet?",
      "What is the most significant problem you solved in the workplace?",
      "How do you explain new topics to coworkers unfamiliar with them?",
      "Describe a situation where results went against expectations. How did you adapt to this change?",
      "What are your actions if employees disagree with your decision?",
      "Name three of your most important considerations when working for an employer.",
      "Highlight a situation where you had to make a decision without managerial supervision. How did you approach this situation, and who else did you speak with?",
      "When have you performed a task without preexisting experience?",
      "Explain your largest failure at work. How did you learn from this experience?",
    ];
    let predict = await py.call(pymodule, "speak", questions); // call predict
    console.log(predict);
  }
);