const Book = require("../models/books")
let book1 = new Book ("Matilda", "blanda", "Roald Dahl", 24, "https://m.media-amazon.com/images/I/51O6r5xBc7L._SY264_BO1,204,203,200_QL40_ML2_.jpg", 1, 12)
let book2 = new Book ("Dentro de casa", "dura", "Lisa Jewell", 27.95, "https://planetadelibroscom.cdnstatics2.com/usuaris/libros/fotos/367/m_libros/portada_dentro-de-casa_lisa-jewell_202211251428.jpg", 2, 12 )
let book3 = new Book ("Frankenstein", "dura", "Mary Shelley", 12, "https://planetadelibroscom.cdnstatics2.com/usuaris/libros/fotos/191/m_libros/portada_frankenstein_mary-shelley_201506271720.jpg", 3, 12 )
let book4 = new Book("Verbolario", "blanda", "Rodrigo Cortés", 19.85, "https://imagessl2.casadellibro.com/a/l/t5/42/9788439740742.jpg", 4, 12)

let books = [book1, book2, book3, book4]

// function getBook(req, res){
//     let respuesta;
//     if( books != null){
//         if(req.query.id != undefined){
//             let i = 0;
//             while(i < books.length && req.query.id != books[i].id_book){
//                 i++;
//             }
//             if(req.query.id == books[i].id_book){
//                 respuesta = books[i];
//             } else {
//                 respuesta = "No se encuentra el libro"
//             }
//         } else {
//             respuesta = books
//         }
//     } else
//         respuesta= {error:true, codigo:200, mensaje: "No existe el libro"}

//     res.send(respuesta)
// }
function getBook(req,res){
    let respuesta;
    if (books != null){
        respuesta = books
    } else {
        respuesta = {error:true, codigo:200, mensaje: "No existe el libro"}
    }
    res.send(respuesta)
    console.log(respuesta)
}


function postBook(req, res){

    const {title, type, author, price, photo, id_book, id_user} = req.body
    let newBook = new Book (title, type, author, price, photo, id_book, id_user )
    books.push(newBook)
    res.status(201).json({message: "El libro se ha añadido", libro: newBook})

}
function putBook(req, res){
    let respuesta;
    let i = 0;
    while(i < books.length && req.body.id_book != books[i].id_book){
        i++
    }
    if(req.body.id_book == books[i].id_book){
        if (req.body.title != undefined){
            books[i].title = req.body.title;
        }
        if (req.body.type != undefined){
            books[i].type = req.body.type;
        }
        if (req.body.author != undefined){
            books[i].author = req.body.author;
        }
        if (req.body.price != undefined){
            books[i].price = req.body.price;
        }
        if (req.body.photo != undefined){
            books[i].photo = req.body.photo;
        }
        if (req.body.id_book != undefined){
            books[i].id_book = req.body.id_book;
        }
        if (req.body.id_user != undefined){
            books[i].id_user = req.body.id_user;
        }
        respuesta = {error:false, codigo:200, mensaje: 'Libro actualizado'};
        }
    else
        respuesta = {error:true, codigo:200, mensaje: 'El libro no existe'};
    
    res.send(respuesta)
}

function delBook (req, res){
    let respuesta;
    let index = -1;
    for (let i = 0; i < books.length; i++) {
        if (books[i].id_book === req.body.id_book) {
            index = i;
            break;
          }
        }
      
    if (index !== -1) {
        books.splice(index, 1);
        respuesta = {error:false, codigo:200, mensaje: 'Libro eliminado'};
        res.send(respuesta);
    } else {
        respuesta = {error:true, codigo:200, mensaje: 'No se encuentra el libro'};
        res.send(respuesta);
    }
}
    
module.exports = { getBook, postBook, putBook, delBook }