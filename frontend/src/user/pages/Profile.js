import React, { useContext, useEffect, useState } from "react";
import { useHttp } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";

import ProfileTodoList from "../components/ProfileTodoList";

const Profile = () => {
  const [items, setItems] = useState([]);
  const { sendRequest, isError, isLoading, clearError } = useHttp();
  const auth = useContext(AuthContext);

  useEffect(() => {
    const fetchUserTodos = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:8000/api/todos/user/${auth.userId}`
        );
        setItems(responseData.todos);
      } catch (err) {}
    };

    fetchUserTodos();
  }, [sendRequest, auth.userId]);

  return (
    <div className="profile_wrapper">
      <div className="todoItems">
        <ProfileTodoList items={items} />
      </div>
    </div>
  );
};

export default Profile;
