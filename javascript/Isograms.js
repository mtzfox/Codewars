/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case. */

function isIsogram(str){
  if (str === "" || str.length === undefined) {
    return true;
  }
  let strArray = str.toLowerCase();
  let unique = Array.from(new Set(strArray));

  return (strArray.length === unique.length) ? true : false
}