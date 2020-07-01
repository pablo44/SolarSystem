import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Column } from 'react-materialize';
import M from 'materialize-css';

class Navbar extends Component {


  componentDidMount() {
    let elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, { inDuration: 300, outDuration: 225 });

    document.addEventListener('DOMContentLoaded', function() {
      let elems = document.querySelectorAll('.sidenav');
      M.Dropdown.init(elems, { inDuration: 300, outDuration: 225 });

    });
  }


  render() {

    return (
      // add "container" to className to make format of the nav smaller
      <nav className="blue-grey darken-4 z-depth-5">


        {/* add "container" to className to make format of the nav smaller */}
        <div className=" nav-wrapper">
          <ul id="dropdown1" className="dropdown-content">
            <li><a href="/sun">Sun</a></li>
            <li><a href="/earth">Earth</a></li>
            <li><a href="/jupiter">Jupiter</a></li>
            <li><a href="/neptune">Neptune</a></li>
            <li><a href="/saturn">Saturn</a></li>
            <li><a href="/venus">Venus</a></li>
            <li><a href="/mercury">Mercury</a></li>
            <li><a href="/mars">Mars</a></li>
            <li><a href="/uranus">Uranus</a></li>
          </ul>
          <a href="/" className="brand-logo">SOLAR SYSTEM</a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/settings"><i className="material-icons">view_module</i></a></li>
            <li><a href="/"><i className="material-icons">refresh</i></a></li>
            <li><a className="dropdown-trigger" href="#dropdown1" data-target="dropdown1">Planets<i className="material-icons right">arrow_drop_down</i></a></li>
          </ul>
        </div>

      </nav>
    )
  }
}
export default Navbar;