const hadir = [true, false, true, true, false, true];
let totalHadir = 0, totalAbsen = 0;

for (let i = 0; i < hadir.length; i++) {
  
  if (hadir[i] === true) {
    status = "Hadir";
    totalHadir++;
  } else {
    status = "Tidak Hadir";
    totalAbsen++;
  }
  
  console.log(`Siswa ke-${i + 1} : ${status}`);
}

console.log(`Total siswa hadir : ${totalHadir}`);
console.log(`Total siswa tidak hadir : ${totalAbsen}`);