import React, { useCallback, useContext, useState } from "react";
import { AuthContext } from "./shared/context/auth-context";
import { Navigate, Route, Routes } from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Todos from "./todo/pages/TodoPage";
import CreateTodo from "./todo/pages/CreateTodo";
import UpdateTodo from "./todo/pages/UpdateTodo";
import Profile from "./user/pages/Profile";
import ProfileSettings from "./user/components/ProfileSettings";
import Auth from "./user/pages/Auth";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const login = useCallback(() => {
    setisLoggedIn(true);
  });

  const logout = useCallback(() => {
    setisLoggedIn(false);
  });

  // const authCtx = useContext(AuthContext);

  // let routes;
  // if (authCtx.isLoggedIn) {
  //   routes = (
  //     <>
  //       <Route path="/" element={<Todos />} />
  //       <Route path="/profile" element={<Profile />} />
  //       <Route path="/profile/new" element={<CreateTodo />} />
  //       <Route path="/profile/:todoId" element={<UpdateTodo />} />
  //       <Route path="*" element={<Navigate to="/" />} />
  //     </>
  //   );
  // } else {
  //   routes = (
  //     <>
  //       <Route path="/" element={<Todos />} />
  //       <Route path="/register" element={<Auth />} />
  //       <Route path="*" element={<Navigate to="/" />} />
  //     </>
  //   );
  // }

  return (
    <>
      <AuthContext.Provider
        value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
      >
        <MainNavigation />
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/settings" element={<ProfileSettings />} />
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
