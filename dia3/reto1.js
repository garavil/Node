const express = require('express');
const app = express();

app.use(function(req, res, next){
    console.log('Petición recibida del cliente');
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers["user-agent"]);
    next()
})


app.get("/", function (req,res){
    res.status(200).send({ok:true, message:"Recibido!"})
})

app.get("/bye", function(req,res){
    res.status(200).send({ok:true, message:"Adiós!"})
})

app.listen(3005)