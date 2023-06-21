const {Router} = require ("express")
const ruta = Router();
const bookCtrl = require("../controller/user.controller")


ruta.get("/book", bookCtrl.getBook)

ruta.post("/book", bookCtrl.postBook)

ruta.put("/book", bookCtrl.putBook)

ruta.delete("/book", bookCtrl.delBook)





module.exports = ruta;