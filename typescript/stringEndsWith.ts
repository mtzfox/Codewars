/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string). 

One of my first Typescript problems so it's very rough
*/

export function solution(str: string, ending: string): boolean {
    let len1: number = str.length;
    let len2: number = ending.length;
    let diff: number = (len1 - len2);
    let newStr: string = str.split('').slice(diff,len1).join('')
    
    if (newStr === ending) return true;
    else return false; // TODO: complete
  }



