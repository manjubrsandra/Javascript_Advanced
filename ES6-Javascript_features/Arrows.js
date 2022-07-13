/* ~Arrows are a function shorthand using the => syntax.
~An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations
~Does not have its own bindings to this or super, and should not be used as methods
~Does not have arguments,
~Not suitable for call, apply and bind methods
~Can not be used as constructors.
~Can not use yield, within its body. */

// Expression bodies
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);
var pairs = evens.map(v => ({even: v, odd: v + 1}));
// Statement bodies
nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});
// Lexical this
var bob = {
  _name: "Bob",
  _friends: [],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
}