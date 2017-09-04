import React, { Component } from 'react';
import NavBar from '../../Component/NavBar/NavBar';
import Header from '../../Component/Header/Header';
import Project from '../../Component/Project/Project';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Header header="Welcome to Junho An's portfolio!"
          subHeader="Hello, my name is Junho An. I am a Computre Science major from Drexel University."
          subHeader2="List of my projects"/>
        <Project/>
      </div>
    );
  }
}

export default App;
