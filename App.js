import React from "react";
import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";
import { Navigate, Route, Routes } from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Todos from "./todo/pages/TodoPage";
import CreateTodo from "./todo/pages/CreateTodo";
import UpdateTodo from "./todo/pages/UpdateTodo";
import Profile from "./user/pages/Profile";
import Auth from "./user/pages/Auth";

function App() {
  const { token, login, logout, userId } = useAuth();

  let routes;

  if (token) {
    routes = (
      <>
        <Route path="/" element={<Todos />} />
        <Route path="/users/:userId" element={<Profile />} />
        <Route path="/users/new" element={<CreateTodo />} />
        <Route path="/users/:userId/:todoId" element={<UpdateTodo />} />
        <Route path="*" element={<Navigate to="/" />} />
      </>
    );
  } else {
    routes = (
      <>
        <Route path="/" element={<Todos />} />
        <Route path="/register" element={<Auth />} />
        <Route path="*" element={<Navigate to="/register" />} />
      </>
    );
  }

  return (
    <>
      <AuthContext.Provider
        value={{
          isLoggedIn: !!token,
          token: token,
          userId: userId,
          login: login,
          logout: logout,
        }}
      >
        <MainNavigation />
        <Routes>{routes}</Routes>
      </AuthContext.Provider>
    </>
  );
}

export default App;
