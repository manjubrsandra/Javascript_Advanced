//Optional catch binding
//This makes a small change to the ECMAScript specification that allows you to omit the catch binding and its surrounding parentheses:

try {
  // use a feature that the browser might not have implemented
} catch {
  // do something that doesn’t care about the value thrown
}