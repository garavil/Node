const readline = require("readline")
const fs = require('fs/promises')

function pregunta(pregunta) {

    const question = new Promise((resolve, reject) =>{
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
            rl.close();
        });
    });
    return question;
}

let nombre
let apellido
let edad

pregunta("¿Cómo te llamas?")
  .then((respuesta) => {
    nombre = respuesta
    return pregunta("¿Cuál es tu apellido?")
  })

  .then((respuesta2) => {
    apellido = respuesta2
    return pregunta("¿Cuántos años tienes?")
  })

    .then((respuesta3) => {
    edad = respuesta3
    
  
    let person = {
        name : nombre,
        surname: apellido,
        age: edad,
    }
    
    fs.writeFile('persona1.json', JSON.stringify(person))
    .then( function(){
    return fs.readFile('persona1.json')
    })
    .then(function(data){
    console.log(JSON.parse(data));
    })
    .catch(function(err){
    console.log(err);
    })
})

.catch(error => {
    console.error(error);
})

