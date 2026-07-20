const nilai = [90, 75, 60, 45, 88];
let lulus = 0;
let tidakLulus = 0;

for (let i = 0; i < nilai.length; i++) {
  
  if (nilai[i] >= 75) {
    status = "Lulus";
    lulus++;
  } else {
    status = "Tidak Lulus"
    tidakLulus++;
  }
  
  console.log(`Siswa ke-${i + 1} : ${nilai[i]} -> ${status}`);
}

console.log(`Jumlah yang lulus : ${lulus}`);
console.log(`Jumlah yang tidak lulus : ${tidakLulus}`);