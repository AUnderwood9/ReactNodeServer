import React, { Component } from "react";

class AddChirp extends Component{
    constructor(props){
        super(props);

        this.state = { usr: "", comment: "", timeStamp: "" };
    }

    handleClick(){
        console.log("Clicking");
        console.log(this.state);
        let d = new Date();
        let currentTime = d.toDateString() + " " + d.toLocaleTimeString();
        let chirpToAdd = Object.assign({}, this.state, { timeStamp: currentTime });

        fetch('/api/chirps/', {
            method: 'POST', 
            mode: 'cors', 
            redirect: 'follow',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(chirpToAdd)
        });

        this.props.history.push("/");
    }


    render(){
        return(
            <div>
                <input type="text" name="usr" id="" onChange={(event) => { this.setState({ usr: event.target.value }) }}/>
                <input type="text" name="comment" id="" onChange={(event) => { this.setState({ comment: event.target.value }) }}/>
                <button onClick={() => {this.handleClick()}}>Add the chirp luke...</button>
            </div>
        );
    }
}

export default AddChirp;