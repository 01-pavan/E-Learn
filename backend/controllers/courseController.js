const asyncHandler = require("express-async-handler");

const Course = require("../models/courseModel");

//@desc get courses
//@route  /api/courses
//@ access public

const getCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find();
  res.status(200).json(courses);
});

const createCourse = asyncHandler(async (req, res) => {
  const { title, description, price, thumbNailUrl, sectionInfo } = req.body;

  if (!title || !description || !price) {
    res.status(400);
    throw new Error("please add all details");
  }

  const course = await Course.create({
    title,
    description,
    price,
    thumbNailUrl,
    sectionInfo,
  });
  res.status(201).json(course);
});

module.exports = {
  getCourses,
  createCourse,
};
