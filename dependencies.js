// You have a global const dependencies adjacency list
// a depends on b
// b depends on c, d, e
// e depends on d
// Valid results:
// [c d e b a]
// [d c e b a]
// [d e c b a]

const dependencies = {
  a: ['b'],
  b: ['c', 'd', 'e'],
  c: [],
  d: [],
  e: ['d'],
};

let visited = {};

const orderInstalls = (array, result = []) => {
  for (let i = 0; i < array.length; i++) {
    let currentElement = array[i];

    if (dependencies[currentElement].length === 0) {
      if (!visited[currentElement]) {
        console.log(visited);
        result.push(currentElement);
        visited[currentElement] = true;
      }
    } else {
      orderInstalls(dependencies[currentElement], result);
      if (!visited[currentElement]) {
        console.log(visited, 'visiting2');
        result.push(currentElement);
        visited[currentElement] = true;
      }
    }
  }
  return result;
};

//let result = orderInstalls(['e']);
let result = orderInstalls(['a', 'b']);
console.log(result);
