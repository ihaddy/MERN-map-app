import React, {useContext} from "react";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/formhook";
import { useState } from "react";
import { AuthContext } from "../../shared/context/AuthContext";

import "./Authenticate.css";
export default function Authenticate() {
  const auth = useContext(AuthContext)
  const [isLogin, setIsLogin] = useState(true);
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
      username: undefined,

      confirmPassword: undefined
    },
    false
  );

  const authenticateSubmissionHandler = (e) => {
    e.preventDefault();
    console.log(formState);
    auth.login()
  };

  const signUpHandler = () => {
    if (!isLogin) {
      setFormData(
        { 
            ...formState.inputs,
            username: undefined,
            confirmPassword: undefined
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        { 
            ...formState.inputs,
            username: { value: "", isValid: false },
            confirmPassword: { value: "", isValid: false }
        },
        false
      );
    }

    setIsLogin((previousstate) => !previousstate);
  };
  console.log(formState)
  // {isLogin ? : }
  // honestly this is a really poor way to implement this, they should be separate components because the interplay of usecallback useeffect and the dispatch hook aren't properly resetting anything sometimes when you switch,
  // and handling a password validation when you sign up as a new user and all of that is challenging by trying to use ternaries all in the same component
  //currently some react issue where since i'm not rendering two totally different components based on state, when you use just one massive ternarny operator to render essentially two pages,
  // the order of the input fields and their input carries over to the re-render when you switch between
  //sign up mode or login mode, so if your first input field is "email" on login, when you switch to signup, it'll take whatever was in email and fill it into the first field, even if it's username
  return (
    <Card className="authentication">
      
        <>
          <h2> {isLogin ? 'Please Login' : 'Please Sign Up' }</h2>
          <hr />
          <form onSubmit={authenticateSubmissionHandler}>
          {!isLogin ? (  <Input
              id="username"
              element="input"
              type="text"
              label="Username"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid username."
              onInput={inputHandler}
              initialValue={formState.inputs.username.value}
              initialValid={formState.inputs.username.isValid}
            /> ) : <></>}
            <Input
              id="email"
              element="input"
              type="email"
              label="E-Mail"
              validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
              errorText="Please enter a valid email."
              onInput={inputHandler}
              initialValue={formState.inputs.email.value}
              initialValid={formState.inputs.email.isValid}
            />
            <Input
              id="password"
              element="input"
              label="Password"
              type="password"
              validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
              errorText="Please enter a valid password"
              onInput={inputHandler}
              initialValue={formState.inputs.password.value}
              initialValid={formState.inputs.password.isValid}
            />
             {isLogin ? <></> : (  <Input
              id="confirmPassword"
              element="input"
              label="Confirm Password"
              type="password"
              validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
              // errorText={(formState.inputs.confirmPassword.value === formState.inputs.password.value) ? "Passwords don't match!" : "Please enter a valid password"}
              errorText="Please Enter a valid password"
              onInput={inputHandler}
              initialValue={formState.inputs.confirmPassword.value}
              initialValid={formState.inputs.confirmPassword.isValid}
            />) }
          
            <Button type="submit" disabled={!formState.isValid }>
              {isLogin ? "Log In!" : "Sign Up!"}
            </Button>
          </form>
          <Button inverse onClick={signUpHandler}>
            {isLogin ? "Don't have an account?" : "Already Have an account?"}
          </Button>
        </>
      
    </Card>
  );
}
