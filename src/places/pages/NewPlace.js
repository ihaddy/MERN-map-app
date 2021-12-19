import React, {useCallback} from "react";
import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators";
import "./NewPlace.css";

export default function NewPlace() {
    
    const titleInputHandler = useCallback((id, value, isValid) = {

    }, [])
    const descriptionInputHandler = useCallback((id, value, isValid) = {

    }, [])


  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        errorText="Please enter a valid title"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={titleInputHandler}
      />
      <Input
        id="description"
        element="textarea"
        type="text"
        label="Description"
        errorText="Please enter a valid Description (At least 10 characters)"
        validators={[VALIDATOR_MINLENGTH(10)]}
        onInput={descriptionInputHandler}
      />
    </form>
  );
}
