const express = require("express");
const router = express.Router();

const {
  createComment,
  getComments,
} = require("../controllers/commentController");

router.route("/").get(getComments).post(createComment);

module.exports = router;
