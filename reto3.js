const readline = require('readline');
const fs = require('fs')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Cómo te llamas: ', (name) => {

  rl.question('Cuál es tu apellido: ', (surname) => {
    
    rl.question('Cuál es tu edad: ', (age) => {

        let persona1 = {
            nombre: name,
            apellido: surname,
            edad: age,
        }
        let datosjson = JSON.stringify(persona1);

        fs.writeFile('persona1.json', datosjson, function(err) {
            if (err) {
            console.error(err);
            rl.close();
            return;
            }

            fs.readFile('persona1.json', function(err, data) {
            if (err) {
                console.error(err);
                rl.close();
                return;
            }
            const datosobj = JSON.parse(data);

            console.log(datosobj);

            rl.close();
        });
      });
    });
  });
});










      
      


