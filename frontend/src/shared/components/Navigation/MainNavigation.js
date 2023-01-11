import React, { useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";

import User from "../../assets/user.png";

import "./MainNavigation.css";

const MainNavigation = () => {
  const isLoggedIn = useContext(AuthContext).isLoggedIn;

  return (
    <header className="navigation">
      <div className="navigation_logo">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>Social media</h1>
        </Link>
      </div>

      <ul className="navigation_menu">
        <li>
          <Link to="/">
            <AiOutlineHome />
          </Link>
        </li>
      </ul>

      <div className="navigation_button">
        {!isLoggedIn && <Link to="/register">Login</Link>}

        {isLoggedIn && (
          <Link to="/profile">
            <div className="user_img">
              <img src={User} alt="user" />
              <h3>John Doe</h3>
            </div>
          </Link>
        )}
      </div>
    </header>
  );
};

export default MainNavigation;
