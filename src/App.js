import React, { Fragment } from 'react';
import './App.scss';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Leads} from "./features/hpleads/Leads";
import {Nav} from "./features/hpleads/components/navigations/Nav";
import {NavItem} from "./features/hpleads/components/navigations/NavItem";
import {LEAD_ACCEPTED, LEAD_INVITED} from "./constants";

function App() {
    return (
        <div className="App">
            <Router>
                <div className="container">
                    <div className="col-12">
                        <Nav>
                            <Fragment>
                                <NavItem to="/" label={LEAD_INVITED}/>
                                <NavItem to="/hpleads-accepted" label={LEAD_ACCEPTED}/>
                            </Fragment>
                        </Nav>
                    </div>
                </div>

                <Route exact path="/" render={() => <Leads leadStatus={LEAD_INVITED}/>}/>
                <Route exact path="/hpleads-accepted" render={() => <Leads leadStatus={LEAD_ACCEPTED}/>}/>
            </Router>
        </div>
    );
}

export default App;
