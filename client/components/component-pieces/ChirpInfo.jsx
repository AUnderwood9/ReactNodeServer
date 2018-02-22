import React, { Component, Fragment } from "react";
import DeleteChirp from "./DeleteChirp";
import EditChirp from "./EditChirp";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
class ChirpInfo extends Component{
    // console.log(props.match.params.id);
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
            // console.log(responseData);
            responseData.then((data) => {
                // console.log(data);
                this.setState({ chirp: data, id: this.props.match.params.id });
                // console.log(this.state);
            })
            // return response;
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

        // this.props.history.back();
        console.log(this.props.history.location);
        
        this.props.history.push("/");

    }

    render(){
        // console.log(this.state);
        return(
            <div>
                <h3>User Name: {this.state.chirp.usr}</h3>
                <p>Comment: {this.state.chirp.comment}</p>
                <p>Time Stamp: {this.state.chirp.timeStamp}</p>
                <button onClick={(event) => {this.deleteChirp()}}>Delete Chirp</button>
                <Router>
                    <Fragment>
                        <Link to={`/chirp/${this.state.id}/edit`}>Edit Chirp</Link>
                        <Switch>
                            <Route exact path={`/chirp/:id/edit`} component={EditChirp}/>
                        </Switch>
                    </Fragment>
                </Router>
                {/* <Router>
                    <Fragment>
                        <Link>Delete</Link>
                        <Link>Edit</Link>
                        <Switch>
                            <Route exact path="" component={DeleteChirp}/>
                        </Switch>
                    </Fragment>
                </Router> */}
            </div>
        );
    }
}

export default ChirpInfo;