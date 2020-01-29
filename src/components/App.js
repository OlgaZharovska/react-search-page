import React from "react";
import "../App.css";
import Searchbar from "./SearchBar";
import SearchList from "./SearchList";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: null
    };
  }

  updateData(config) {
    this.setState(config);
  }

  render() {
    return (
      <div className="mainapp">
        <Searchbar update={this.updateData.bind(this)} />
        <SearchList searchResults={this.state.searchResults} />
      </div>
    );
  }
}
