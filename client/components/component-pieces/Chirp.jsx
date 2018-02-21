import React, { Fragment } from "react";

function Chirp(props){
    return(
        <Fragment>
            <h2>I am a chirp</h2>
            {console.log(props.currentChirp)}
            <h4>{props.currentChirp.chirp.usr}</h4>
            <p>{props.currentChirp.chirp.comment}</p>
        </Fragment>
    );
}

export default Chirp;