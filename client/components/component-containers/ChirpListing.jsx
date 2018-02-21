import React, { Component, Fragment } from "react";
import Chirp from "../component-pieces/Chirp";
import ChirpInfo from "../component-pieces/ChirpInfo";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

class ChripListing extends Component{
    constructor(props){
        super(props);

        this.state = {
            chirps: []
        }
    }
    

    componentDidMount(){
        fetch("/api/chirps", {
            method: "GET",
        })
        .then((response) => {
            let responseData = response.json();
            // console.log(responseData);
            responseData.then((data) => {
                // console.log(data);
                this.setState({ chirps: data })
            })
            // return response;
        })
        .catch((err) => {
            console.log(err);
        });
    }
    render(){
        // console.log(this.props.history.location);
        return(
            <div>
                <h1>Whats up world!</h1>
                {this.state.chirps.map((item, index) => {
                    // console.log(item);
                return (
                            <Fragment key={`chirp-container-${index}`}>
                                <Chirp currentChirp={{id: index, chirp: item}}/>
                                <Router>
                                    <Fragment>
                                        <Link to={`/chirp/${index}`} replace >See more details</Link>
                                        <Switch>
                                            <Route exact path="/chirp/:id" component={ChirpInfo} />
                                            {/* <Redirect to="/chirp/:id" Component={ChirpInfo} /> */}
                                        </Switch>
                                    </Fragment>
                                </Router>
                            </Fragment>
                        );
                    // <Chirp key={`chirp-container-${index}`} currentChirp={{id: index, chirp: item}}/>
                })} 
            </div>
        )
    }
    
}

export default ChripListing;