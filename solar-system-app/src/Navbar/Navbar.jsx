import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Column } from 'react-materialize';


class Navbar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="container  lime lighten-5">
        <div className="container nav-wrapper">
          <a href="#" className="brand-logo left">SOLAR SYSTEM</a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
           
            <li><a href="/modaluser">SETTINGS</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}
export default Navbar;