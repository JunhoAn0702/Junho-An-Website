import React, { Component } from 'react';
import {Grid, Row, Col, Thumbnail, Button, Image} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Calculator from '../../Image/Calculator.png';
import Checkers from '../../Image/Checkers.png';
import Finance from '../../Image/Finance.png';
import Kwic from '../../Image/Kwic.png';
import react from '../../Image/react.png';
import Robot from '../../Image/Robot.png';
import Shooting from '../../Image/Shooting.png';
import Survey from '../../Image/Survey.png';
import Style from './style.css';

class Project extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
    return(
      <div>
        <Grid>
          <Row>
            <Col sm={12} md={6} lg={3}>
              <Thumbnail src={Kwic} alt="242x200">
                <h3>Key Word in Context</h3>
                <Router>
                  <Link to="chart" target="_blank" to="https://github.com/JunhoAn0702/Key-Word-in-Context" >
                    <Button bsStyle="primary">Code</Button>
                  </Link>
                </Router>
              </Thumbnail>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Thumbnail src={Survey} alt="242x200">
                <h3>Survey Test System</h3>
                <Router>
                  <Link to="chart" target="_blank" to="https://github.com/JunhoAn0702/Survey-Test-System" >
                    <Button bsStyle="primary">Code</Button>
                  </Link>
                </Router>
              </Thumbnail>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Thumbnail src={Calculator} alt="242x200">
                <h3>Simple Calculator</h3>
                <Router>
                  <Link to="chart" target="_blank" to="https://github.com/JunhoAn0702/Simple-Calculator" >
                    <Button bsStyle="primary">Code</Button>
                  </Link>
                </Router>
              </Thumbnail>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Thumbnail src={Checkers} alt="242x200">
                <h3>Online Checkers</h3>
                <Router>
                  <Link to="chart" target="_blank" to="https://github.com/JunhoAn0702/Online-Checkers" >
                    <Button bsStyle="primary">Code</Button>
                  </Link>
                  </Router>
              </Thumbnail>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6} lg={3}>
              <Thumbnail src={Shooting} alt="242x200">
                <h3>3D Shooting Game</h3>
                <Router>
                  <Link to="chart" target="_blank" to="https://github.com/JunhoAn0702/3D-Shooting-Game" >
                    <Button bsStyle="primary">Code</Button>
                  </Link>
                </Router>
              </Thumbnail>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Thumbnail src={Finance} alt="242x200">
                <h3>My Finance with Roommates</h3>
                <Router>
                  <Link to="chart" target="_blank" to="https://github.com/JunhoAn0702/My-Finance-With-Roommates" >
                    <Button bsStyle="primary">Code</Button>
                  </Link>
                </Router>
              </Thumbnail>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Thumbnail src={Robot} alt="242x200">
                <h3>Nuclear Waste Disposal Robot</h3>
                <Router>
                  <Link to="chart" target="_blank" to="https://github.com/JunhoAn0702/Nuclear-Waste-Disposal-Robot" >
                    <Button bsStyle="primary">Code</Button>
                  </Link>
                </Router>
              </Thumbnail>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Thumbnail src={react} alt="242x200">
                <h3>Junho An Website</h3>
                <Router>
                  <Link to="chart" target="_blank" to="https://github.com/JunhoAn0702/Junho-An-Website" >
                    <Button bsStyle="primary">Code</Button>
                  </Link>
                </Router>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Project;
