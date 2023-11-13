# JS Objects Drill

Here I've created few underscore functions like:
 1. keys.js
 2. values.js
 3. pairs.js
 4. mapObject.js
 5. invert.js
 6. defaults.js

## 1. keys(object) :
  This function is used to retrive the keys from an object.

  ``` js
const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
```
by using keys(obj) we can retrive all the keys in an array.

``` js
[name, age, location]
```

## 2. values(object) :

This function is used to retrive the values (properties) of all keys in an object.

``` js
const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
```
by using values(object) we can retrive all the objects in an array.

``` js
['Bruce Wayne', 36, 'Gotham']
```

## 3. pairs(object) :

This function is used to retrive all the [key, value] pairs from the object.
``` js
const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
```
by using pairs(object) we can retrive all the [key, value] pairs in an array.

``` js
[[name :'Bruce Wayne'], [age: 36], [location : 'Gotham']];
```

## 4. mapObjects(object, callback)

This function is used to transform the properties of an object.
``` js
const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
```

here, if you want to transform the properties by adding a value of 10 to a value of age (whose type is number) then, you can do that
``` js
['Bruce Wayne', 46, 'Gotham'];
```

## 5. invert(object)

This is a function, which is used to invert key, values of an object.
ie., key becomes value and value becomes key.

``` js
const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
```
After performing invert(testObject)

``` js
const testObject = { Bruce Wayne : 'name', 36 : 'age', Gotham : 'location'};
```

## 6. defaults(object, defaultObject) 

This function is used to over ride the undefined properties (values) in an object by extracting the same key value from the defaultObject.

``` js
const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham', place : undefined };

const defaultObject = {name : 'Vinay Chiliveri', place : 'hyderabad', country : 'India'};
```

This function checks the undefined values from our object and checks if the value is present in the default object, if so, the undefined value gets assigned from the default object.

``` js
{ name: 'Bruce Wayne', age: 36, location: 'Gotham', place : 'hyderabad' };
```
