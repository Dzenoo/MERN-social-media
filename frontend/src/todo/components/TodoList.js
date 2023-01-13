import React from "react";

import "./TodoList.css";

const TodoList = ({ users }) => {
  return (
    <ul className="todo_list_menu">
      {users.map((user) => (
        <li className="todo_list_item" key={user._id}>
          <div className="todo_profile_img">
            <img src={`http://localhost:8000/${user.image}`} alt="" />
            <h1>{user.name}</h1>
          </div>
          <ul className="todo_list_submenu">
            {user.todos.length === 0 ? (
              <h1>No todos for user</h1>
            ) : (
              user.todos.map((todo) => (
                <li className="todo_list_subitem" key={todo.id}>
                  <img src={`http://localhost:8000/${todo.image}`} alt="" />
                  <h1>{todo.title}</h1>
                  <p>{todo.description}</p>
                  <span>{todo.category}</span>
                </li>
              ))
            )}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
