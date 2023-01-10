import React from "react";

import ProfileTodoItem from "./ProfileTodoItem";
import "./ProfileTodoList.css";

const ProfileTodoList = (props) => {
  return (
    <ul className="todo_list">
      {props.items.map((item) => (
        <ProfileTodoItem
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          category={item.category}
        />
      ))}
    </ul>
  );
};

export default ProfileTodoList;
