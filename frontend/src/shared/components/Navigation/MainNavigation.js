import React, { useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import { Link } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";

import Button from "../Form/Button";

import "./MainNavigation.css";

const MainNavigation = () => {
  const isLoggedIn = useContext(AuthContext).isLoggedIn;
  const logout = useContext(AuthContext).logout;

  return (
    <header className="navigation">
      <div className="navigation_logo">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>App</h1>
        </Link>
      </div>

      <ul className="navigation_menu">
        <li>
          <Link to="/">Home</Link>
        </li>

        {isLoggedIn && (
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        )}
      </ul>

      <div className="navigation_button">
        {!isLoggedIn && <Button to="/register">Login</Button>}
        <span>{isLoggedIn && <span onClick={logout}>Logout</span>}</span>
      </div>
    </header>
  );
};

export default MainNavigation;
