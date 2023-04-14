const express = require("express");
const mongoose = require("mongoose");
var favicon = require("serve-favicon");
const app = express();
const path = require("path");
const router = express.Router();
require("dotenv").config();
var cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const CourseRouter = require("./Routes/course");
// //
const { readdirSync } = require("fs");
const port = process.env.PORT || 5000;
// // Connect with database
const DB =
  "mongodb+srv://akramulratul:dfBR3CpVGVcV8mDQ@cluster0.kmszq3s.mongodb.net/basiceducation?retryWrites=true&w=majority";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log("Database Error ---->", error);
  });

readdirSync("./Routes").map((file) =>
  app.use("/", require("./Routes/" + file))
);
// // Middleware
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());
// app.use("/public", express.static(path.join(__dirname, "src/uploads")));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "API is okay if you want to check",
    routes: {
      courses: "/courses",
    },
  });
});
app.use("/", router);
// Router Handler

// //404 Handler
app.use((req, res, next) => {
  next("Request URL not found!");
});
app.use((error, req, res, next) => {
  if (error) {
    res.status(500).send(error);
  } else {
    res.status(500).send("There was an Error!");
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
