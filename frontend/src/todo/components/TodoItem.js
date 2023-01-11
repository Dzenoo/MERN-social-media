import React, { useState } from "react";
import "./TodoItem.css";

const TodoItem = (props) => {
  const { image, title, description, category } = props;

  return (
    <li className="todo_item">
      <div className="todo_title">
        <img src={image} alt="img" />
        <h1>{title}</h1>
      </div>

      <div className="todo_description">
        <p>{description}</p>
        <span>{category}</span>
        <img src={image} alt="img" />
      </div>
    </li>
  );
};

export default TodoItem;
