const nodecallspython = require("node-calls-python");
const path = require("path");

let py = nodecallspython.interpreter;

py.import(path.join(__dirname, "../python/resumep.py")).then(async function (pymodule) {
  // import the python module
  //   let logreg = await py.create(pymodule, "LogReg", "iris"); // create the instance of the classifier
  test =
    "Pratham YashwantePhone: +91 9833364647Linkedin: linkedin.com/in/prathamyashwanteEmail: prathamyashwantepy@gmail.comAddress: Room No. 103, A - Wing, Good Relation CHS, Govandi East, Mumbai - 400088OBJECTIVEI want to apply for internships that will allow me to contribute to some real-world projects and also improve my technical skills.SKILLSTECHNICAL SKILLSWeb Development - HTML, CSS, Bootstrap, React, Express, Leaflet App Development - Java, Android Studio Game Development - Unreal, Unity, C++, C#  Databases - MongoDB, MySQL, PostgreSQL Python for ML and AIOTHER SKILLS Design - Figma, Canva Well organized and good in collaborationEDUCATION QualificationInstitute NameYearResult (SGPA / Percentage)Second YearSIES Graduate School Of Technology2021 - 2022Semester 4 - 9.25 Semester 3 - 10First YearSIES Graduate School Of Technology2020 - 2021Semester 2 - 9.90 Semester 1 - 10HSCSwami Vivekanand Junior College2018 - 202069.4%SSCSree Narayana Guru High School2006 - 201890.8%WORK EXPERIENCEFebruary 2022 - July 2022  Delta The Innovators InternWorked on the editorial materials for the company.Designed and created a volume of their technical magazine on the topic of Metaverse - A Virtual Experience.TECHNICAL PROJECTSTerra World - A 2D Unity Game  August 2021 I used Tilemaps to create the UI of this action-adventure game and Reinforcement Learning to help train AI agents in the game which acted as enemies to the main character.Web Application to report drug trafficking anonymously  March 2022This was our project for Smart India Hackathon 2022.We  created  a  web  app  to  help  users  report  complaints  related  to  drug  trafficking anonymously with the help of maps using Leaflet.  We also used NLP techniques to extract information from the complaints.Finance Edu - An UE4 Game  February  2022 Worked on an interactive game using UE4 that aims to teach financial literacy to individuals.Android Application pertaining to waste management September 2021 Developed an android application using Java for segregating waste materials and selling reusable products using an auction technique.Interview Assistance and Assessment  July 2022 Developed  an  interactive  visual  tool  to  help  students  practice  mock  interviews  and programming exercises.AWARDS AND ACHIEVEMENTS 2022 - 1st prize at the hackathon event BUGSQUASH held by Technical Team of SIES GST 2022 - 1st prize for the idea presentation competition IDEATON held by by IETE SIES GST2022 - 2nd runner up at the National Level Poster Competition event held by CSI SIES GST2021 - 3rd prize for PPT and poster competition at the PROMETHEAN event held by SIES GSTCOURSES AND CERTIFICATIONS Introduction to C# Programming and Unity - Coursera Deep Learning Specialization (Andrew NG) - Coursera The Web Developer Bootcamp 2022 (Colt Steele)  - Udemy PERSONAL PROFILE Date of Birth -  06/01/2003Languages Known - English, Hindi, MarathiNationality - IndianHobbies - Track, Playing Video Games, Listening to MusicDECLARATIONI hereby declare that the above information is true to the best of my knowledge and belief. Pratham Yashwante";
  let predict = await py.call(pymodule, "rp", test); // call predict

  console.log(predict);
});
