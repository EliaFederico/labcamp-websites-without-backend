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
      <div className="card">
        <div className="card-header">Product List</div>
        <div className="card-body">
          <ul className="list-group">
            {Object.keys(products).map((element, index) => {
              return (
                <li className="list-group-item" key={index}>
                  {element}{" "}
                  <span className="badge badge-pill badge-success">
                    {products[element].count}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  };
}

export default ProductsList;
