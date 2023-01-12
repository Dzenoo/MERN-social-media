import React, { useContext } from "react";
import Button from "../../shared/components/Form/Button";
import { AuthContext } from "../../shared/context/auth-context";
import "./ProfileTodoItem.css";

const ProfileTodoItem = (props) => {
  const { id, title, description, image, category } = props;
  const auth = useContext(AuthContext);

  return (
    <li className="todo_item" id={id}>
      <div className="todo_item_img">
        <img src={`http://localhost:8000/${image}`} alt={title} />
      </div>

      <div className="todo_item_description">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <span>{category}</span>

      <div className="todo_item_actions">
        <Button danger>Delete</Button>
        <Button to={`/users/${auth.userId}/${id}`}>Edit</Button>
      </div>
    </li>
  );
};

export default ProfileTodoItem;
