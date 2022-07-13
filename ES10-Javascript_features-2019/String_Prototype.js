//String.prototype.{trimStart,trimEnd}
//The trimStart() and trimEnd() methods are technically the same as trimLeft() and trimRight(). These methods are currently stage 4 proposals and will be added to the specification for consistency with padStart() and padEnd().

const str = "   string   ";

// es2019
console.log(str.trimStart());    // => "string   "
console.log(str.trimEnd());      // => "   string"

// the same as
console.log(str.trimLeft());     // => "string   "
console.log(str.trimRight());    // => "   string"