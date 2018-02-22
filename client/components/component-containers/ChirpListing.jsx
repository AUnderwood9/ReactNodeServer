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
            responseData.then((data) => {
                this.setState({ chirps: data })
            })
        })
        .catch((err) => {
            console.log(err);
        });
    }
    render(){
        return(
            <div>
                <h1>Whats up world!</h1>
                {this.state.chirps.map((item, index) => {
                return (
                            <Fragment key={`chirp-container-${index}`}>
                                <Chirp currentChirp={{id: index, chirp: item}}/>
                                <Link to={`/chirp/${index}`}>See more details</Link>
                            </Fragment>
                        );
                })} 
            </div>
        )
    }
    
}

export default ChripListing;