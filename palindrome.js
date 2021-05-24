// find count of valid palindromic substings...

const countPalindroms = (string) => {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    helper(string, i, i);
    helper(string, i, i + 1);
  }

  return count;


  function helper(string, low, high){
  while (low >= 0 && high <= string.length && string[low] === string[high]) {
    count++;
    low--;
    hith--;
  }
};



function generateDocument(characters, document) {
 let map = {}

 for(let char of characters) {
   if (!(char in map)){
     map[char] = 1
   } else {
     map[char] ++
   }
 }

 for (let char of document){
   if (!(char in map) || map[char]===0){
     return false
   } else {
     map[char]--
   }
 }
 return true
}

console.log(generateDocument('lavin hola elisa levet', 'elisa levet lavin hola'))
