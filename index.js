const express = require('express');
const users = require("./routes/user")
const cars = require("./routes/car")
const app = express();
const PORT = 8080;
app.use(express.json())

app.use("/users", users)
app.use("/cars", cars)

app.listen(PORT, (error)=>{
    if(!error){
        console.log("Serwer działa na porcie: "+PORT)
    }else{
        console.log("Port nie działa: ", error)
    }
} )