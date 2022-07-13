//JavaScript Object.entries() method is used to return an array of a given object's own enumerable property [key, value] pairs

var fruits = {
    apple: 10,
    orange: 20,
    grapes: 30,
    pineapple: 40
}

 Object.entries(fruits);
 O/P // => [ ["apple", 10], ...etc ]

for (var [key, val] of Object.entries(fruits)) {
    console.log(key, val);
}
/*Output:
apple 10
orange 20
grapes 30
pineapple 40*/