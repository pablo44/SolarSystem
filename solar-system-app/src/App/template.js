import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StartPage from '../StartPage/StartPage';
import Settings from '../Settings/Settings';
import Navbar from '../Navbar/Navbar';
import TestSpace from '../Test/TestSpace';
import Earth from '../Earth/Earth';
import Sun from '../Sun/Sun';
import Jupiter from '../Jupiter/Jupiter';
import Neptune from '../Neptune/Neptune';
import Saturn from '../Saturn/Saturn';
import Venus from '../Venus/Venus';

function Template () {
    return (
        <Router>
            <div className='App-body'>
                <Navbar />
                <main>
                    <Switch>
                        <Route exact path="/" component={StartPage} />
                        <Route path="/earth" component={Earth} />
                        <Route path="/jupiter" component={Jupiter} />
                        <Route path="/neptune" component={Neptune} />
                        <Route path="/saturn" component={Saturn} />
                        <Route path="/venus" component={Venus} />
                        <Route path="/earth" component={Earth} />
                        <Route path="/settings" component={Settings} />
                        <Route path="/testspace" component={TestSpace} />
                        <Route path="/sun" component={Sun} />

                    </Switch>
                </main>

            </div>
        </Router>
    );
}
export default Template;
