import React, {ReactNode} from "react";

import "./notification.css";

interface IProps {
  type: "info" | "success" | "error";
  children: ReactNode;
}

export default function Notification(props: IProps) {
  const classNames = [
    "notification",
    `notification--${props.type}`,
  ];

  return (
    <div className={classNames.join(" ")}>
      {props.children}
    </div>
  );
}
