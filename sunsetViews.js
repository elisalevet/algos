//Problem from algo expert
// Given an array of bulidings and a direction that all of the building face, return an array of the indices of the buildings that can see the sunset. A building can see the sunste if it is strictly taller than all of the builidings that come after in the direction that it faces.
// the input array named buildings, contains positive non-zero integers, representing the heights of the buildings. A building at index i thus has a height denoted by buildins[i]. All of the buildins face the same direction, and this direction is either east or west, denoted by the input strin named direction which will always be equal to either 'east' or 'west'. In relation to the input array, you  can interpret these directions as right for east and left for west.
// note: the indices in the output array should be sorted in ascending order.

const sunsetViews = (buildings, direction) => {
  let buildingsWithViews = [];
  let startIdx = 0;
  let steps = 0;
  let buildingHeight = 0;

  direction === 'west' ? (startIdx = 0) : (startIdx = buildings.length - 1);
  direction === 'west' ? (steps += 1) : (steps -= 1);

  let i = startIdx;
  let runningMaxHeight = 0;

  while (i >= 0 && i < buildings.length) {
    buildingHeight = buildings[i];

    if (buildingHeight > runningMaxHeight) {
      runningMaxHeight = buildings[i];
      buildingsWithViews.push(i);
    }
    i += steps;
  }

  if (direction === 'east') {
    buildingsWithViews.reverse();
  }
  return buildingsWithViews;
};

sunsetViews([3, 5, 4, 4, 3, 1, 3, 2], 'east'); // [1,3,6,7]
sunsetViews([3, 5, 4, 4, 3, 1, 3, 2], 'west'); // [0,1]
sunsetViews([1, 2, 3, 1, 5, 6, 9, 1, 9, 9, 11, 10, 9, 12, 8], 'west'); // [0,1,2,4,5,6,10,13]
