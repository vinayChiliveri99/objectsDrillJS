let defaults = require('../defaults');

const testObject = {
  name: 'Bruce Wayne',
  age: 36,
  location: 'Gotham',
  place: undefined,
  country: undefined,
};

const defaultProperties = {
  name: 'vinay chiliveri',
  place: 'hyderabad',
  country: 'India',
};

let result = defaults(testObject, defaultProperties);

console.log(result);
