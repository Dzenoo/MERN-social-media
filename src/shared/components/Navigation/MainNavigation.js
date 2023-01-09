import React from "react";

import { Link } from "react-router-dom";

import Button from "../Form/Button";

import "./MainNavigation.css";

const MainNavigation = () => {
  return (
    <header className="navigation">
      <div className="navigation_logo">
        <h1>App</h1>
      </div>

      <ul className="navigation_menu">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>

      <div className="navigation_button">
        <Button to="/register">Login</Button>
      </div>
    </header>
  );
};

export default MainNavigation;
