//Object.values lets us return an array of a given object's own enumerable property values. Note that the order is the same as provided by the for...in loop.

var fruits = {
    apple: 10,
    orange: 20,
    grapes: 30,
    pineapple: 40
}

Object.values(fruits)
O/P [10, 20, 30, 40]

var totalVegetables = Object.values(fruits).reduce((a, b) => a + b);
console.log(totalVegetables);

//Output: 100