import React, { useContext, useState, useEffect } from "react";
import { useForm } from "../../shared/hooks/form-hook";
import { useParams } from "react-router-dom";
import { useHttp } from "../../shared/hooks/http-hook";
import { VALIDATOR_REQUIRE } from "../../shared/utils/validators";

import Card from "../../shared/components/UI/Card";
import Input from "../../shared/components/Form/Input";
import Button from "../../shared/components/Form/Button";
import { AuthContext } from "../../shared/context/auth-context";

const CreateTodo = () => {
  const { sendRequest, isError, isLoading, clearError } = useHttp();
  const todoId = useParams().todoId;
  const auth = useContext(AuthContext);
  const [loadedTodo, setloadedTodo] = useState();
  const [formState, inputHandler, setFormData] = useForm(
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

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:8000/api/todos/${todoId}`
        );
        setloadedTodo(responseData.todo);
        setFormData(
          {
            title: {
              value: responseData.todo.title,
              isValid: true,
            },

            description: {
              value: responseData.todo.description,
              isValid: true,
            },

            category: {
              value: responseData.todo.category,
              isValid: true,
            },
          },
          true
        );
      } catch (err) {}
    };
    fetchTodo();
  }, [sendRequest, todoId, setFormData]);

  const submitUpdateHandler = async (event) => {
    event.preventDefault();

    try {
      await sendRequest(
        `http://localhost:8000/api/todos/${todoId}`,
        "PATCH",
        JSON.stringify({
          title: formState.inputs.title.value,
          description: formState.inputs.description.value,
          category: formState.inputs.category.value,
        }),
        {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        }
      );
    } catch (err) {}
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
          initialValue={loadedTodo.title}
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
          initialValue={loadedTodo.description}
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
          initialValue={loadedTodo.category}
          initialValid={true}
        />

        <Button type="submit">Save</Button>
      </form>
    </Card>
  );
};

export default CreateTodo;
