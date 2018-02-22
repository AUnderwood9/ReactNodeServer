import React, { Fragment, Component } from "react";
import ChirpInfo from "./ChirpInfo";

class Chirp extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Fragment>
                {console.log(this.props.currentChirp)}
                <h4>{this.props.currentChirp.chirp.usr} said:</h4>
                <p>{this.props.currentChirp.chirp.comment}</p>
            </Fragment>
        );
    }
}

export default Chirp;