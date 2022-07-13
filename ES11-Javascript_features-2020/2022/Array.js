/*Suppose we have an array sorted in ascending order. We w  ant to get the greatest number in the sorted 
array.*/

  const sortedArray = [4, 10, 30, 100, 202, 400];


  //Before
//1.One way to get the greatest number is by accessing the array.length property.
  console.log(sortedArray[sortedArray.length - 1]); //400

//Similarly, we can get the ‘N’th greatest element as below -
  console.log(sortedArray[sortedArray.length - N]);


  //The other way is to use array.slice.
//.slice() already supports negative indexes so it matches our requirement.

   //Greatest element
   console.log(sortedArray.slice(-1)[0]); //400

   //To get the 'N'th element.
   console.log(sortedArray.slice(-N)[0]);


   //After
   //ECMAScript 2022 adds at() method in Array, String, and TypedArray.  
   //Syntax
    at(index);


    //Return value:
//The element in the array that matches the given index. It returns undefined if the index is not found.

   // Largest element in array
   console.log(sortedArray.at(-1)); //400

   // 'N'th largest element.

   console.log(sortedArray.at(-N));

   //Undefined when index not found

   console.log(sortedArray.at(100)); //undefined

   //Works with string

   "Saeloun".at(-1); //n