import React, { Component } from "react";
import Header from "../Header/Header";
import CardImage from "../CardImage/CardImage";
import ButtonImage from "../ButtonImage/ButtonImage";
import { glass } from "../Data/Data";

export default class Glass extends Component {
  state = {
    Glass: glass,
    typeGlass: glass[0],
  };
  handleChangeGlass = (selectedGlass) => {
    this.setState = {
      typeGlass: selectedGlass,
    };
  };
  render() {
    return (
      <div>
        <Header />
        <CardImage image={this.state.typeGlass} />
        <ButtonImage data={glass} changeImage={this.handleChangeGlass} />
      </div>
    );
  }
}
