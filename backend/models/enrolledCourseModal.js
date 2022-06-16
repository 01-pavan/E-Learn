const mongoose = require("mongoose");

const enrolledSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    course: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
      ref: "Course",
    },
    progress: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("EnrolledCourses", enrolledSchema);
