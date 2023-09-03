import React, { Component } from "react";
import ImageItem from "./ImageItem";

export default class ButtonImage extends Component {
  RenderList = () => {
    return this.props.data.map((item, index) => {
      return (
        <ImageItem
          key={index}
          item={item}
          handleChange={this.props.changeImage}
        />
      );
    });
  };
  render() {
    return (
      <div>
        <div className="container d-flex">{this.RenderList()}</div>
      </div>
    );
  }
}
