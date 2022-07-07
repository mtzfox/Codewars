function createPhoneNumber(numbers) {
  let number = '('
  for (let i = 0; i < numbers.length; i++) {
    if (i == 2) {
      number += `${numbers[i]}) `
    } else if (i == 5) {
      number += `${numbers[i]}-`
    } else {
      number += numbers[i]
    }
  }
  return number
}
