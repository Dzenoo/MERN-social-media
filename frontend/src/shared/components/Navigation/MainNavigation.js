import React, { useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth-hook";
import { AiOutlineHome } from "react-icons/ai";

import "./MainNavigation.css";
import Button from "../Form/Button";

const MainNavigation = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const { user } = useAuth();

  const logout = () => {
    auth.logout();
    navigate("/");
  };

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

        {auth.isLoggedIn && (
          <li>
            <Link to={`/users/${auth.userId}`}>Profile</Link>
          </li>
        )}

        {auth.isLoggedIn && (
          <li>
            <h3>Welcome {user.name}</h3>
          </li>
        )}

        {!auth.isLoggedIn && <Button to="/register">Login</Button>}

        {auth.isLoggedIn && <Button onClick={logout}>Logout</Button>}
      </ul>
    </header>
  );
};

export default MainNavigation;
