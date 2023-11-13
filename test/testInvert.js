let invert = require('../invert');

const testObject = {
  name: 'Bruce Wayne',
  age: 36,
  location: 'Gotham',
};

let invertedObject = invert(testObject);

console.log(invertedObject);
