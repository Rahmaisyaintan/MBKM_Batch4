// Nomer 4
function isArithmeticProgression(numbers) {
    const n = numbers.length;
    const diff = numbers[1] - numbers[0];
  
    for (let i = 1; i < n; i++) {
      if (numbers[i] - numbers[i - 1] !== diff) {
        return false;
      }
    }
  
    return true;
  }
  
  // Contoh penggunaan fungsi:
  console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6])); // Output: true
  console.log(isArithmeticProgression([2, 4, 6, 12, 24])); // Output: false
  console.log(isArithmeticProgression([2, 4, 6, 8]));
  console.log(isArithmeticProgression([2, 4, 6, 18, 54]));
  console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9]));