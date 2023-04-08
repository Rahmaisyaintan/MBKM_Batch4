function listPrima(angkaPertama, angkaKedua) {
    let bilanganPrima = [];
    for (let i = angkaPertama; i <= angkaKedua; i++) {
      if (i < 2) {
        continue; // abaikan bilangan < 2
      }
      let isPrima = true;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isPrima = false;
          break;
        }
      }
      if (isPrima) {
        bilanganPrima.push(i);
      }
    }
    return bilanganPrima;
  }
  
  // Contoh penggunaan fungsi:
  console.log(listPrima(1, 5));
  console.log(listPrima(5, 10));
  console.log(listPrima(10, 20));