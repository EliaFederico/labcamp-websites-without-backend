import React, { Component } from "react";
import * as firebase from "firebase";

import ProductsList from "./components/ProductsList";
import AddProduct from "./components/AddProduct";
import NewProduct from "./components/NewProduct";

import "./App.css";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyD-9xGzU36RhkNmg6B_NW0hMWS3egw_T3o",
  authDomain: "labcamp-sites-without-backend.firebaseapp.com",
  databaseURL: "https://labcamp-sites-without-backend.firebaseio.com",
  projectId: "labcamp-sites-without-backend",
  storageBucket: "labcamp-sites-without-backend.appspot.com",
  messagingSenderId: "985712486505"
};
firebase.initializeApp(config);

class App extends Component {
  render = () => {
    return (
      <div>
        <ProductsList />
        <AddProduct />
        <NewProduct />
      </div>
    );
  };
}

export default App;
