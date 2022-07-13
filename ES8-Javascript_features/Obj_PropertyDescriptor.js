//Object.getOwnPropertyDescriptors() returns all own property descriptors of a given object A property descriptor is a record with one of the

/*~value
~writable
~get
~set
~configurable
~enumerable*/
let myObj = {
  property1: 'foo',
  property2: 'bar',
  property3: 42,
  property4: () => console.log('prop4')  
}

Object.getOwnPropertyDescriptors(myObj)



/*
{ property1: {…}, property2: {…}, property3: {…}, property4: {…} }
  property1: {value: "foo", writable: true, enumerable: true, configurable: true}
  property2: {value: "bar", writable: true, enumerable: true, configurable: true}
  property3: {value: 42, writable: true, enumerable: true, configurable: true}
  property4: {value: ƒ, writable: true, enumerable: true, configurable: true}
  __proto__: Object
*/