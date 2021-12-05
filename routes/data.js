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

module.exports = router;