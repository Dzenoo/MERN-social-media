import React, { useState } from "react";
import { useForm } from "../../shared/hooks/form-hook";

import Card from "../../shared/components/UI/Card";
import Input from "../../shared/components/Form/Input";
import Button from "../../shared/components/Form/Button";
import { VALIDATOR_REQUIRE } from "../../shared/utils/validators";
import { useParams } from "react-router-dom";

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
];

const CreateTodo = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      category: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const todoId = useParams().todoId;

  const identifiedTodo = DUMMY_ITEMS.find((i) => i.id === todoId);

  const submitUpdateHandler = (event) => {
    event.preventDefault();

    console.log(formState.inputs);
  };

  return (
    <Card>
      <form onSubmit={submitUpdateHandler}>
        <Input
          label="Title"
          element="input"
          id="title"
          type="text"
          errorText="Please enter valid title"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
          initialValue={identifiedTodo.title}
          initialValid={true}
        />

        <Input
          label="Description"
          element="input"
          id="description"
          type="text"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter valid description"
          onInput={inputHandler}
          initialValue={identifiedTodo.description}
          initialValid={true}
        />

        <Input
          label="Category"
          element="input"
          id="category"
          type="text"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter valid category"
          onInput={inputHandler}
          initialValue={identifiedTodo.category}
          initialValid={true}
        />

        <Button type="submit">Save</Button>
      </form>
    </Card>
  );
};

export default CreateTodo;
