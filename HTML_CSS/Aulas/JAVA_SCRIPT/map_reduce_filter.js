const companies = [
  { name: "Samsung", marketValue: 50, CEO: "Kim Hyun Suk", foundedOn: 1938 },
  {
    name: "Microsoft",
    marketValue: 415,
    CEO: "Satya Nadella",
    foundedOn: 1975,
  },
  { name: "Intel", marketValue: 117, CEO: "Brian Krzanich", foundedOn: 1968 },
  {
    name: "Facebook",
    marketValue: 383,
    CEO: "Mark Zuckerberg",
    foundedOn: 2004,
  },
  { name: "Spotify", marketValue: 30, CEO: "Daniel Ek", foundedOn: 2006 },
  { name: "Apple", marketValue: 845, CEO: "845", foundedOn: 1976 },
];

//Aqui adiciono 10% de valor para cada empresa
const newList = companies.map((companie) => {
  return {
    ...companie,
    marketValue: parseFloat((companie.marketValue * 1.1).toFixed(2)),
  };
});

//Aqui filtro somente as empresas fundadas antes de 1990
const oldCompanies = newList.filter((companies) => companies.foundedOn < 1990);

//Aqui eu somo o valor total de todas as empresas e após formatamos para o formato de real
const totalValue = oldCompanies.reduce((acc, company) => acc + company.marketValue,0);
const localValue = totalValue.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
});

console.log(`
 Empresas com 10% a mais no valor de mercado:
${newList
  .map((companie) => `- ${companie.name}: R$ ${companie.marketValue.toLocaleString("pt-BR")}`).join("\n")}

 Empresas fundadas antes de 1990:
${oldCompanies
  .map((companie) => `- ${companie.name} (${companie.foundedOn})`).join("\n")}

 Soma total do valor de mercado dessas empresas: ${localValue}`);
