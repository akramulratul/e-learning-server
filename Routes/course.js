const express = require("express");

const { addCourse, getCourse, deleteCourse, getCourseById } = require("../Controller/Course");

const router = express.Router();


//Router
router.post("/courses", addCourse)
router.get("/courses", getCourse)
router.delete("/courses/:id", deleteCourse)
router.get("/courses/:slug", getCourseById)



module.exports = router;