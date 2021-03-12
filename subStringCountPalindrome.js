// Complete the substrCount function below.

function substrCount(n, s) {
  let count = n;
  let checker = 1;
  let middle = -1;

  for (let i = 0; i < n; i++) {
    if (s.charAt(i) == s.charAt(i - 1)) {
      count += checker;
      checker++;
      if (middle > 0) {
        if (
          middle - checker >= 0 &&
          s.charAt(middle - checker) == s.charAt(i)
        ) {
          count++;
        } else {
          middle = -1;
        }
      }
    } else {
      checker = 1;
      if (i - 2 >= 0 && s.charAt(i - 2) == s.charAt(i)) {
        count++;
        middle = i - 1;
      } else {
        middle = -1;
      }
    }
  }
  return count;
}

console.log(substrCount(7, 'abcbaba')); //10
console.log(substrCount(4, 'aaaa')); //10
