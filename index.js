const express = require('express');

const app = express();
const PORT = 3000;

app.listen(PORT, (error)=>{
    if(!error){
        console.log("Serwer działa na porcie: "+PORT)
    }else{
        console.log("Port nie działa: ", error)
    }
} )