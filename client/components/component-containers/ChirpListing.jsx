import React from "react";
import Chirp from "../component-pieces/Chirp";

function ChripListing(props){
    // console.log(props.chirpList.chirps);
    return(
        <div>
            <h1>Whats up world!</h1>
            {props.chirpList.chirps.map((item, index) => {
                // console.log(item);
                return <Chirp key={`chirp-container-${index}`} currentChirp={{id: index, chirp: item}}/>;
                // <Chirp key={`chirp-container-${index}`} currentChirp={{id: index, chirp: item}}/>
            })} 
        </div>
    );
}

export default ChripListing;