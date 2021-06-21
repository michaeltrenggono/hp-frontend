import React, { Fragment } from 'react';
import './App.scss';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Leads} from "./features/hpleads/Leads";
import {Nav} from "./features/hpleads/components/navigations/Nav";
import {NavItem} from "./features/hpleads/components/navigations/NavItem";

function App() {
    return (
        <div className="App">
            <Router>
                <div className="container">
                    <div className="col-12">
                        <Nav>
                            <Fragment>
                                <NavItem to="/" label="Invited"/>
                                <NavItem to="/hpleads-accepted" label="Accepted"/>
                            </Fragment>
                        </Nav>
                    </div>
                </div>

                <Route exact path="/" render={() => <Leads leadStatus="Invited"/>}/>
                <Route exact path="/hpleads-accepted" render={() => <Leads leadStatus="Accepted"/>}/>
            </Router>
        </div>
    );
}

export default App;
