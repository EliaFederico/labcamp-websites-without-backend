import React, { Component } from "react";
import * as firebase from "firebase";

class ProductsList extends Component {
  constructor() {
    super();

    this.state = {
      products: {}
    };
  }

  componentDidMount = () => {
    const rootRef = firebase.database().ref("/group-1");

    rootRef.on("value", snapshot => {
      this.setState({
        products: snapshot.val()
      });
    });
  };

  render = () => {
    const { products } = this.state;

    return (
      <div>
        Product List
        <ul>
          {Object.keys(products).map((element, index) => {
            return (
              <li key={index}>
                {element} - {products[element].count}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
}

export default ProductsList;
