const { db } = require("../models/");

// const to test just returning certain fields from document
const testReturnedFields = "firstName, lastName, age";

module.exports = function (router) {
  // GET: get list of all profiles using callback syntax
  router.get("/profiles", (req, res) => {
    db.ProfileModel.find({}, (err, results) => {
      if (err) {
        return res.status(400).json(err);
      }
      res.status(200).send(results);
    });
  });
  // GET: get list of all profiles using Promise syntax
  router.get("/profiles", (req, res) => {
    db.ProfileModel.find()
      .sort({ createdOn: "1" })
      .exec()
      .then((docs) => res.status(200).json(docs))
      .catch((err) =>
        res.status(500).json({
          message: "Error finding the profiles",
          error: err,
        })
      );
  });
  // GET: get list of all Student Profiles using callback syntax
  router.get("/profiles", (req, res) => {
    db.ProfileModel.find(
      { profileType: "student" },
      testReturnedFields,
      (err, results) => {
        if (err) {
          return res.status(400).json(err);
        }
        res.status(200).send(results);
      }
    );
  });
  router.put("/profiles", (req, res) => {
    db.ProfileModel.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  });
  // POST: post a new profile (student, military, athlete) document
  router.post("/profiles/student", (req, res) => {
    const dbStudent = new db.Model.Student(req.body);
    dbStudent.save((err, student) => {
      if (err) {
        return res.status(400).json(err);
      }
      res.status(200).json(student);
    });
  });
};
