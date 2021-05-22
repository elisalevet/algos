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



