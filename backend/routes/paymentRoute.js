const express = require("express");
const router = express.Router();

const { executePayment } = require("../controllers/paymentController");

router.route("/").post(executePayment);

module.exports = router;
