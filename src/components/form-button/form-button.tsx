import React, {ReactNode} from "react";
import "./form-button.css";

export interface IProps {
  children: ReactNode;
  disabled: boolean;
  type: "submit" | "reset" | "button";
}

export function FormButton(props: IProps) {
  return (
    <button
      className="FormButton"
      type={props.type}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

FormButton.defaultProps = {
  disabled: false,
  type: "button",
};
