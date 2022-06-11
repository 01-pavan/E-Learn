const express = require("express");
const router = express.Router();
const {
  getCourses,
  getCourse,
  createCourse,
} = require("../controllers/courseController");

router.route("/").get(getCourses).post(createCourse);

router.route("/:id").get(getCourse);

module.exports = router;
