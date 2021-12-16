import React, { useReducer } from "react";
import "./Input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: true,
      };
    default:
      return state;
  }
};

export default function Input(props) {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });
  const changeHandler = (e) => {
    dispatch({ type: "CHANGE", val: e.target.value });
  };
  const element =
    props.element === "input" ? (
      <input
        onChange={changeHandler}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        value={inputState.value}
      />
    ) : (
      <textarea
        onChange={changeHandler}
        id={props.id}
        rows={props.row || 3}
        value={inputState.value}
      />
    );
  return (
    <div className={`form-control ${!inputState.isValid && `form-control--invalid`}  `}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && <p>{props.errorText}</p>}
    </div>
  );
}
