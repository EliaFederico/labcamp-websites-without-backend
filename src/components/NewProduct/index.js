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
    {
      /* TODO - step 8: push data in firebase db */
    }
  };

  render = () => {
    return (
      <div className="card">
        <div className="card-header">New product</div>
        <div className="card-body">
          <div className="form-inline">
            <div className="form-group">
              {/* TODO - step 6: connect this input to the state */}
              <Input
                name="productName"
                type="text"
                placeholder="Nome del prodotto"
              />
            </div>
            <div className="form-group mx-sm-3">
              {/* TODO - step 6: connect this input to the state */}
              <Input name="productQnt" type="number" placeholder="Quantità" />
            </div>

            {/* TODO - step 7: handle onClick of this button */}
            <button
              className="btn btn-primary"
              disabled={
                this.state.productName === "" || this.state.productQnt === 0
              }
            >
              Aggiungi nuovo prodotto
            </button>
          </div>
        </div>
      </div>
    );
  };
}

export default NewProduct;
