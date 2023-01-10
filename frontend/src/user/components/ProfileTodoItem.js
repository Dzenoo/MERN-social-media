import React from "react";

import Card from "../../shared/components/UI/Card";
import "./ProfileTodoItem.css";

const ProfileTodoItem = (props) => {
  const { id, title, description, category } = props;

  return (
    <Card>
      <li className="todo_item" id={id}>
        <h1>{title}</h1>
        <p>{description}</p>
        <span>{category}</span>
      </li>
    </Card>
  );
};

export default ProfileTodoItem;
