import React, { Component } from "react";

export default class ImageItem extends Component {
  render() {
    let { url } = this.props.item;
    return (
      <button
        className="btn btn-light my-3"
        onClick={() => {
          console.log("1");
          this.props.handleChange(this.props.item);
        }}
      >
        <img src={url} alt="" style={{ width: "100px", height: "50px" }} />
      </button>
    );
  }
}
