import React from "react";

import "./TodoList.css";

const TodoList = ({ todos }) => {
  return (
    <ul className="todo_list_menu">
      {todos.map((todo) => (
        <li className="todo_list_item" key={todo._id}>
          <div className="todo_profile_img">
            <img src={`http://localhost:8000/${todo.creator.image}`} alt="" />
            <h1>{todo.creator.name}</h1>
          </div>
          <ul className="todo_list_submenu">
            <li className="todo_list_subitem" key={todo._id}>
              <img src={`http://localhost:8000/${todo.image}`} alt="" />
              <h1>{todo.title}</h1>
              <p>{todo.description}</p>
              <span>{todo.category}</span>
            </li>
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
