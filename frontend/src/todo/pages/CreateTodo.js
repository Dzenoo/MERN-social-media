import React, { useContext } from "react";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttp } from "../../shared/hooks/http-hook";
import { useNavigate } from "react-router-dom";
import { VALIDATOR_REQUIRE } from "../../shared/utils/validators";
import { AuthContext } from "../../shared/context/auth-context";

import ImageUpload from "../../shared/components/Form/ImageUpload";
import ErrorModal from "../../shared/components/UI/ErrorModal";
import Card from "../../shared/components/UI/Card";
import Input from "../../shared/components/Form/Input";
import Button from "../../shared/components/Form/Button";

const CreateTodo = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const { isLoading, isError, sendRequest, clearError } = useHttp();
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
      image: {
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

  const submitCreateHandler = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", formState.inputs.title.value);
      formData.append("description", formState.inputs.description.value);
      formData.append("image", formState.inputs.image.value);
      formData.append("category", formState.inputs.category.value);

      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/todos/new`,
        "POST",
        formData,
        {
          Authorization: "Bearer " + auth.token,
        }
      );
      navigate("/");
    } catch (err) {}
  };

  return (
    <Card>
      <ErrorModal error={isError} onClear={clearError} />
      {isLoading && <div className="center">Loading...</div>}
      <form onSubmit={submitCreateHandler}>
        <Input
          label="Title"
          element="input"
          id="title"
          type="text"
          errorText="Please enter valid title"
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

        <ImageUpload
          id="image"
          center
          onInput={inputHandler}
          errorText="Please upload image"
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
