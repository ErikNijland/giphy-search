import React from "react";
import {IFormInputValue} from "../../types/form-input-value";

interface IProps {
  autofocus: boolean;
  label: string;
  formInputValue: IFormInputValue;
}

export function FormInput(props: IProps) {
  return (
    <label>
      {props.label}
      <input {...props.formInputValue} autoFocus={props.autofocus} />
    </label>
  );
}

FormInput.defaultProps = {
  autofocus: false,
};
