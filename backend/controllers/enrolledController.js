const asyncHandler = require("express-async-handler");

const EnrolledCourse = require("../models/enrolledCourseModal");

const createEnrolledCourse = asyncHandler(async (req, res) => {
  const { userId, course, progress } = req.body;

  const enrolledCourse = await EnrolledCourse.create({
    userId,
    course,
    progress,
  });
  res.status(201).json(enrolledCourse);
});

const getEnrolledCourses = asyncHandler(async (req, res) => {
  const { user_id } = req.query;
  const enrolledCourses = await EnrolledCourse.find({ userId: user_id });
  res.status(200).json(enrolledCourses);
});

const updateEnrolledCourse = asyncHandler(async (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  const updatedCourse = await EnrolledCourse.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(201).json(updatedCourse);
});

module.exports = {
  createEnrolledCourse,
  getEnrolledCourses,
  updateEnrolledCourse,
};
