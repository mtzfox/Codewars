/*
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/
function accum(s) {
    let code = "";
    for (let i in s) {
      let letter = s[i].toUpperCase() + s[i].toLowerCase().repeat(i) + "-";
      code += letter;
    }
    return code.slice(0,code.length-1)
}