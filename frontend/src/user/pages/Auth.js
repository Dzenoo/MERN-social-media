import React, { useState } from "react";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/utils/validators";

import Button from "../../shared/components/Form/Button";
import Card from "../../shared/components/UI/Card";
import Input from "../../shared/components/Form/Input";

const Auth = () => {
  const [authMode, setAuthMode] = useState(false);
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
        },
        false
      );
    }

    setAuthMode((prevAuth) => !prevAuth);
  };

  const AuthHandler = (event) => {
    event.preventDefault();

    console.log(formState.inputs);
    //BACKEND
  };

  return (
    <Card>
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
          <Button type="submit">{authMode ? "Login" : "Register"}</Button>
          <a onClick={switchAuthModeHandler}>
            {authMode ? "Don't have account" : "Have account, login"}
          </a>
        </div>
      </form>
    </Card>
  );
};

export default Auth;
