const aula = 'JSON';
console.log(aula);
const fs = require('fs');
// Ler arquivo JSON
fs.readFile('javascript-json/.prettierrc.json', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.parse(data));
    console.log(typeof data);
  }
});
