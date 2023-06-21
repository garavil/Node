const express = require("express");
const cors = require("cors");
const ruta = require("./routers/user.routers");
const errorHandling = require("./error/errorHandling");
const app = express();

app.set("port", process.env.PORT || 3001)

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(ruta);
app.use(function(req, res, next){
    res.status(404).json({error:true,
                        codigo:400,
                        message: "Endpoint doesnt found"})
})

app.use(errorHandling);

module.exports = app;