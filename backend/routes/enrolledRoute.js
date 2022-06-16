const express = require("express");
const router = express.Router();

const {
  getEnrolledCourses,
  createEnrolledCourse,
} = require("../controllers/enrolledController");

router.route("/").get(getEnrolledCourses).post(createEnrolledCourse);

module.exports = router;
