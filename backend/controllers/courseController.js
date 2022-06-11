const asyncHandler = require("express-async-handler");

const Course = require("../models/courseModel");

//@desc get courses
//@route  /api/courses
//@ access public

const getCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find();
  res.status(200).json(courses);
});

//@desc get SINGLE course
//@route  /api/courses/:id
//@ access public

const getCourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);
  console.log("in getcourse");

  if (!course) {
    res.status(404);
    throw new Error("course not found");
  }
  res.status(200).json(course);
});

const createCourse = asyncHandler(async (req, res) => {
  const { title, description, price, thumbNailUrl, author, courseContent } =
    req.body;

  console.log(
    "from backend",
    title,
    description,
    price,
    thumbNailUrl,
    courseContent[0].sectionInfo
  );

  // if (!title || !description || !price) {
  //   res.status(400);
  //   throw new Error("please add all details");
  // }

  const course = await Course.create({
    title,
    description,
    price,
    thumbNailUrl,
    author,
    courseContent,
  });
  res.status(201).json(course);
});

module.exports = {
  getCourses,
  getCourse,
  createCourse,
};
