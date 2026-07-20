const menu = [10000, 25000, 18000, 12000, 50000];

for (let i = 0; i < menu.length; i++) {
  let kategori = "Menu Reguler";
  
  if (menu[i] > 20000) {
    kategori = "Menu Premium";
  }
  
  console.log(`Rp${menu[i]} -> ${kategori}`);
}