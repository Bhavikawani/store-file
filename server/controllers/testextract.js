const nodecallspython = require("node-calls-python");
const path = require("path");

let py = nodecallspython.interpreter;

// py.import(path.join(__dirname, "../python/pdftotxt.py")).then(
//   async function (pymodule) {
//     let predict = await py.call(pymodule, "ptt");
//     if(predict){
//     py.import(path.join(__dirname, "../python/extextfrompdf.py")).then(
//       async function (pymodule) {
//         // import the python module
//         //   let logreg = await py.create(pymodule, "LogReg", "iris"); // create the instance of the classifier

//         let data = await py.call(pymodule, "extract"); // call predict

//         if (data) {
//           py.import(path.join(__dirname, "../python/resumep.py")).then(
//             async function (pymodule) {
//               let predict = await py.call(pymodule, "rp", data);
//               console.log(predict);
//             }
//           );
//         }
//       }
//     );

//     }
//   }

// );

py.import(path.join(__dirname, "../python/pdftotxt.py")).then(async function (
  pymodule
) {
  let predict = await py.call(pymodule, "ptt");
  // console.log(predict);
});

py.import(path.join(__dirname, "../python/extextfrompdf.py")).then(
  async function (pymodule) {
    // import the python module
    //   let logreg = await py.create(pymodule, "LogReg", "iris"); // create the instance of the classifier
    let data = await py.call(pymodule, "extract"); // call predict
    console.log(data);
    if (data) {
      py.import(path.join(__dirname, "../python/resumep.py")).then(
        async function (pymodule) {
          let predict = await py.call(pymodule, "rp", data);
          console.log(predict);
        }
      );
    }
  }
);

