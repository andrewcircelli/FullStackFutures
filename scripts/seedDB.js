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
    university: "Miami University",
    achievements: "Student Body President",
    userRef: { _id: ObjectId("600b55e6136de871f1dd4311") },
  },
  {
    firstName: "Andrew",
    lastName: "Gunter",
    age: 30,
    branch: "Army",
    userRef: { _id: ObjectId("600b55e6136de871f1dd4312") },
  },
  {
    firstName: "Collin",
    lastName: "Bryan",
    age: 26,
    sport: "Football",
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

// Promise.all([createStudent(), createCadet(), createAthlete()])
//   .then((dbModel) => console.log(dbModel))
//   .catch((err) => console.log(err));

// db.ProfileModel.findOne({ profileType: "Student" })
//   .populate("userRef")
//   .exec(function (err, profile) {
//     if (err) return handleError(err);
//     console.log(profile.userRef);
//   });

db.ProfileModel.findOne({ profileType: "Cadet" })
  .populate({
    path: "userRef",
    model: "User",
  })
  .exec(function (err, profile) {
    if (err) return handleError(err);
    console.log(profile.userRef);
  });
