const express = require('express');

const app = express();
const PORT = 8080;

app.get("/", (req, res)=>{
    res.send("Mój pierwszy program");
})
app.get("/status", (req, res)=>{
    res.status(404).send("Mój pierwszy program");
})
app.get("/json", (req, res)=>{
    res.json({"text":"to jest json"});
})
app.get("/body", (req, res)=>{
    res.json({received:req.body});
})
app.get("/hello/:name",(req, res)=>{
    res.send(`Cześć, ${req.params.name}`)
})

app.get("/samochod",(req, res)=>{
    const year = req.query.rok;
    const color = req.query.kolor;
    res.send(`Cześć, szukam samochodu z rocznika ${year}, kolor ma być: ${color}`)
})

app.listen(PORT, (error)=>{
    if(!error){
        console.log("Serwer działa na porcie: "+PORT)
    }else{
        console.log("Port nie działa: ", error)
    }
} )