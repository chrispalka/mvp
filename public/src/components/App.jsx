import React, { component } from "react";
import ReactDOM from "react-dom";
const insertRow = require('./db/index.js');

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }




  render() {
    return(
      <h1>hello from app</h1>
    )
  }
}

export default App;