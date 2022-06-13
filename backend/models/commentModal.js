const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Course",
    },
    userName: {
      type: String,
      required: [true, "please add a name"],
    },
    comment: {
      type: String,
      required: [true, "please add a comment"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", commentSchema);
