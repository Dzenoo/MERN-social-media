import React from "react";
import Button from "../../shared/components/Form/Button";

import ProfileTodoItem from "./ProfileTodoItem";
import "./ProfileTodoList.css";

const ProfileTodoList = (props) => {
  return (
    <>
      <div className="center">
        <Button to="/users/new">Add todo</Button>
      </div>
      <ul className="todo_list">
        {props.items.map((item) => (
          <ProfileTodoItem
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            category={item.category}
          />
        ))}
      </ul>
    </>
  );
};

export default ProfileTodoList;
