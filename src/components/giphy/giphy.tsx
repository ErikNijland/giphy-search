import React, {useState} from "react";
import {IImage} from "../../types/image";
import "./giphy.css";
import useScreenSize from '../../hooks/use-screen-size/use-screen-size';

export default function Giphy(props: IImage) {
  const [ classNames, setClassNames ] = useState(["Giphy", "Giphy--Loading"]);
  const screenSize = useScreenSize();

  function removeLoadingClass() {
    setClassNames(classNames.filter((className) => className !== "Giphy--Loading"));
  }

  return (
    <div className={classNames.join(" ")}>
      <img
        className="Giphy__Image"
        width={props.width}
        height={props.height}
        src={props.src}
        alt={props.alt}
        onLoad={removeLoadingClass}
      />
    </div>
  );
}
