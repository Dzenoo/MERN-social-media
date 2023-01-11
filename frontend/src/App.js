import React, { useCallback, useContext, useState } from "react";
import { AuthContext } from "./shared/context/auth-context";
import { Navigate, Route, Routes } from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Todos from "./todo/pages/TodoPage";
import CreateTodo from "./todo/pages/CreateTodo";
import UpdateTodo from "./todo/pages/UpdateTodo";
import Profile from "./user/pages/Profile";
import Auth from "./user/pages/Auth";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const login = useCallback(() => {
    setisLoggedIn(true);
  });

  const logout = useCallback(() => {
    setisLoggedIn(false);
  });

  return (
    <>
      <AuthContext.Provider
        value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
      >
        <MainNavigation />
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/new" element={<CreateTodo />} />
          <Route path="/profile/:todoId" element={<UpdateTodo />} />
          <Route path="/register" element={<Auth />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AuthContext.Provider>
    </>
  );
}

export default App;
