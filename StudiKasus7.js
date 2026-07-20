const nilai = [80, 95, 70, 88, 100, 65];


let tertinggi = nilai[0];
let terendah = nilai[0];

for (let i = 0; i < nilai.length; i++) {
  
  if (nilai[i] > tertinggi) {
    tertinggi = nilai[i]; 
  }
  
  if (nilai[i] < terendah) {
    terendah = nilai[i];  
  }
}

console.log(`Nilai tertinggi : ${tertinggi}`);
console.log(`Nilai terendah : ${terendah}`);