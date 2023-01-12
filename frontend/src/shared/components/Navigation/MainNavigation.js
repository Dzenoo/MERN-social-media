import React, { useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

import "./MainNavigation.css";
import Button from "../Form/Button";

const MainNavigation = () => {
  const auth = useContext(AuthContext);

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

        {!auth.isLoggedIn && <Button to="/register">Login</Button>}

        {auth.isLoggedIn && <Button onClick={auth.logout}>Logout</Button>}
      </ul>
    </header>
  );
};

export default MainNavigation;
