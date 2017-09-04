import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedKey: 1,
    };
  }

  handleSelect(selectedKey) {
    event.preventDefault();
    this.setState({
      selectedKey: selectedKey
    });
    if(selectedKey == 2) {
      window.open("https://github.com/JunhoAn0702/");
    }
    else if(selectedKey == 3) {
      window.open("https://www.linkedin.com/in/junho-an-a83975a9/");
    }
    else if(selectedKey == 4) {
    }
  }

  render() {
    return (
      <div>
        <Router>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Junho An</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight activeKey={this.state.selectedKey} onSelect={this.handleSelect.bind(this)}>
                <NavItem eventKey={1} href="#">Home</NavItem>
                <NavItem eventKey={2} href="#">Github</NavItem>
                <NavItem eventKey={3} href="#">Linkedin</NavItem>
                <NavItem eventKey={4} href="#">Resume</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </Router>
      </div>
    );
  }
}

export default NavBar;
