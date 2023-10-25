const asyncHandler = require("express-async-handler");
const Student = require("../models/studentModel.js");

const getStudents = asyncHandler(async (req, res) => {
  const students = await Student.find();
  res.status(200).json(students);
});

const createStudent = asyncHandler(async (req, res) => {
  console.log("The Request Body is:", req.body);
  const { name, email, parentsphoneNo, rollNo, standard, div } = req.body;
  if (!name || !email || !parentsphoneNo || !rollNo || !standard || !div) {
    res.status(404);
    throw new Error("All Fields are Mandatory");
  }
  const student = await Student.create({
    name,
    email,
    parentsphoneNo,
    rollNo,
    standard,
    div,
  });
  res.status(201).json(student);
});

const getStudent = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id);
  if (!student) {
    res.status(404);
    throw new Error("Student Not Found");
  }
  res.status(200).json(student);
});

const updateStudent = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id);
  if (!student) {
    res.status(404);
    throw new Error("Student Not Found");
  }
  const updatedStudent = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedStudent);
});

const deleteStudent = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id);
  if (!student) {
    res.status(404);
    throw new Error("Student Not Found");
  }
  // await Student.remove();
  // res.status(200).json(deleteStudent);
  const deletedStudent = await Student.findByIdAndDelete(req.params.id);
  res.status(200).json(deleteStudent);
});

module.exports = {
  getStudents,
  createStudent,
  getStudent,
  updateStudent,
  deleteStudent,
};
