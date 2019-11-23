import React from "react";
import {IImage} from "../../types/image";
import Giphy from "../giphy/giphy";
import "./giphy-grid.css";

interface IProps {
  images: IImage[];
}

export default function GiphyGrid(props: IProps) {
  return (
    <div className="GiphyGrid">
      {props.images.map((image) =>
        <Giphy key={image.id} {...image} />,
      )}
    </div>
  );
}
