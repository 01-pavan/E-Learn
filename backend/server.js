const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8000;
const connectDB = require("./config/db");
var cors = require("cors");
const path = require("path");
//connect to database

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//Routes
app.use("/api/courses", require("./routes/courseRoute"));
app.use("/api/comments", require("./routes/commentRoute"));
app.use("/api/enrolledCourses", require("./routes/enrolledRoute"));
app.use("/api/payment", require("./routes/paymentRoute"));

//serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(__dirname, "../", "frontend", "build", "index.html")
  );
} else {
  app.get("/", (req, res) => {
    res.status(200).json({ message: "welcome to E-Learn" });
  });
}
app.listen(PORT, () => console.log(`server started on port ${PORT} 🎉🎉`));
