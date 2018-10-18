import React, { Component } from "react";

class Input extends Component {
  handleChange = event => {
    const { name, value, type } = event.target;
    this.props.onChange(name, type === "number" ? parseInt(value) : value);
  };

  render = () => {
    return (
      <input
        type={this.props.type}
        onChange={this.handleChange}
        value={this.props.value}
        name={this.props.name}
        min="0"
      />
    );
  };
}

export default Input;
