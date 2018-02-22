import React, { Component } from "react";

// let userText;
// let commentText;

// let handleClick = (chirp, props) => {
//     let d = new Date();
//     let currentTime = d.toDateString() + " " + d.toLocaleTimeString();
//     // chirp.usr = userText;
//     // chirp.comment = comment;
//     chirp.timeStamp = currentTime;
//     console.log(chirp); 

//     fetch('/api/chirps/', {
//         method: 'POST', 
//         mode: 'cors', 
//         redirect: 'follow',
//         headers: new Headers({
//             'Content-Type': 'application/json'
//         }),
//         body: JSON.stringify(chirp)
//     });

//     props.history.back();
// }

// return(
//     <div>
//         <input type="text" name="usr" id="" onChange={(event) => { userText = event.target.value }}/>
//         <input type="text" name="comment" id="" onChange={(event) => { commentText = event.target.value }}/>
//         <button onClick={() => {handleClick({usr: userText, comment: commentText}, props)}}>Add the chirp luke...</button>
//     </div>
// );

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
        // chirp.usr = userText;
        // chirp.comment = comment;
        // chirp.timeStamp = currentTime;
        this.setState({ timeStamp: currentTime });
        // console.log(chirp); 

        fetch('/api/chirps/', {
            method: 'POST', 
            mode: 'cors', 
            redirect: 'follow',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(this.state)
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