const mongoose = require("mongoose");

const sectionInfoSchema = mongoose.Schema({
  videoName: String,
  videLink: String,
});
const courseContentSchema = mongoose.Schema({
  sectionName: String,
  sectionInfo: [sectionInfoSchema],
});

const courseSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a name"],
    },
    description: {
      type: String,
      required: [true, "Please add a short description"],
    },
    price: {
      type: Number,
    },
    thumbNailUrl: {
      type: String,
    },
    courseContent: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Course",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", courseSchema);
