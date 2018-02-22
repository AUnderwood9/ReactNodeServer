import React, { Component, Fragment } from "react";
import DeleteChirp from "./DeleteChirp";
import EditChirp from "./EditChirp";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
class ChirpInfo extends Component{
    constructor(props){
        super(props);

        this.state = { chirp: {} };
    }

    componentDidMount(){
        console.log("Mounting");
        fetch(`/api/chirps/${this.props.match.params.id}`, {
            method: "GET",
        })
        .then((response) => {
            let responseData = response.json();
            responseData.then((data) => {
                this.setState({ chirp: data, id: this.props.match.params.id });
            })
        })
        .catch((err) => {
            console.log(err);
        });
    }

    deleteChirp(){
        console.log(this.state.id);
        fetch(`/api/chirps/${this.state.id}`, {
            method: "DELETE"
        })

        console.log(this.props.history.location);
        
        this.props.history.push("/");

    }

    render(){
        return(
            <div>
                <h3>User Name: {this.state.chirp.usr}</h3>
                <p>Comment: {this.state.chirp.comment}</p>
                <p>Time Stamp: {this.state.chirp.timeStamp}</p>
                <button onClick={(event) => {this.deleteChirp()}}>Delete Chirp</button>
                <Link to={`/chirp/${this.state.id}/edit`}>Edit Chirp</Link>
            </div>
        );
    }
}

export default ChirpInfo;