import React, { useContext } from "react";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttp } from "../../shared/hooks/http-hook";

import Button from "../../shared/components/Form/Button";
import "./ProfileTodoItem.css";
import ErrorModal from "../../shared/components/UI/ErrorModal";

const ProfileTodoItem = (props) => {
  const { id, title, description, image, category } = props;
  const auth = useContext(AuthContext);
  const { isError, isLoading, sendRequest, clearError } = useHttp();

  const deleteItemHandler = async () => {
    alert("Are you sure to delete this todo?");
    try {
      await sendRequest(
       `${process.env.REACT_APP_BACKEND_URL}/todos/${id}`
        "DELETE",
        null,
        {
          Authorization: "Bearer " + auth.token,
        }
      );
      props.onDeleteTodo(id);
    } catch (err) {}
  };

  return (
    <li className="todo_item" id={id}>
      <ErrorModal error={isError} onClear={clearError} />
      {isLoading && <div className="center">Loading...</div>}
      <div className="todo_item_img">
        <img src={``${process.env.REACT_APP_BACKEND_URL}/${image}`} alt={title} />
      </div>

      <div className="todo_item_description">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <span>{category}</span>

      <div className="todo_item_actions">
        <Button danger onClick={deleteItemHandler}>
          Delete
        </Button>
        <Button to={`/users/${auth.userId}/${id}`}>Edit</Button>
      </div>
    </li>
  );
};

export default ProfileTodoItem;
