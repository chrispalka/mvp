import React, { component } from "react";
import ReactDOM from "react-dom";
import Main from './Main.jsx'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      loginComplete: false
    }
  }

  onChange = (e) => {
    const store = this.state;
    store[e.target.name] = e.target.value;
    this.setState(store);
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData();
    data.append('username', this.state.username)
    fetch('/login', {
      method: 'POST',
      body: data
    })
    this.setState(state => ({
      loginComplete: !this.state.loginComplete
    }));
  }

  render() {
    if(!this.state.loginComplete) {
      return (
        <div className="container">
          <form className="login" onSubmit={this.handleSubmit}>
            <label htmlFor="username">Login:</label>
            <input type="text" name="username" value={this.state.username} onChange={this.onChange} placeholder="Enter name"></input>
            <button type="submit" className="btn btn-primary">GO</button>
          </form>
        </div>
      )
    } else {
      return (
        <Main username={this.state.username} />
      )
    }
  }
}

export default App;