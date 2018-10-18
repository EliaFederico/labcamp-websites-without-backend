import React, { Component } from "react";
import * as firebase from "firebase";

import Input from "../Input";

class NewProduct extends Component {
  constructor() {
    super();

    this.state = {
      productName: "",
      productQnt: 0
    };
  }

  handleInputChange = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmitClick = async () => {
    const { productName, productQnt } = this.state;

    firebase
      .database()
      .ref(`/products/${productName}`)
      .set({
        count: productQnt
      });
  };

  render = () => {
    const { productName, productQnt } = this.state;

    return (
      <div>
        New product
        <Input
          name="productName"
          type="text"
          onChange={this.handleInputChange}
          value={productName}
        />
        <Input
          name="productQnt"
          type="number"
          onChange={this.handleInputChange}
          value={productQnt}
        />
        <button
          disabled={productName === "" || productQnt === 0}
          onClick={this.handleSubmitClick}
        >
          Aggiungi nuovo prodotto
        </button>
      </div>
    );
  };
}

export default NewProduct;
