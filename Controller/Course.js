const slugify = require("slugify");
const Course = require("../Model/Course");

exports.addCourse = async (req, res) => {
  console.log(req.body);
  const course = await new Course({
    ...req.body,
    slug: slugify(req.body.title),
    module_details: req.body.module,
  });
  const data = await course.save();
  if (data) res.status(201).json({ message: "Course created!" });
};

exports.getCourse = async (req, res) => {
  try {
    const courses = await Course.find({});
    res.status(200).json({ courses });
  } catch (error) {}
};

exports.getCourseById = async (req, res) => {
  const { slug } = req.params;
  try {
    const course = await Course.find({ slug: slug });
    if (course) {
      res.status(200).json({ course });
    } else {
      res.status(400).json({ message: "Not found" });
    }
  } catch (error) {}
};
exports.deleteCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const course = await Course.findByIdAndDelete({ _id: id });
    res.json({ message: "delete course" });
  } catch (error) {}
};
