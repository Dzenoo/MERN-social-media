import React, { useEffect, useState } from "react";
import { useHttp } from "../../shared/hooks/http-hook";

import TodoList from "../components/TodoList";

const TodoPage = () => {
  const [loadedUsers, setLoadedUsers] = useState([]);
  const { sendRequest, isError, isLoading, clearError } = useHttp();

  useEffect(() => {
    const fetchTodos = async () => {
      const responseData = await sendRequest(
        "http://localhost:8000/api/users/"
      );
      setLoadedUsers(responseData.users);
    };
    fetchTodos();
  }, [sendRequest]);

  return (
    <div>
      <h1 className="center">View Other Todos</h1>
      <TodoList users={loadedUsers} />
    </div>
  );
};

export default TodoPage;
