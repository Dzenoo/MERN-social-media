import React from "react";

import TodoItem from "./TodoItem";

import "./TodoList.css";

const TodoList = (props) => {
  let content;

  if (props.todos.length === 0) {
    content = <div>No available todos</div>;
  } else {
    content = (
      <ul className="todo_list_menu">
        {props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            title={todo.title}
            category={todo.category}
            description={todo.description}
            image={todo.image}
          />
        ))}
      </ul>
    );
  }

  return content;
};

export default TodoList;
