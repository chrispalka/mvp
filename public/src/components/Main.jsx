import React, { component } from "react";
import ReactDOM from "react-dom";
import List from './List.jsx';


class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }

  onChange = (e) => {
    const store = this.state;
    store[e.target.name] = e.target.value;
    this.setState(store);
  }

  handleSearch = (e) => {
    e.preventDefault();
    const data = new FormData()
    data.append('search', this.state.search);
    fetch('/search', {
      method: 'POST',
      body: data
    })
  }



  render() {
    // console.log('props! ', this.props)
    let h1;
    if (this.props.username.length < 1) {
      h1 = <h1>Welcome back!</h1>
    } else {
      h1 = <h1>Welcome back {this.props.username}!</h1>
    }
    return (
      <div className="container">
        {h1}
        <form onSubmit={this.handleSearch}>
          <div className="form-group">
            <input type="text" className="form-control" name="search" value={this.state.search} onChange={this.onChange}placeholder="Lets find some sneakers!"></input>
          </div>
        </form>
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Name</th>
                <th scope="col">Size</th>
                <th scope="col">Highest Bid</th>
              </tr>
            </thead>
            <tbody>
              <List />
            </tbody>
          </table>
      </div>
    )
  }
}

export default Main;