import React from "react";
import {Image} from "../../types/image";

export default class Giphy extends React.Component<Image> {
  render() {
    return <img key={this.props.id} src={this.props.src} alt={this.props.alt}/>;
  }
}