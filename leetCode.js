// convert  a roman number into a integer
//i need to store the values like in an object to access quick to it
// input => 'III'  output => 3
// input => 'IV' output => 4
// input => 'IX' output => 9
// input => 'LVIII' output => 58

const values = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};

const romanToInt = (string) => {
  let sum = 0;

  for (let i = 0; i < string.length; i++) {
    let currentElement = string[i];

    if (values[currentElement] < values[string[i + 1]]) {
      sum -= values[currentElement];
    } else {
      sum += values[currentElement];
    }
  }

  return sum;
};
