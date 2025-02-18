/*
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27,256,854,624,311,1000];
const newnumbers = numbers.filter(number => number > 100);
console.log(newnumbers);
*/
/*
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27,256,854,624,311,1000];
const newnumbers = numbers.filter(number => number > 100 && number % 2 === 0);
console.log(newnumbers);
*/
/*
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27, 256, 854, 624, 311, 1000];
const newnumbers = numbers.filter((number) => number > 100 || number % 2 === 0);
console.log(newnumbers);
*/
/*
const numbers = [  5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27, 256, 854, 624, 311, 1000];
const newnumbers = numbers.filter((number) => number === 1000);
console.log(newnumbers);
*/

const companies = [
  { name: "Samsung", marketValue: 50, CEO: "Kim Hyun Suk", foundedOn: 1938 },
  { name: "Microsoft", marketValue: 415, CEO: "Satya Nadella", foundedOn: 1975},
  { name: "Intel", marketValue: 117, CEO: "Brian Krzanich", foundedOn: 1968 },
  { name: "Facebook", marketValue: 383, CEO: "Mark Zuckerberg", foundedOn: 2004},
  { name: "Spotify", marketValue: 30, CEO: "Daniel Ek", foundedOn: 2006 },
  { name: "Apple", marketValue: 845, CEO: "845", foundedOn: 1976 },
];

const buyCompanie = companies.filter((company) => {
  if (company.marketValue < 200 && company.foundedOn > 1990) return true;
  else return false;
});
console.log(buyCompanie);
