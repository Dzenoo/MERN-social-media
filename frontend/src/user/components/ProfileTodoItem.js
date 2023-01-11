import React from "react";
import Button from "../../shared/components/Form/Button";
import "./ProfileTodoItem.css";

const ProfileTodoItem = (props) => {
  const { id, title, description, image, category } = props;

  return (
    <li className="todo_item" id={id}>
      <div className="todo_item_img">
        <img src={image} alt="img" />
      </div>

      <div className="todo_item_description">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <span>{category}</span>

      <div className="todo_item_actions">
        <Button danger>Delete</Button>
        <Button to={`/profile/${id}`}>Edit</Button>
      </div>
    </li>
  );
};

export default ProfileTodoItem;
