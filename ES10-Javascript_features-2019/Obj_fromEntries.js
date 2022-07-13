//~Object.fromEntries
//This static method allows you to easily transform a list of key-value pairs into an object:

const myArray = [['one', 1], ['two', 2], ['three', 3]];
const obj = Object.fromEntries(myArray);
console.log(obj);    // => {one: 1, two: 2, three: 3}