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

          <div className="todo_item_subItem">
            {user.todos === 0 ? (
              <h1>No todos for users</h1>
            ) : (
              user.todos.map((todo) => (
                <div className="itm" key={todo.id}>
                  <img src={`http://localhost:8000/${todo.image}`} alt="" />
                  <h1>{todo.title}</h1>
                  <p>{todo.description}</p>
                  <span>{todo.category}</span>
                </div>
              ))
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
