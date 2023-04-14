const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    money: {
      type: Number,
      required: true,
    },
    images: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    starting_date: {
      type: String,
      required: false,
    },
    mentor_image: {
      type: String,
      required: false,
    },
    mentorName: {
      type: String,
      required: false,
    },    
    enroll_form: {
      type: String,
      required: true,
    },
    module_details:[
      {
        title: {
          type:String,
          required: true,
        },
        detail:{
          type:String,
          required: true,
        },
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);
