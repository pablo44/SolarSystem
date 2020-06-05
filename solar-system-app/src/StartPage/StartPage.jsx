import React from 'react';
import {Link} from 'react-router-dom';
import {button} from 'react-materialize';

function StartPage () {
    return (
        <div className='background losenge bg-image'>
            <div className='background losenge bg-image'>
            <button className="btn waves-effect waves-light" type="submit" name="action">Go!
    <i className="material-icons right"></i>
  </button>
            </div>
        </div>
    )
}
export default StartPage;