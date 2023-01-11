const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user-routes");
const todoRoutes = require("./routes/todo-routes");
const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json());

app.use("/api/users", userRoutes);
app.use("/api/todos", todoRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

mongoose
  .connect(
    "mongodb+srv://Dzenis:BZjS88NZKV9lV0et@cluster0.8suhkcc.mongodb.net/Todo?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(8000);
  })
  .catch((err) => {
    console.log(err);
  });
