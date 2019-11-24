import React, {useState} from "react";
import useScreenSize from "../../hooks/use-screen-size/use-screen-size";
import {IImage} from "../../types/image";
import "./giphy.css";

export default function Giphy(props: IImage) {
  const [ classNames, setClassNames ] = useState(["Giphy", "Giphy--Loading"]);
  const screenSize = useScreenSize();

  function removeLoadingClass() {
    setClassNames(classNames.filter((className) => className !== "Giphy--Loading"));
  }

  return (
    <div className={classNames.join(" ")}>
      <video
        className="Giphy__Video"
        autoPlay={true}
        loop={true}
        muted={true}
        width={props.width}
        height={props.height}
        onLoad={removeLoadingClass}
      >

        <source src={props.src.webp} type="video/webp" />
        <source src={props.src.mp4} type="video/mp4" />
        <img src={props.src.gif} alt={props.alt} />
      </video>
    </div>
  );
}
