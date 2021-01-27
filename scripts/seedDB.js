const mongoose = require("mongoose");
const db = require("../models");
var ObjectId = require("mongodb").ObjectID;

// Think about adding a 'ref' to the models so that a log in user can favorite
// one of the docs and the 'favoritedBy' is an array field on that doc
// This file empties the Profiles collection and inserts the profiles below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project3");

const profilesSeed = [
  {
    firstName: "Andrew",
    lastName: "Circelli",
    age: 28,
    graduationYear: 2025,
    phoneNumber: 3308880000,
    email: "email@gmail.com",
    university: "Miami University",
    achievements: ["Student Body President", "Dean's Club"],
    GPA: 3.5,
    SAT: 1250,
    ACT: 28,
    extracurriculars: ["The Arts", "Student Government", "Debate Club"],
    priorWorkExperience: ["Key Bank Internship"],
    userRef: { _id: ObjectId("600b55e6136de871f1dd4311") },
  },
  {
    firstName: "Andrew",
    lastName: "Gunter",
    age: 30,
    graduationYear: 2025,
    phoneNumber: 3308880000,
    email: "email@gmail.com",
    branch: "Army",
    height: 60,
    weight: 175,
    BMI: 10,
    DesiredMilitaryOccupationalSpecialty: "Army MOS",
    userRef: { _id: ObjectId("600b55e6136de871f1dd4312") },
  },
  {
    firstName: "Collin",
    lastName: "Bryan",
    age: 26,
    graduationYear: 2025,
    phoneNumber: 3308880000,
    email: "email@gmail.com",
    sport: "Football",
    position: "QB",
    height: 60,
    weight: 175,
    achievements: ["First Team All State", "Team Captain"],
  },
  {
    userName: "userName1",
    password: "password",
  },
  {
    userName: "userName2",
    password: "password",
  },
];

async function myFunc() {
  const users = await db.UserModel.create([profilesSeed[3], profilesSeed[4]]);
  console.log(users);
}

// myFunc();

// create document on Student model in Profiles collection
const createStudent = () => db.StudentModel.create(profilesSeed[0]);
// create document on Military model in Profiles collection
const createCadet = () => db.CadetModel.create(profilesSeed[1]);
// create document on Athlete model in Profiles collection
const createAthlete = () => db.AthleteModel.create(profilesSeed[2]);

Promise.all([createStudent(), createCadet(), createAthlete()])
  .then((dbModel) => console.log(dbModel))
  .catch((err) => console.log(err));

// db.ProfileModel.findOne({ profileType: "Student" })
//   .populate("userRef")
//   .exec(function (err, profile) {
//     if (err) return handleError(err);
//     console.log(profile.userRef);
//   });

// db.ProfileModel.findOne({ profileType: "Cadet" })
//   .populate({
//     path: "userRef",
//     model: "User",
//   })
//   .exec(function (err, profile) {
//     if (err) return handleError(err);
//     console.log(profile.userRef);
//   });

function myFunc2() {
  db.ProfileModel.find()
    .sort({ createdOn: "1" })
    .exec()
    .then((profileDocs) => console.log(profileDocs))
    .catch((err) => {
      res.status(422).json({
        message: "Error finding the profiles",
        error: err,
      });
    });
}

// myFunc2();
