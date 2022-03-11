/*
https://www.codewars.com/kata/525f50e3b73515a6db000b83

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
*/

// Original answer
function createPhoneNumber(numbers){
    let number = "("
    for (let i=0; i<numbers.length; i++) {
      if (i==2) { number += `${numbers[i]}) `}
      else if (i==5) { number += `${numbers[i]}-`}
      else { number += numbers[i] }
    }
    return number
}

// Second try -- cleaner
function createPhoneNumber(nums) {
    let phoneNumber = "(xxx) xxx-xxxx";
  
    for (let i in nums) {
      phoneNumber = phoneNumber.replace('x', nums[i]);
    }
    return phoneNumber;
}
