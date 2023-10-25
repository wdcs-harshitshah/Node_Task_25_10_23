const express = require("express");
const connectDb = require("./config/dbConnect.js");
const errorHandler = require("./middleware/errorHandler.js");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 5001;

app.use(express.json());
app.use("/api/students", require("./routes/studentRoutes.js"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server Running on Port: ${port}`);
});
