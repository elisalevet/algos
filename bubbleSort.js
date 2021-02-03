const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[j] < array[j - 1]) {
        let temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      }
    }
  }
  return array;
};

console.log(bubbleSort([8, 1, 4, 5, 2]));
console.log(bubbleSort([7, 3, 1, 4, 6, 2, 3]));
