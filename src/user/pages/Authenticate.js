import React from 'react'
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
} from "../../shared/util/validators";
import { useForm } from '../../shared/hooks/formhook'

import './Authenticate.css'
export default function Authenticate() {

    const [formState, inputHandler] = useForm(
        {
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
      const authenticateSubmissionHandler = (e) => {
        e.preventDefault();
        console.log(formState);
      };
    
    return (
        <Card className="authentication">
            <h2> Please Login</h2>
            <hr/>
        <form  onSubmit={authenticateSubmissionHandler}>
        <Input
          id="email"
          element="input"
          type="email"
          label="E-Mail"
          validators={[VALIDATOR_REQUIRE(),VALIDATOR_EMAIL()]}
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
        <Button type="submit" disabled={!formState.isValid}>
          Sign In
        </Button>
      </form>
      </Card>
    )
}
