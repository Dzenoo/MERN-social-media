import React, { useEffect, useState } from "react";
import { useHttp } from "../../shared/hooks/http-hook";

import ErrorModal from "../../shared/components/UI/ErrorModal";
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
      <ErrorModal error={isError} onClear={clearError} />
      {isLoading && <div className="center">Loading...</div>}
      <h1 className="center">View Other Todos</h1>
      {!isError && loadedUsers && <TodoList users={loadedUsers} />}
    </div>
  );
};

export default TodoPage;
