import React, { Component } from "react";

export default class CardImage extends Component {
  render() {
    let { url } = this.props.image;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-6 px-5 text-center">
              <h2>Modal custom</h2>
              <img
                src="./glassesImage/model.jpg"
                alt=""
                style={{ width: "50vh", position: "relative" }}
              />
              <img
                src={url}
                style={{
                  position: "absolute",
                  top: "195px",
                  left: "300px",
                  width: "14vw",
                }}
              />
            </div>
            <div className="col-6 px-5 text-center">
              <h2>Modal</h2>
              <img
                src="./glassesImage/model.jpg"
                alt=""
                style={{ width: "50vh" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
