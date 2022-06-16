const asyncHandler = require("express-async-handler");

const Comment = require("../models/commentModal");

const createComment = asyncHandler(async (req, res) => {
  const { courseId, userName, comment } = req.body;

  const createdComment = await Comment.create({
    courseId,
    userName,
    comment,
  });

  res.status(201).json(createdComment);
});
const getComments = asyncHandler(async (req, res) => {
  const { course_id } = req.query;

  const comments = await Comment.find({ courseId: course_id });

  res.status(200).json(comments);
});

module.exports = {
  createComment,
  getComments,
};
