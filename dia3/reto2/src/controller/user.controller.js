const Book = require("../models/books")
// let book = null;
let book = new Book ("Matilda", "blanda", "Roald Dahl", 24, "joifgjeirjger", 24, 12)

function getBook(req, res){
    let respuesta;
    if( book != null)
        respuesta = book;
    else
        respuesta= {error:true, codigo:200, mensaje: "No existe el libro"}

    res.send(respuesta)
}

function postBook(req, res){

    const {title, type, author, price, photo, id_book, id_user} = req.body
    let newBook = new Book (title, type, author, price, photo, id_book, id_user )
    res.status(201).json({message: "El libro se ha añadido", libro: newBook})

}
function putBook(req, res){
    let respuesta;
    if ( book != null){
        book.title = req.body.title;
        book.type = req.body.type;
        book.author = req.body.author;
        book.price = req.body.price;
        book.photo = req.body.photo;
        book.id_book = req.body.id_book;
        book.id_user = req.body.id_user;
        respuesta = {error:false, codigo:200, mensaje: 'Libro actualizado', resultado: book};
    }
    else
        respuesta = {error:true, codigo:200, mensaje: 'El libro no existe'};
    
    res.send(respuesta)
}

function delBook (req, res){
    let respuesta;
    if (book!= null){
        book = null;
        respuesta = {error:false, codigo:200, mensaje: 'Libro borrado', resultado:book};
    } else  
        respuesta = {error:true, codigo:200, mensaje:'El libro no existe'};

    res.send(respuesta)
}

module.exports = { getBook, postBook, putBook, delBook }