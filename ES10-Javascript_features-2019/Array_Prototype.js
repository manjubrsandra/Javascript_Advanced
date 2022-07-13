//~Array.prototype.{flat,flatMap}
//The flat() method enables you to easily concatenate all sub-array elements of an array. Consider the following example:

arr = [10, [20, [30]]];

console.log(arr.flat());     // => [10, 20, [30]]
console.log(arr.flat(1));    // => [10, 20, [30]]
console.log(arr.flat(2));    // => [10, 20, 30]
//The flatMap() method combines map() and flat() into one method. It first creates a new array with the return value of a provided function and then concatenates all sub-array elements of the array.

console.log(arr.map(value => [Math.round(value)]));    
// => [[4], [20], [26]]

console.log(arr.flatMap(value => [Math.round(value)]));    
// => [4, 20, 26]   