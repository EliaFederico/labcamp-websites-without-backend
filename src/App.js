import React, { Component } from "react";
import "bootstrap";

import "./index.css";

// TODO - step 1: Import components

// TODO - step 3: Import firebase and initialize it

class App extends Component {
  render = () => {
    return (
      <div className="container">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-5">
              Building simple Websites without backend
            </h1>
            <p className="lead">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </div>
        </div>
        {/* TODO - step 1: render ProductsList component */}

        {/* TODO - step 5: render NewProduct component */}

        {/* TODO - step 9: render AddProduct component */}
      </div>
    );
  };
}

export default App;
