import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StartPage from '../StartPage/StartPage';
import SpaceViz from '../SpaceViz/SpaceViz';
import Settings from '../Settings/Settings';
import Navbar from '../Navbar/Navbar';

function Template () {
    return (
        <Router>
            <div className='App-body'>
                <Navbar />
                <main>
                    <Switch>
                        <Route exact path="/" component={StartPage} />
                        <Route path="/spaceviz" component={SpaceViz} />
                        <Route path="/settings" component={Settings} />

                    </Switch>
                </main>

            </div>
        </Router>
    );
}
export default Template;
