/*

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

*/


function count (string) {  
    
    let strArr = [...string]
    strArr = strArr.reduce(function(counter, index) {
      if (!counter[index]) {
        counter[index] = 0
      }
      counter[index]++
      return counter
    }, {})
    return strArr
}