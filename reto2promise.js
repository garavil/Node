
const fs = require('fs/promises')

let persona = {
    name : 'Gara',
    surname: 'Vilches',
    age: 36,
}

fs.writeFile('persona.json', JSON.stringify(persona))
.then( function(){
  return fs.readFile('persona.json')
})
.then(function(data){
  console.log(JSON.parse(data));
})
.catch(function(err){
  console.log(err);
})


