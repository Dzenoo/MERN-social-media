import React, { useState } from "react";

import ProfileTodoList from "../components/ProfileTodoList";
import Button from "../../shared/components/Form/Button";

const DUMMY_ITEMS = [
  {
    id: "i1",
    title: "Go to shop",
    description: "Today i must go to shop",
    category: "Shopping",
  },
  {
    id: "i2",
    title: "Go to shop",
    description: "Today i must go to shop",
    category: "Shopping",
  },
  {
    id: "i3",
    title: "Go to shop",
    description: "Today i must go to shop",
    category: "Shopping",
  },
  {
    id: "i4",
    title: "Go to shop",
    description: "Today i must go to shop",
    category: "Shopping",
  },

  {
    id: "i5",
    title: "Go to gym",
    description: "Today i must go to gym",
    category: "Fitness",
  },
  {
    id: "i6",
    title: "Go to gym",
    description: "Today i must go to gym",
    category: "Fitness",
  },
  {
    id: "i7",
    title: "Go to gym",
    description: "Today i must go to gym",
    category: "Fitness",
  },
  {
    id: "i8",
    title: "Go to gym",
    description: "Today i must go to gym",
    category: "Fitness",
  },

  {
    id: "i9",
    title: "Go to school",
    description: "Today i must go to school",
    category: "Education",
  },
];

const Profile = () => {
  const [items, setItems] = useState([]);

  const categoryHandler = (currCat) => {
    const currItem = DUMMY_ITEMS.filter((cuItem) => {
      return cuItem.category === currCat;
    });
    setItems(currItem);
  };

  return (
    <div className="profile_wrapper">
      <Button to="/profile/settings">Profile Settings</Button>

      <div className="buttons">
        <Button onClick={() => categoryHandler("Shopping")}>Shopping</Button>
        <Button onClick={() => categoryHandler("Fitness")}>Fitness</Button>
        <Button onClick={() => categoryHandler("Education")}>Education</Button>
      </div>

      <div className="todoItems">
        <ProfileTodoList items={items} />
      </div>
    </div>
  );
};

export default Profile;
