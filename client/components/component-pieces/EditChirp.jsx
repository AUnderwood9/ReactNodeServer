import React, { Component } from "react";

class EditChirp extends Component{
    constructor(props){
        super(props);

        this.state = { usr: "", comment: "", timeStamp: "" };
    }

    handleClick(){
        // console.log("Clicking");
        console.log(this.state);
        let d = new Date();
        let currentTime = d.toDateString() + " " + d.toLocaleTimeString();
        // chirp.usr = userText;
        // chirp.comment = comment;
        // chirp.timeStamp = currentTime;
        // console.log(currentTime);
        this.setState({ timeStamp: currentTime });
        console.log(this.state);
        // console.log(chirp); 

        console.log(this.props);

        fetch(`/api/chirps/${this.props.match.params.id}`, {
            method: 'PUT', 
            mode: 'cors', 
            redirect: 'follow',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(this.state)
        });

        // this.props.history.push("/", null);
        this.props.history.goBack();
    }


    render(){
        return(
            <div>
                <input type="text" name="usr" id="" onChange={(event) => { this.setState({ usr: event.target.value }) }}/>
                <input type="text" name="comment" id="" onChange={(event) => { this.setState({ comment: event.target.value }) }}/>
                <button onClick={() => {this.handleClick()}}>Edit the chirp luke...</button>
            </div>
        );
    }
}

export default EditChirp;