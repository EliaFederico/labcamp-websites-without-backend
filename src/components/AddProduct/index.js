import React, { Component } from "react";
import * as firebase from "firebase";

import Select from "../Select";
class AddProduct extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      selectedOption: ""
    };
  }

  componentDidMount = () => {
    const ref = firebase.database().ref("/group-1");

    ref.on("value", snapshot => {
      this.setState({
        products: snapshot.val()
      });
    });
  };

  handleSelectChange = selectedOption => {
    this.setState({
      selectedOption
    });
  };

  handleSubmitClick = async () => {
    const ref = firebase
      .database()
      .ref(`/group-1/${this.state.selectedOption}/count`);
    await ref.transaction(currentCount => {
      return currentCount + 1;
    });
  };

  render = () => {
    const { products, selectedOption } = this.state;

    return (
      <div>
        Add one product
        <Select
          value={selectedOption}
          onChange={this.handleSelectChange}
          options={Object.keys(products)}
        />
        <button
          disabled={selectedOption === ""}
          onClick={this.handleSubmitClick}
        >
          Aggiungi prodotto
        </button>
      </div>
    );
  };
}

export default AddProduct;
