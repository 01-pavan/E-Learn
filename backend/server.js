const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8000;
const connectDB = require("./config/db");
var cors = require("cors");

//connect to database

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "welcome to E-Learn" });
});

//Routes
app.use("/api/courses", require("./routes/courseRoute"));
app.use("/api/comments", require("./routes/commentRoute"));
app.listen(PORT, () => console.log(`server started on port ${PORT} 🎉🎉`));
