// function isPrime(num) {
//   // assigns num
//   let nums = num
  
//   const numbers = [ value(nums), divisor(nums - 1) ]
  
//   const primes = []
//   const notPrimes = []

//   const isInteger = i => Math.sign(i) >= 1
//   const isEven = i => i % 2 === 0

//   if (num < 2 || !isInteger || !isEven) {
//     return false
//   }
//   if (num == 2 || isEven) {
//     return true
//   }

//   //console.log(primes)
// }


function isPrime(num) {
  
    let divisor = (num-1)
    
    // creats nums.nums Array, assigns num and divisor
    const nums = [num, divisor]
    const values = nums.values();
    
    // empty arrays
    const notPrime = []
    const primes = []
    
    //creates method
    let isInteger = (i) => Math.sign(i) >= 1;
    let isEven = (i) => i % 2 === 0;
    
    // for each value
    for (const value of values) {
      numbers == [nums.values, nums.divisor]
      //numbers = [ value, divisor ]
      if (numbers) = !isInteger || !isEven) { notPrime.push(false) };
      if (numbers) i = 2 || !isEven) { prime.push(true) };
      
      numbers.filter(i => i = notPrime));
      numbers.filter(i => i = prime));
    
    }
  //console.log(primes)
}
  
  
  
  isPrime(0);
  isPrime(1);
  isPrime(2);
  isPrime(73);
  isPrime(75);
  isPrime(-1);
  isPrime(9);
  




/* old */
// function isPrime(num) {
//   let nums = num
//   const numbers = {
//     myNum: nums,
//     divisor: nums - 1
//   }

//   const primes = []

//   let isInteger = Math.sign(num) >= 1
//   let isEven = num % 2 === 0

//   if (num < 2 || !isInteger || !isEven) {
//     return false
//   }
//   if (num == 2 || isEven) {
//     return true
//   }

//   console.log(primes)
// }


// function isPrime(num) {
//     let divisor = (num-1)
//     const nums = [num, divisor];
//     const values = nums.values();
//     const notPrime = []
//     //nums.divisor = (num-1)
//     //const nums = num
//     //console.log(...nums)
//     const primes = []
    
//     let isInteger = (Math.sign(num) >= 1);
//     let isEven = (num % 2 === 0);
    
//     for (const value of values) {
//       const numbers = value || divisor;
//       console.log(numbers)
//       let notPrime = (!isInteger || !isEven)
//       let prime = (2 || isEven);
//       notPrimes = push(numbers.filter(i => i == notPrime));
//       primes = push(numbers.filter(i => i == prime));
    
//       // if (numbers < 2 || numbers != isInteger || numbers != isEven) {
//       //   //console.log(numbers)
//       //   return false;
//       // }
      
//       //   //console.log(numbers)
//       //   return true;
//       // }
//     }
//   console.log(primes)
// }
  
  
  
//   isPrime(0);
//   isPrime(1);
//   isPrime(2);
//   isPrime(73);
//   isPrime(75);
//   isPrime(-1);
//   isPrime(9);
  