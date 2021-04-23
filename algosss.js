//duplicates([2,2,3,1,3,3]) # => [2,3]
/**
 * Input array ... return an array with the duplicates
 *
 */

// const findDuplicates = (array) => {
//   let map ={}
//   //let resultArray = []
//   let mapResult = {}

//   for (let i=0; i<array.length; i++){
//     let element = array[i];
//     if (!map[element]) {
//       map[element] = 1
//     } else {
//       map[element]++
//     }
//   }
//   console.log(map, 'This my map')

//  for (let element in map){
//    if(map[element] > 1) {
//     //resultArray.push(element)
//     mapResult[element] = map[element]
//    }
//  }
//  return mapResult
//  //return resultArray
// }

// console.log(findDuplicates([2,2,3,1,3,3]))

// ceasar_cipher("abc", 1) # => "bcd"
// ceasar_cipher("abc", -1) # => "zab"
/**
 * string, number of times im going to rotate
 * bcd , 1 'cde'
 * [a,b,c,d,e,f,g,h,i,j]
 *
 * ASCII
 * var res = String.fromCharCode(65);
 */
//charCodeAt (index) returns a number
//[a,b,c]
//let lastElement = array.lenght-1
// charCodeAt(lastElement)
// charCode=++
// array.push()

const ceasar_cipher = (string, offset) => {
  let array = string.split('');

  if (offset > 0) {
    let lastElement = string.length - 1;
    let code = string.charCodeAt(lastElement);
    code++;
    let newChar = String.fromCharCode(code++);

    while (offset) {
      let element = array.shift();
      array.push(newChar);
      offset--;
    }
  } else {
    let firstElement = string[0];
    let code = string.charCodeAt(firstElement);
    code--;
    if (code < 97) code += 26;
    let newChar = String.fromCharCode(code--);
    let element = array.pop();
    array.unshift(newChar);
  }

  return array.join('');
};
console.log(ceasar_cipher('abc', 1));
console.log(ceasar_cipher('abc', -1));
console.log(ceasar_cipher('abc', 52));
