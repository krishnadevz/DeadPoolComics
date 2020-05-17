import React, { Component } from 'react';
//import './App.css';

class listItem extends Component {
  render(){
    const metaData=this.props.comic;
    const {thumbnail,issueNumber,pageCount,dates,prices}=metaData;
  return (
    <div className="App">
    <div className="comic-thumbnail-container">
<img className="comicsimg"src={`${thumbnail.path}.${thumbnail.extension}`}/>
    </div>
  <div className="comic-data-container">
<h1>{metaData.title}</h1>
<p>Issue:{issueNumber}</p>
<p>Pages:{pageCount}</p>
<p>Date:{new Date(dates[0].date).toLocaleString()}</p>
<p>Price: ${prices[0].price}</p>


</div>
</div>
  );
}

handleClick() {
    if(this.props.onSelect) { 
        this.props.onSelect(this.props.key);
    }
    this.setState({
        selected: !this.state.selected
    });
  }

}
export default listItem;


  




