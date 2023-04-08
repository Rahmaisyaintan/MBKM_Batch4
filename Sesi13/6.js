// Nomer 6
function gcd(firstNumber, secondNumber) {
    let fpb = 1;
    for (let i = 1; i <= firstNumber && i <= secondNumber; i++) {
      if (firstNumber % i === 0 && secondNumber % i === 0) {
        fpb = i;
      }
    }
    return fpb;
  }
  
  // Contoh penggunaan fungsi:
  console.log(gcd(12, 16)); // Output: 4
  console.log(gcd(50, 40)); // Output: 10
  console.log(gcd(22, 99)); // Output: 10
  console.log(gcd(24, 36)); // Output: 10
  console.log(gcd(17, 23)); // Output: 10