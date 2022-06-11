const mongoose = require("mongoose");

// const sectionInfoSchema = new mongoose.Schema({
//   videoName: {
//     type: String,
//   },
//   videLink: {
//     type: String,
//   },
// });

// const CourseContentSchema = new mongoose.Schema({
//   sectionInfo: [{ type: mongoose.Schema.Types.ObjectId, ref: "Info" }],
// });

const courseSchema = new mongoose.Schema(
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
    author: {
      type: String,
    },
    thumbNailUrl: {
      type: String,
    },
    courseContent: [
      {
        sectionName: {
          type: String,
          required: [true, "Please add a name"],
        },
        sectionInfo: [
          {
            type: mongoose.Schema.Types.Mixed,
            ref: "Info",
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", courseSchema);
