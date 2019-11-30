import React, {useState} from "react";
import {IFormInputValue} from "../../types/form-input-value";
import "./form-radio.css";

interface IProps {
  label: string;
  formInputValue: IFormInputValue;
  id?: string;
  value: string;
}

export function FormRadio(props: IProps) {
  const [ randomId ] = useState("randomId-" + Math.random());
  const htmlId = props.id || randomId;

  return (
    <div className="FormRadio">
      <input
        className="FormRadio__Input"
        id={htmlId}
        checked={props.formInputValue.value === props.value}
        onChange={props.formInputValue.onChange}
        type="radio"
        value={props.value}
      />
      <label htmlFor={htmlId}>{props.label}</label>
    </div>
  );
}
