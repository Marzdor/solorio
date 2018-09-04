import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./assests/components/Header";

class App extends Component {
  render() {
    return (
      <article className="container">
        <Header />
      </article>
    );
  }
}

export default App;
