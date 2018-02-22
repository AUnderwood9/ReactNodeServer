import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ChirpListing from "./component-containers/ChirpListing";
import AddChirp from "./component-pieces/AddChirp";
import ChirpInfo from "./component-pieces/ChirpInfo";
import EditChirp from "./component-pieces/EditChirp";

class Navigation extends Component{
    render(){
        return (
            <Router>
                <Fragment>
                    <Link to="/addchirp">Add a new chirp</Link>
                    <Switch>
                        <Route exact path="/" component={ChirpListing} />
                        <Route exact path="/addchirp" component={AddChirp}/>
                        <Route exact path="/chirp/:id" component={ChirpInfo} />
                        <Route exact path="/chirp/:id/edit" component={EditChirp}/>
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}

export default Navigation;