// Nomer 7
function isPrime(number) {
    // Bilangan prima adalah bilangan bulat positif yang hanya bisa dibagi oleh 1 dan dirinya sendiri.
    if (number < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Contoh penggunaan fungsi:
  console.log(isPrime(3));
  console.log(isPrime(7));
  console.log(isPrime(6));
  console.log(isPrime(23));
  console.log(isPrime(33));