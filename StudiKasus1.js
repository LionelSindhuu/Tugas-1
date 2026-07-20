const nama = "budi";
const umur =20;

const hargaBarang = [12000, 15000, 8000, 5000];

let total= 0;

for (let i = 0; i < hargaBarang.length; i++) {
   total += hargaBarang[i];
}

let status; 

if (total > 3000) {
    status = "Mendaptkan Diskon";
    console.log("Selamat anda mendapatkan diskon");
} else {
    status = "Tidak mendapatkan diskon";
}

console.log(`Nama: ${nama}`);
console.log(`Umur: ${umur}`);
console.log(`Total Belanja: ${total}`);
console.log(`Status: ${status}`);