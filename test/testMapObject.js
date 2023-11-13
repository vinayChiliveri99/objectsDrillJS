let mapObject = require('../mapObject');

const testObject = {
  name: 'Bruce Wayne',
  age: 36,
  location: 'Gotham',
};

const result = mapObject(testObject, function cb(item) {
  // to avoid transformation to every value, we can add a condition, to check the type, so that it transforms only on them
  // here you can add any value to transform like (item + 20), etc.,

  //   if (typeof item === 'number') {
  //     return item * 10;
  //   } else {
  //     return item;
  //   }

  return item;
});

console.log(result);
