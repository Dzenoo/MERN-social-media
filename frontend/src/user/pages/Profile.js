import React, { useState } from "react";

import ProfileTodoList from "../components/ProfileTodoList";
import img from "../../shared/assets/img.png";

const DUMMY_ITEMS = [
  {
    id: "i1",
    title: "Go to shop",
    image: img,
    description: "Today i must go to shop",
    category: "Shopping",
  },
  {
    id: "i2",
    title: "Go to shop",
    image: img,
    description: "Today i must go to shop",
    category: "Shopping",
  },
  {
    id: "i3",
    title: "Go to shop",
    image: img,
    description: "Today i must go to shop",
    category: "Shopping",
  },
];

const Profile = () => {
  const [items, setItems] = useState(DUMMY_ITEMS);

  return (
    <div className="profile_wrapper">
      <div className="todoItems">
        <ProfileTodoList items={items} />
      </div>
    </div>
  );
};

export default Profile;
