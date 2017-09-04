import React, { Component } from 'react';
import Style from './style.css';

class Header extends Component {
  constructor(props) {
    super();
  }
  render(){
    return(
      <div>
        <h1>{this.props.header}</h1>
        <br/>
        <h4>{this.props.subHeader}</h4>
        <br/>
        <h2>{this.props.subHeader2}</h2>
        <br/>
        <br/>
      </div>
    );
  }
}

export default Header;
