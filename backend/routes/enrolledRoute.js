const express = require("express");
const router = express.Router();

const {
  getEnrolledCourses,
  createEnrolledCourse,
  updateEnrolledCourse,
} = require("../controllers/enrolledController");

router.route("/").get(getEnrolledCourses).post(createEnrolledCourse);

router.route("/:id").put(updateEnrolledCourse);

module.exports = router;
