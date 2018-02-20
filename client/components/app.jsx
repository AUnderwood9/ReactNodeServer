import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class Navigation extends Component{
    constructor(props){
        super(props);

        this.state = {
            chirps: {}
        }
    }
    componentDidMount(){

    }

    render(){
        return (
            <h1>Hello Universe</h1>
        );
    }
}

export default Navigation