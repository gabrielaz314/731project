var express = require('express');
var router = express.Router();
var db = require('../db.js');
var _ = require('underscore');

const {
  calendar,
  fulfilled_courses,
  transfer_courses,
  non_related_courses
} = require('./testdata')

router.get("/test", async (req, res) => {
  try {
    var data = await db.getFulfilledCourses("123456");
    var bySemester = _.groupBy(data, item => item.semesterTerm);
    res.status(200).json(bySemester);
  } catch (err) {
    res.status(400).json({
      message: "An error occured",
      err
    });
  }
});

router.get("/list", async (req, res) => {
  try {
    var data = await db.getAllCourses();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({
      message: "An error occured",
      err
    });
  }
});

router.get("/courses-by-semester/:id", async (req, res) => {
  let { id } = req.params;
  id = String(id)
  try {
    // var data = await db.getFulfilledCourses(id);
    // var bySemester = _.groupBy(data, item => item.semesterTerm);
    res.status(200).json(calendar);
  } catch (err) {
    res.status(400).json({
      message: "An error occured",
      err
    });
  }
});
router.get("/fulfilled-requirements/:id", async (req, res) => {
  let { id } = req.params;
  id = String(id)
  try {
    res.status(200).json(fulfilled_courses);
  } catch (err) {
    res.status(400).json({
      message: "An error occured",
      err
    });
  }
});
router.get("/transfer-credits/:id", async (req, res) => {
  let { id } = req.params;
  id = String(id)
  try {
    res.status(200).json(transfer_courses);
  } catch (err) {
    res.status(400).json({
      message: "An error occured",
      err
    });
  }
});
router.get("/non-related/:id", async (req, res) => {
  let { id } = req.params;
  id = String(id)
  try {
    res.status(200).json(non_related_courses);
  } catch (err) {
    res.status(400).json({
      message: "An error occured",
      err
    });
  }
});

module.exports = router;