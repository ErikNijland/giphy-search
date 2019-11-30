import React, {ReactNode} from "react";
import "./form-button.css";

export interface IProps {
  children: ReactNode;
  type: "submit" | "reset" | "button";
}

export function FormButton(props: IProps) {
  return (
    <button className="FormButton" type={props.type}>{props.children}</button>
  );
}

FormButton.defaultProps = {
  type: "button",
};
