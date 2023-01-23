import React, { useContext, useState } from "react";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttp } from "../../shared/hooks/http-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/utils/validators";
import { AuthContext } from "../../shared/context/auth-context";
import { useNavigate } from "react-router-dom";



import ImageUpload from "../../shared/components/Form/ImageUpload";
import Button from "../../shared/components/Form/Button";
import Card from "../../shared/components/UI/Card";
import ErrorModal from "../../shared/components/UI/ErrorModal";
import Input from "../../shared/components/Form/Input";

const Auth = () => {
  const navigate = useNavigate();
  const [authMode, setAuthMode] = useState(false);
  const auth = useContext(AuthContext);
  const [formState, inputHandler, setFormData] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const { sendRequest, isLoading, isError, clearError } = useHttp();

  const switchAuthModeHandler = () => {
    //LOGIN
    if (!authMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    }
    //REGISTER
    else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
          image: {
            value: null,
            isValid: false,
          },
        },
        false
      );
    }

    setAuthMode((prevAuth) => !prevAuth);
  };

  const AuthHandler = async (event) => {
    event.preventDefault();

    if (authMode) {
      try {
        const responseData = await sendRequest(
         `${process.env.REACT_APP_BACKEND_URL}/users/login`,
          "POST",
          JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        auth.login(responseData.userId, responseData.token);
        navigate("/");
      } catch (err) {}
    } else {
      try {
        const formData = new FormData();
        formData.append("email", formState.inputs.email.value);
        formData.append("name", formState.inputs.name.value);
        formData.append("password", formState.inputs.password.value);
        formData.append("image", formState.inputs.image.value);

        const responseData = await sendRequest(
            `${process.env.REACT_APP_BACKEND_URL}/users/login`,
          "POST",
          formData
        );

        auth.login(responseData.userId, responseData.token);
        navigate("/");
      } catch (err) {}
    }
  };

  return (
    <Card>
      <ErrorModal error={isError} onClear={clearError} />
      {isLoading && <div className="center">loading...</div>}
      <h2>{authMode ? "Login" : "Register"}</h2>
      <form onSubmit={AuthHandler}>
        {!authMode && (
          <Input
            type="Text"
            label="Name"
            element="input"
            placeholder="Name"
            id="name"
            validators={[VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
            errorText="Please enter a valid name (Can't be empty)"
          />
        )}

        {!authMode && <ImageUpload center id="image" onInput={inputHandler} />}
        <Input
          type="Text"
          label="Email"
          element="input"
          placeholder="example@example.com"
          id="email"
          validators={[VALIDATOR_EMAIL()]}
          onInput={inputHandler}
          errorText="Please enter a valid email"
        />

        <Input
          type="Password"
          label="Password"
          element="input"
          placeholder="password"
          id="password"
          validators={[VALIDATOR_MINLENGTH(6)]}
          onInput={inputHandler}
          errorText="Please enter a valid password"
        />

        <div className="flex">
          <Button type="submit" disabled={!formState.isValid}>
            {authMode ? "Login" : "Register"}
          </Button>
          <a onClick={switchAuthModeHandler}>
            {authMode ? "Don't have account" : "Have account, login"}
          </a>
        </div>
      </form>
    </Card>
  );
};

export default Auth;
