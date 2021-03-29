const mongoose = require("mongoose");
const db = require("../models");
var ObjectId = require("mongodb").ObjectID;

// Think about adding a 'ref' to the models so that a log in user can favorite
// one of the docs and the 'favoritedBy' is an array field on that doc
// This file empties the Profiles collection and inserts the profiles below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/brightfutures"
);

const profilesSeed = [
  // {
  //   firstName: "Andrew",
  //   lastName: "Smith",
  //   age: 18,
  //   graduationYear: 2021,
  //   phoneNumber: 3308880000,
  //   email: "andrewcircelli@gmail.com",
  //   university: "Miami University",
  //   achievements: ["Student Body President", "Dean's Club"],
  //   GPA: 3.5,
  //   SAT: 1250,
  //   ACT: 28,
  //   extracurriculars: ["The Arts", "Student Government", "Debate Club"],
  //   priorWorkExperience: ["Key Bank Internship"],
  //   userRef: { _id: ObjectId("602ea9976296b45dab834ea5") },
  // },
  // {
  //   firstName: "Bradley",
  //   lastName: "Wilson",
  //   age: 17,
  //   graduationYear: 2026,
  //   phoneNumber: 3308880000,
  //   email: "bradelywilson@gmail.com",
  //   branch: "Armed Forces",
  //   height: 66,
  //   weight: 175,
  //   BMI: 10,
  //   DesiredMilitaryOccupationalSpecialty: "Corps of Engineers",
  //   userRef: { _id: ObjectId("602ea9976296b45dab834ea6") },
  // },
  // {
  //   firstName: "Collin",
  //   lastName: "Taylor",
  //   age: 16,
  //   graduationYear: 2027,
  //   phoneNumber: 3308880000,
  //   email: "collintaylor@gmail.com",
  //   sport: "Footbal",
  //   position: "Quarterback",
  //   height: 70,
  //   weight: 175,
  //   achievements: ["First Team All State", "Team Captain"],
  //   userRef: { _id: ObjectId("602eaaab40b3125c6ebdde2c") },
  // },
  // {
  //   firstName: "Tom",
  //   lastName: "Haller",
  //   age: 15,
  //   graduationYear: 2027,
  //   phoneNumber: 3308880000,
  //   email: "tomhaller@gmail.com",
  //   university: "Babson College",
  //   achievements: ["Dean's Club", "Lead Singer"],
  //   GPA: 3.5,
  //   SAT: 1250,
  //   ACT: 28,
  //   extracurriculars: ["Boy Scout", "Newspaper", "Chess Club"],
  //   priorWorkExperience: ["Newspaper Internship"],
  //   userRef: { _id: ObjectId("602ea9976296b45dab834ea5") },
  // },
  // {
  //   firstName: "Adam",
  //   lastName: "Jones",
  //   age: 18,
  //   graduationYear: 2021,
  //   phoneNumber: 3308880000,
  //   email: "adamjones@gmail.com",
  //   branch: "Armed Forces",
  //   height: 79,
  //   weight: 180,
  //   BMI: 12,
  //   DesiredMilitaryOccupationalSpecialty: "Field Artillery",
  //   userRef: { _id: ObjectId("602ea9976296b45dab834ea6") },
  // },
  // {
  //   firstName: "Tyler",
  //   lastName: "Freeman",
  //   age: 18,
  //   graduationYear: 2021,
  //   phoneNumber: 3308880000,
  //   email: "tylerfreeman@gmail.com",
  //   sport: "Golf",
  //   position: "Plus-Six Handicap",
  //   height: 66,
  //   weight: 150,
  //   achievements: ["State Champion", "Team Captain"],
  //   userRef: { _id: ObjectId("602eaaab40b3125c6ebdde2c") },
  // },
  // {
  //   firstName: "Buddy",
  //   lastName: "Joe",
  //   age: 18,
  //   graduationYear: 2021,
  //   phoneNumber: 3308880000,
  //   email: "buddyjoe@gmail.com",
  //   university: "Tufts College",
  //   achievements: ["Med Club", "Graphic Designer"],
  //   GPA: 3.9,
  //   SAT: 1200,
  //   ACT: 30,
  //   extracurriculars: ["Student Media", "Biology Club", "Checkers Club"],
  //   priorWorkExperience: ["Hospital Shadow"],
  //   userRef: { _id: ObjectId("602ea9976296b45dab834ea5") },
  // },
  // {
  //   firstName: "Tony",
  //   lastName: "Homes",
  //   age: 16,
  //   graduationYear: 2023,
  //   phoneNumber: 3308880000,
  //   email: "tonyhomes@gmail.com",
  //   branch: "Air Force",
  //   height: 77,
  //   weight: 174,
  //   BMI: 9,
  //   DesiredMilitaryOccupationalSpecialty: "Aviation",
  //   userRef: { _id: ObjectId("602ea9976296b45dab834ea6") },
  // },
  // {
  //   firstName: "Justin",
  //   lastName: "Rubble",
  //   age: 16,
  //   graduationYear: 2023,
  //   phoneNumber: 3308880000,
  //   email: "justinrubble@gmail.com",
  //   sport: "Basketball",
  //   position: "Center",
  //   height: 75,
  //   weight: 155,
  //   achievements: ["Second Team All State", "Co-Captain"],
  //   userRef: { _id: ObjectId("602eaaab40b3125c6ebdde2c") },
  // },
  {
    firstName: "Annie",
    lastName: "Field",
    age: 21,
    graduationYear: 2021,
    phoneNumber: 3308880000,
    email: "anniefield@gmail.com",
    university: "Brantley College",
    achievements: ["Computer Wiz", "Web Designer"],
    GPA: 3.9,
    SAT: 1200,
    ACT: 30,
    extracurriculars: ["Student Design", "UI Dev Club"],
    priorWorkExperience: ["Google Internship"],
    userRef: { _id: ObjectId("602ea9976296b45dab834ea5") },
  },
  {
    firstName: "Amy",
    lastName: "Spears",
    age: 17,
    graduationYear: 2022,
    phoneNumber: 3308880000,
    email: "amyspears@gmail.com",
    branch: "Naval Academy",
    height: 55,
    weight: 110,
    BMI: 4,
    DesiredMilitaryOccupationalSpecialty: "Special Forces",
    userRef: { _id: ObjectId("602ea9976296b45dab834ea6") },
  },
  {
    firstName: "Abby",
    lastName: "Rhodes",
    age: 12,
    graduationYear: 2027,
    phoneNumber: 3308880000,
    email: "abbyrhodes@gmail.com",
    sport: "Softball",
    position: "Pitcher",
    height: 44,
    weight: 89,
    achievements: ["All State under 15", "Undefeated"],
    userRef: { _id: ObjectId("602eaaab40b3125c6ebdde2c") },
  },
];

// create document on Student model in Profiles collection
const createStudent = () => db.StudentModel.create(profilesSeed[0]);
// create document on Military model in Profiles collection
const createCadet = () => db.CadetModel.create(profilesSeed[1]);
// create document on Athlete model in Profiles collection
const createAthlete = () => db.AthleteModel.create(profilesSeed[2]);

Promise.all([createStudent(), createCadet(), createAthlete()])
  .then((dbModel) => console.log(dbModel))
  .catch((err) => console.log(err));

// db.ProfileModel.findOne({ profileType: "student" })
//   .populate("userRef")
//   .exec(function (err, profile) {
//     if (err) return handleError(err);
//     console.log(profile.userRef);
//   });

// db.ProfileModel.findOne({ profileType: "cadet" })
//   .populate({
//     path: "userRef",
//     model: "User",
//   })
//   .exec(function (err, profile) {
//     if (err) return handleError(err);
//     console.log(profile.userRef);
//   });

// db.ProfileModel.findOne({ profileType: "athlete" })
//   .populate({
//     path: "userRef",
//     model: "User",
//   })
//   .exec(function (err, profile) {
//     if (err) return handleError(err);
//     console.log(profile.userRef);
//   });

// function myFunc2() {
//   db.ProfileModel.find()
//     .sort({ createdOn: "1" })
//     .exec()
//     .then((profileDocs) => console.log(profileDocs))
//     .catch((err) => {
//       res.status(422).json({
//         message: "Error finding the profiles",
//         error: err,
//       });
//     });
// }

// myFunc2();
