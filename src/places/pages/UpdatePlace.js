import React, { useEffect } from "react";
import { useParams } from "react-router";
import { DUMMY_PLACE } from "./UserPlaces";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/formhook";

import "./NewPlace.css";

export default function UpdatePlace() {
  const placeId = useParams().placeId;
  const identifiedPlace = DUMMY_PLACE.find((p) => p.id === placeId);
 console.log(identifiedPlace)
 console.log(DUMMY_PLACE)

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: true,
      },
      description: {
        value: "",
        isValid: true,
      },
    },
    true
  );
  console.log("after useform")
  console.log(formState)
  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        }.true
      );
    }
  }, [setFormData, identifiedPlace]);
  console.log("after useeffect")
  console.log(formState)
  const placeUpdateSubmissionHandler = (e) => {
    e.preventDefault();
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>No place found matching that ID</h2>
        </Card>
      </div>
    );
  }
  console.log(formState)
  return (
    <div>
      {formState.inputs.title.value && (
        <form className="place-form" onSubmit={placeUpdateSubmissionHandler}>
          <Input
            id="title"
            element="input"
            type="text"
            label="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title."
            onInput={inputHandler}
            initialValue={formState.inputs.title.value}
            initialValid={formState.inputs.title.isValid}
          />
          <Input
            id="description"
            element="textarea"
            label="Description"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid description of at least 5 characters"
            onInput={inputHandler}
            initialValue={formState.inputs.description.value}
            initialValid={formState.inputs.description.isValid}
          />
          <Button type="submit" disabled={!formState.isValid}>
            UPDATE PLACE
          </Button>
        </form>
      )}
    </div>
  );
}
