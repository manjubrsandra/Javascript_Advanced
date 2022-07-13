// ES5 code
var a = 1, b = 2, c = 3;
var  obj = {
    a: a,
    b: b,
    c: c
  };
// obj.a = 1, obj.b = 2, obj.c = 3

// ES6 code
const
  a = 1, y = 2, c = 3;
  obj = {
    a,
    b,
    c
  };

// obj.a = 1, obj.b = 2, obj.c = 3

// ES6 code
const
  i = 1,
  obj = {
    ['i' + i]: i
  };

console.log(obj.i1); // 1