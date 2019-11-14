let fact = prompt("De quel nombre tu veux faire le factoriel ?(choisi un nombre pas trop grand.):")
let calcul = 1
for (let count=1;count <= fact; count++){
  calcul= calcul * count
}

console.log(calcul)
