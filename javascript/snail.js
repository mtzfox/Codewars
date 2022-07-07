const snail = (array) => {
  let finalArray = [];
  // only loop over while an array has length
  while (array.length) {
    // push everything in the first array
    finalArray.push(...array.shift());
    // start a loop that gets the end of each array - array pop takes teh last value
    for (let i = 0; i < array.length; i++) {
      finalArray.push(array[i].pop());
    }
    // last item, take all items, reverse them, then push them in order
    finalArray.push(...(array.pop() || []).reverse());
    // in the parent array, find the 2nd to last item,
    // loop backwards until first item still available (original first is gone)
    // push first item, then move to next
    for (let i = array.length - 1; i >= 0; i--) {
      finalArray.push(array[i].shift());
    }
    // cycles through again
  }
  console.log(finalArray)
  return finalArray;
};
  
  
  snail([[]]) //[]);
  //snail([[1]]) //[1]);
  snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) //[1, 2, 3, 6, 9, 8, 7, 4, 5]);
  snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]])
  //[1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
  snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]) 
    //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);