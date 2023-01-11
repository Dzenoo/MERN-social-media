import React from "react";
import { useForm } from "../../shared/hooks/form-hook";

import Card from "../../shared/components/UI/Card";
import Input from "../../shared/components/Form/Input";
import Button from "../../shared/components/Form/Button";
import { VALIDATOR_REQUIRE } from "../../shared/utils/validators";

const CreateTodo = () => {
  const [formState, inputHandler] = useForm(
    {
      name: {
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

  const submitCreateHandler = (event) => {
    event.preventDefault();

    console.log(formState.inputs);
  };

  return (
    <Card>
      <form onSubmit={submitCreateHandler}>
        <Input
          label="Name"
          element="input"
          id="name"
          type="text"
          errorText="Please enter valid name"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
        />

        <Input
          label="Description"
          element="input"
          id="description"
          type="text"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter valid description"
          onInput={inputHandler}
        />

        <Input
          label="Category"
          element="input"
          id="category"
          type="text"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter valid category"
          onInput={inputHandler}
        />

        <Button type="submit">Create</Button>
      </form>
    </Card>
  );
};

export default CreateTodo;
