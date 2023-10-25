const express = require("express");
const router = express.Router();

const {
  getStudents,
  createStudent,
  getStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController.js");

router.route("/").get(getStudents).post(createStudent);
router.route("/:id").get(getStudent).put(updateStudent).delete(deleteStudent);

module.exports = router;
