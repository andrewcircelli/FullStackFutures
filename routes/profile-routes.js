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
        .then((profileDocs) => res.status(200).json(profileDocs))
        .catch((err) => {
          res.status(422).json({
            message: "Error finding the profiles",
            error: err,
          });
        });
    });
  profileRouter
    .route("/:profileType")
    // GET: get all (profileType) profile documents in profiles collection
    .all((req, res, next) => {
      const { profileType } = req.params;
      req.profileType = profileType;
      switch (profileType) {
        case "student":
          return (req.Model = db.StudentModel());
        case "cadet":
          return (req.Model = db.CadetModel());
        case "athlete":
          return (req.Model = db.AthleteModel());
      }
      next();
    })
    .get((req, res) => {
      const { profileType } = req;
      db.ProfileModel.find({ profileType }, (err, docs) => {
        if (err) {
          return res.status(400).json(err);
        }
        res.status(200).send(docs);
      });
    })
    // POST: post, create a new profile document based on req.Model
    .post((req, res) => {
      const { Model } = req;
      const dbModel = new Model(req.body);
      dbModel.save((err, doc) => {
        if (err) {
          return res.status(400).json(err);
        }
        res.status(200).json(doc);
      });
    });
  return profileRouter;
}

module.exports = router();
