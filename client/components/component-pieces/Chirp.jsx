import React, { Fragment, Component } from "react";
import ChirpInfo from "./ChirpInfo";

class Chirp extends Component{
    constructor(props){
        super(props);
    }

    // renderLoading(){
        
    // }

    render(){
        return(
            <Fragment>
                <h2>I am a chirp</h2>
                {console.log(this.props.currentChirp)}
                <h4>{this.props.currentChirp.chirp.usr} said:</h4>
                <p>{this.props.currentChirp.chirp.comment}</p>
            </Fragment>
        );
    }
}

export default Chirp;