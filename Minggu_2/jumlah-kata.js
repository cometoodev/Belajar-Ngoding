function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  let kata = 1;
  for (let i = 0; i < kalimat.length; i++) {
    if (kalimat[i] == " ") {
      kata++;
    }
  }
  return kata;
}

// TEST CASES
console.log(hitungJumlahKata("Happy Birthday To U")); // 4
console.log(hitungJumlahKata("Never Give Up On Your Dream")); // 6
console.log(hitungJumlahKata("Sing Song Like Me")); // 4
console.log(hitungJumlahKata("U")); // 1
console.log(hitungJumlahKata("U believe I can code")); // 5
