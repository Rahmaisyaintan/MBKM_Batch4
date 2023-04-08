function threeStepsAB(str) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "a") {
        for (let j = i + 1; j < str.length; j++) {
          if (str[j] === "b" && j - i >= 3) {
            return true;
          }
        }
      } else if (str[i] === "b") {
        for (let j = i + 1; j < str.length; j++) {
          if (str[j] === "a" && j - i >= 3) {
            return true;
          }
        }
      }
    }
  
    return false;
  }
  
  // Contoh penggunaan fungsi:
  console.log(threeStepsAB("lane borrowed"));
  console.log(threeStepsAB("i am sick"));
  console.log(threeStepsAB("you are boring"));