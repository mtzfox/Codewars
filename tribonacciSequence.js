/* 
The challenge was to create a fibonacci function which takes a signature array/list and returns the first n elements.

My first thought is that I need to loop over the given array, n number of times. 
I should have either have a map of the array that unshifts the first element, or I should adjust the starting point with every loop.
The result of the addition (maybe reduce) should push to the mapped array, and at the end, return it.
*/

function tribonacci(signature, n) {
  const sigMap = [...signature]
  const result = []

  for (let i = 0; i < n; i++) {
    result.push(sigMap[i])
    if (i >= 2) {
      let sum = sigMap[i] + sigMap[i - 1] + sigMap[i - 2]
      sigMap[i + 1] = sum
    }
  }

  return result
}

// Example
tribonacci([1, 1, 1], 10) // [ 1, 1, 1, 3, 5, 9, 17, 31, 57, 105 ]
