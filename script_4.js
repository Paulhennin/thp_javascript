const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("Les entrepreneurs nés après les années 70 :")
for(let birth in entrepreneurs) {
  if (entrepreneurs[birth].year >=1970 && entrepreneurs[birth].year <=1980)
  console.log(entrepreneurs[birth]);
}
console.log("**************************************")
console.log("**************************************")
console.log("Présentation d'un array donnant le nom et le prénom de chaque entrepreneurs :")
var nomEtPrenom =[]
for(let x in entrepreneurs) {
  nomEtPrenom[x] = (entrepreneurs[x].first + " " + entrepreneurs[x].last)
}
console.log(nomEtPrenom)

console.log("**************************************")
console.log("**************************************")
console.log("Quel âge aurait chaque inventeur aujourd'hui :")
for(let x in entrepreneurs) {
  currentAge = 2019 - entrepreneurs[x].year
  console.log(nomEtPrenom[x] + " aurait actuellement " + currentAge + " ans.")
}

console.log("**************************************")
console.log("**************************************")
console.log("Trier les entrepreneurs par ordre alphabétique :")
entrepreneurs.sort(tri);
console.log(entrepreneurs.sort(tri))


function tri(a,b)
{
	if (a.nom < b.nom) return -1;
	else if (a.nom == b.nom) return 0;
	else return 1;
}
