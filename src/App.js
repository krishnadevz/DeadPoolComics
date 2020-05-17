import React, { Component } from 'react';
import './App.css';
import List from "./components/list"
import Comics from "./components/comics"
         
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: []
    };
    this.handleSelection = this.handleSelection.bind(this);
  }
  render(){
  
  return (
    <div className="App">
     {/*<p>{this.state.selected.length}</p>*/}
    <div className="store-container">
      <h1><center>All Comics</center></h1>
      <List result={Comics().data.results} onSelect={this.handleSelection} />
    </div>
    <div className="owned-container">
      <h1>My Comics</h1>
      <List result={Comics().data.results} />
    </div>
  </div>
);
}

handleSelection(index) {
this.setState({
  selected: this.state.selected.concat(index)
});
}

}
export default App;


  




