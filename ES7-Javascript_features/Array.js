//Array.prototype.includes()


//The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

let numbers = [1, 2, 3, 4];
// ES 6 before
if(numbers.indexOf(2) !== -1) {  console.log('Array contains value');}
// ES 6 after
if(numbers.includes(2)) {  console.log('Array contains value');}