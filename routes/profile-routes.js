const express = require("express");
const profileRouter = express.Router();
const db = require("../models");

function router() {
  profileRouter
    .route("/")
    // GET: get list of all profiles using Promise syntax
    .get((req, res) => {
      db.ProfileModel.find()
        .sort({ createdOn: "1" })
        .exec()
        .then((profileDocs) => res.status(200).send(profileDocs))
        .catch((err) => {
          res.status(422).json({
            message: "Error finding the profiles",
            error: err,
          });
        });
    });

  profileRouter
    .route("/student")
    // GET: get all student profile documents in profiles collection
    .get((req, res) => {
      db.ProfileModel.find({ profileType: "student" }, (err, studentDocs) => {
        if (err) {
          return res.status(400).json(err);
        }
        res.status(200).send(studentDocs);
      });
    })
    // POST: post a new student profile document
    .post((req, res) => {
      const dbStudent = new db.StudentModel(req.body);
      dbStudent.save((err, studentDoc) => {
        if (err) {
          return res.status(400).json(err);
        }
        res.status(200).json(studentDoc);
      });
    });
  profileRouter
    .route("/athlete")
    // GET: get all athlete profile documents in profiles collection
    .get((req, res) => {
      db.ProfileModel.find({ profileType: "athlete" }, (err, athleteDocs) => {
        if (err) {
          return res.status(400).json(err);
        }
        res.status(200).send(athleteDocs);
      });
    })
    // POST: post a new athlete profile document
    .post((req, res) => {
      const dbAthlete = new db.AthleteModel(req.body);
      dbAthlete.save((err, athleteDoc) => {
        if (err) {
          return res.status(400).json(err);
        }
        res.status(200).json(athleteDoc);
      });
    });
  profileRouter
    .route("/cadet")
    // GET: get all cadet profile documents in profiles collection
    .get((req, res) => {
      db.ProfileModel.find({ profileType: "cadet" }, (err, cadetDocs) => {
        if (err) {
          return res.status(400).json(err);
        }
        res.status(200).send(cadetDocs);
      });
    })
    // POST: post a new cadet profile document
    .post((req, res) => {
      const dbCadet = new db.CadetModel(req.body);
      dbCadet.save((err, cadetDoc) => {
        if (err) {
          return res.status(400).json(err);
        }
        res.status(200).json(cadetDoc);
      });
    });
  return profileRouter;
}

module.exports = router();
