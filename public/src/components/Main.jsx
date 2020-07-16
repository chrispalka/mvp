import React, { component } from "react";
import ReactDOM from "react-dom";
import List from './List.jsx';


class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      results: [],
      favoriteClicked: false
    }
  }

  onChange = (e) => {
    const store = this.state;
    store[e.target.name] = e.target.value;
    this.setState(store);
  }



  handleSearch = (e) => {
    let results;
    e.preventDefault();
    const data = new FormData()
    data.append('search', this.state.search);
    fetch('/search', {
      method: 'POST',
      body: data
    })
      .then(res => res.json())
      .then(data => {
        const result = [];
        const dataObj = {};
        console.log(data.productList)
        data = data.productList
        data.forEach((x) => {
          result.push((({ name, highest_bid, last_sale, media }) => ({ name, highest_bid, last_sale, media }))(x))
        })
        this.setState({ results: result })
      })
  }

  handleFavorite = (e) => {
    console.log('Hi from favorites!')
    this.setState({favoriteClicked: true});
  }


  render() {
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
            <input type="text" className="form-control" name="search" value={this.state.search} onChange={this.onChange} placeholder="Lets find some sneakers!"></input>
          </div>
        </form>
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Highest Bid</th>
              <th scope="col">Last Sale</th>
            </tr>
          </thead>
            <List results={this.state.results} favoriteClicked={this.state.favoriteClicked} favorites={this.handleFavorite} />
        </table>
      </div>
    )
  }
}

export default Main;