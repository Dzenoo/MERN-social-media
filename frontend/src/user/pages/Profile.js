import React, { useContext, useEffect, useState } from "react";
import { useHttp } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";

import ErrorModal from "../../shared/components/UI/ErrorModal";
import ProfileTodoList from "../components/ProfileTodoList";

const Profile = () => {
  const [items, setItems] = useState([]);
  const { sendRequest, isError, isLoading, clearError } = useHttp();
  const auth = useContext(AuthContext);

  useEffect(() => {
    const fetchUserTodos = async () => {
      try {
        const responseData = await sendRequest(
         `${process.env.REACT_APP_BACKEND_URL}/todos/user/${auth.userId}`,
        );
        setItems(responseData.todos);
      } catch (err) {}
    };

    fetchUserTodos();
  }, [sendRequest, auth.userId]);

  const deleteTodoHandler = (todoId) => {
    setItems((prevItem) => prevItem.filter((i) => i._id !== todoId));
  };

  return (
    <div className="profile_wrapper">
      <ErrorModal error={isError} onClear={clearError} />
      {isLoading && <div className="center">loading...</div>}
      <div className="todoItems">
        <ProfileTodoList items={items} deleteTodo={deleteTodoHandler} />
      </div>
    </div>
  );
};

export default Profile;
