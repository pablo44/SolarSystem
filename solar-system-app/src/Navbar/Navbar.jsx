import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Column } from 'react-materialize';


class Navbar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      // add "container" to className to make format of the nav smaller
      <nav className="blue-grey darken-4 z-depth-5">
        

        {/* add "container" to className to make format of the nav smaller */}
        <div className=" nav-wrapper">
        <ul id="dropdown1" className="dropdown-content">
          <li><a href="/sun">sun</a></li>
          <li><a href="#!">mercury</a></li>
          <li class="divider"></li>
          <li><a href="#!">three</a></li>
        </ul>
          <a href="/" className="brand-logo left">SOLAR SYSTEM</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/settings"><i className="material-icons">view_module</i></a></li>
            <li><a href="testspace"><i className="material-icons">refresh</i></a></li>
            <li><a className="dropdown-trigger" href="#dropdown1" data-target="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li>
             <li><a href="/sun">space</a></li> 
          </ul>
        </div>
        
      </nav>
    )
  }
}
export default Navbar;