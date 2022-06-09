const express = require("express");
const router = express.Router();
const { getCourses, createCourse } = require("../controllers/courseController");

router.route("/").get(getCourses).post(createCourse);

module.exports = router;
