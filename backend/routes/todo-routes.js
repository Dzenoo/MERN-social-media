const express = require("express");
const { check } = require("express-validator");

const todoContollers = require("../controllers/todo-controllers");

const router = express.Router();

router.get("/user/:uid", todoContollers.getTodoByUserId);

router.post(
  "/new",
  [
    check("title").not().isEmpty(),
    check("description").not().isEmpty(),
    check("category").not().isEmpty(),
  ],
  todoContollers.createTodo
);

router.patch("/:tid", todoContollers.updateTodo);

router.delete("/:tid", todoContollers.deleteTodo);

module.exports = router;
