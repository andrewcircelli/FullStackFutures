const mongoose = require("mongoose");
const db = require("../models");
var ObjectId = require("mongodb").ObjectID;

// Think about adding a 'ref' to the models so that a log in user can favorite
// one of the docs and the 'favoritedBy' is an array field on that doc
// This file empties the Profiles collection and inserts the profiles below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/brightfutures"
);

const userSeed = [
  {
    username: "admin",
    password: "pwd",
  },
  {
    username: "test",
    password: "pwd",
  },
];

async function myFunc() {
  const users = await db.UserModel.create([userSeed[0], userSeed[1]]);
  console.log(users);
}

myFunc();

// // create document on Student model in Profiles collection
// const createStudent = () => db.StudentModel.create(profilesSeed[0]);
// // create document on Military model in Profiles collection
// const createCadet = () => db.CadetModel.create(profilesSeed[1]);
// // create document on Athlete model in Profiles collection
// const createAthlete = () => db.AthleteModel.create(profilesSeed[2]);

// Promise.all([createStudent(), createCadet(), createAthlete()])
//   .then((dbModel) => console.log(dbModel))
//   .catch((err) => console.log(err));

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
