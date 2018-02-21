import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ChirpListing from "./component-containers/ChirpListing";

class Navigation extends Component{
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
        return (
            <ChirpListing chirpList = {this.state}/>
        );
    }
}

export default Navigation;