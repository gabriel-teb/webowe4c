const express = require('express');

const app = express();
const PORT = 8080;

app.get("/", (req, res)=>{
    res.send("Mój pierwszy program");
})
app.get("/pierwsza", (req, res)=>{
    res.send("Mój pierwszy program i pierwsza strona");
})

app.listen(PORT, (error)=>{
    if(!error){
        console.log("Serwer działa na porcie: "+PORT)
    }else{
        console.log("Port nie działa: ", error)
    }
} )