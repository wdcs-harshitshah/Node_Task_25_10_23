const mongoose = require("mongoose");
const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the Student Name"],
    },
    email: {
      type: String,
      required: [true, "Please add the Email Address"],
    },
    parentsphoneNo: {
      type: Number,
      required: [true, "Please add the Parents Phone Number "],
      
    },
    rollNo: {
      type: Number,
      required: [true, "Please add Students Roll No "],
    },
    standard: {
      type: Number,
      required: [true, "Please add Students Class "],
    },
    div: {
      type: String,
      required: [true, "Please add Students Division"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Student", studentSchema);
