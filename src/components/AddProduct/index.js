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
    const ref = firebase.database().ref("/master");

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
      .ref(`/master/${this.state.selectedOption}/count`);
    await ref.transaction(currentCount => {
      return currentCount + 1;
    });
  };

  render = () => {
    const { products, selectedOption } = this.state;

    return (
      <div className="card">
        <div className="card-header">Add one product</div>
        <div className="card-body">
          <div className="input-group">
            <Select
              value={selectedOption}
              onChange={this.handleSelectChange}
              options={Object.keys(products)}
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary"
                disabled={selectedOption === ""}
                onClick={this.handleSubmitClick}
              >
                Aggiungi prodotto
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default AddProduct;
