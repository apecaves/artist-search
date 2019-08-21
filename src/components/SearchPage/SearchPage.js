import React, { Component } from 'react';


export default class SearchPage extends Component {
  state = {
    text: ''
  }
  render() {
    const { text } = this.state;
    
    return (
      <form>
        <input type="text" value={text} name={text}></input>
        <button>Search</button>
      </form>
    );
  }
}

