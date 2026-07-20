const hero = [
  "Layla",
  "Ling",
  "Franco",
  "Fanny",
  "Miya",
  "Eudora"
];

for (let i = 0; i < hero.length; i++) {
    
  if (hero[i][0] === "F") {
    console.log(`${hero[i]} -> Hero Assassin/Tank Favorit`);
  } else {
    console.log(`${hero[i]} -> Hero Biasa`);
  }
}