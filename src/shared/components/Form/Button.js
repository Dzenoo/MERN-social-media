import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

const Button = (props) => {
  if (props.to) {
    return (
      <Link
        to={props.to}
        className={`button button--${props.size || "default"} ${
          props.inverse && "button--inverse"
        } ${props.danger && "button--danger"} `}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <button
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
      className={`button button--${props.size || "default"} ${
        props.inverse && "button--inverse"
      } ${props.danger && "button--danger"} `}
    >
      {props.children}
    </button>
  );
};

export default Button;
