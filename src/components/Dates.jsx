import React from "react";

const date = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let day = date.getDate();
let month = months[date.getMonth()];
let year = date.getFullYear();

let currentDate = `${day}-${month}-${year}`

function Dates(){
    return(
        currentDate
    );
}

export default Dates;