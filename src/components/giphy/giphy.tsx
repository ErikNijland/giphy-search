import React, {useState} from "react";
import useScreenSize from "../../hooks/use-screen-size/use-screen-size";
import {IImage} from "../../types/image";
import "./giphy.css";

export default function Giphy(props: IImage) {
  const [ classNames, setClassNames ] = useState(["Giphy", "Giphy--Loading"]);
  const screenSize = useScreenSize();
  const giphySource = props.formats[screenSize];

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
        width={giphySource.width}
        height={giphySource.height}
        onLoad={removeLoadingClass}
      >

        <source src={giphySource.webp} type="video/webp" />
        <source src={giphySource.mp4} type="video/mp4" />
        <img src={giphySource.gif} alt={props.alt} />
      </video>
    </div>
  );
}
