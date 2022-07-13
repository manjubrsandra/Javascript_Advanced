/*Asynchronous iteration allow us to iterate over data that comes asynchronously, 
on-demand. Like, for instance, when we download something chunk-by-chunk over a network.
 And asynchronous generators make it even more convenient.*/

function asyncIterator() {
  const array = [1, 2];
  return {
    next: function() {
      if (array.length) {
        return Promise.resolve({
          value: array.shift(),
          done: false
        });
      } else {
        return Promise.resolve({
          done: true
        });
      }
    }
  };
}

var iterator = asyncIterator();

(async function() {
    await iterator.next().then(console.log); // { value: 1, done: false }
    await iterator.next().then(console.log); // { value: 2, done: false }
    await iterator.next().then(console.log); // { done: true }
})();