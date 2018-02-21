import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ChirpListing from "./component-containers/ChirpListing";
import AddChirp from "./component-pieces/AddChirp";

class Navigation extends Component{
    render(){
        console.log("Rendering main");
        return (
            <Router>
                <Fragment>
                    <Link to="/addchirp">Add a new chirp</Link>
                    <Route path="/" component={ChirpListing} />
                    <Switch>
                        <Route path="/addchirp" component={AddChirp}/>
                    </Switch>
                </Fragment>
            </Router>
            // <ChirpListing chirpList = {this.state}/>
        );
    }
}

export default Navigation;