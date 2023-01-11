import React from "react";

import TodoList from "../components/TodoList";

import img from "../../shared/assets/img.png";

const DUMMY_ITEMS = [
  {
    id: "i1",
    title: "Go to shop",
    image: img,
    description: "Today i must go to shop",
    category: "Shopping",
  },
  {
    id: "i2",
    title: "Go to shop",
    image: img,
    description: "Today i must go to shop",
    category: "Education",
  },
  {
    id: "i3",
    title: "Go to shop",
    image: img,
    description: "Today i must go to shop",
    category: "Fitness",
  },
];

const TodoPage = () => {
  return (
    <div>
      <h1 className="center">View Todos</h1>
      <TodoList todos={DUMMY_ITEMS} />
    </div>
  );
};

export default TodoPage;
