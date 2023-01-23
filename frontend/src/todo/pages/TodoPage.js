import React, { useEffect, useState } from "react";
import { useHttp } from "../../shared/hooks/http-hook";

import ErrorModal from "../../shared/components/UI/ErrorModal";
import TodoList from "../components/TodoList";

const TodoPage = () => {
  const [loadedTodos, setLoadedTodos] = useState([]);
  const { sendRequest, isError, isLoading, clearError } = useHttp();

  useEffect(() => {
    const fetchTodos = async () => {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/users`,
      );
      setLoadedTodos(responseData.todosEi);
    };
    fetchTodos();
  }, [sendRequest]);

  return (
    <div>
      <ErrorModal error={isError} onClear={clearError} />
      {isLoading && <div className="center">Loading...</div>}
      <h1 className="center">View Other Todos</h1>
      {!isError && loadedTodos && <TodoList todos={loadedTodos} />}
    </div>
  );
};

export default TodoPage;
