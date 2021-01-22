const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Profiles collection and inserts the profiles below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/profiles");

const profilesSeed = [
  {
    first_name: "Andrew",
    last_name: "Circelli",
    age: 28,
    university: "Miami University",
    achievements: "Student Body President",
  },
  {
    first_name: "Andrew",
    last_name: "Gunter",
    age: 30,
    branch: "Army",
  },
  {
    first_name: "Collin",
    last_name: "Bryan",
    age: 26,
    sport: "Football",
  },
];

const createStudent = () => db.Student.create(profilesSeed[0]);
const createMilitary = () => db.Military.create(profilesSeed[1]);
const createAthlete = () => db.Athlete.create(profilesSeed[2]);

Promise.all([createStudent(), createMilitary(), createAthlete()])
  .then((dbModel) => console.log(dbModel))
  .catch((err) => console.log(err));
