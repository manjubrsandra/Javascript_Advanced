//Symbol.prototype.description
//When creating a Symbol, you can add a description to it for debugging purposes. Sometimes, it’s useful to be able to directly access the description in your code.

//This ES2019 proposal adds a read-only description property to the Symbol object, which returns a string containing the description of the Symbol. Here are some examples:

let sym = Symbol('foo');
console.log(sym.description);    // => foo

sym = Symbol();
console.log(sym.description);    // => undefined

// create a global symbol
sym = Symbol.for('bar');
console.log(sym.description);    // => bar