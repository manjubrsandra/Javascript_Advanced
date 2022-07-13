//Promise prototype finally
//Promise API is extended by an optional finally block which is called in any case (after the Promise is resolved or is rejected).

function testFinally() {
  return new Promise((resolve,reject) => resolve())
}

testFinally().then(() => console.debug("resolved")).finally(() => console.debug("finally"))

// resolved
// finally