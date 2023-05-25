const fs = require('fs')

let persona = {
    name : 'Gara',
    surname: 'Vilches',
    age: 36,
}

let personajson = JSON.stringify(persona)

fs.writeFile('persona.json', personajson, (err) => {
    if (err) {
      console.error(err);
    }
  });

fs.readFile('persona.json', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    let personaobj = JSON.parse(data)
    console.log(personaobj)
});