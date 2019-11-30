import React, {useState} from 'react';
import {IFormInputValue} from "../../types/form-input-value";
import './form-input.css';

interface IProps {
  autofocus: boolean;
  label: string;
  formInputValue: IFormInputValue;
  id?: string;
}

export function FormInput(props: IProps) {
  const [ randomId ] = useState('randomId-' + Math.random());
  const htmlId = props.id || randomId;

  return (
    <div className="FormInput">
      <label className="FormInput__Label" htmlFor={htmlId}>{props.label}</label>
      <input id={htmlId} className="FormInput__Input" {...props.formInputValue} autoFocus={props.autofocus} />
    </div>
  );
}

FormInput.defaultProps = {
  autofocus: false,
};
