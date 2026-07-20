const stok = [12, 0, 5, 8, 0, 20];
let habis = 0, tersedia = 0;

for (let i = 0; i < stok.length; i++) {
  let ada = stok[i] > 0;
  if (ada) tersedia++; else habis++;
  
  console.log(`Barang ke-${i + 1} : Stok ${stok[i]} -> ${ada ? "Stok tersedia" : "Barang Habis"}`);
}

console.log(`Jumlah barang yang habis : ${habis}`);
console.log(`Jumlah barang yang masih tersedia : ${tersedia}`);