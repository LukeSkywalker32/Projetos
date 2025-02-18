/*
 O forEach é uma função que permite iterar sobre os elementos de um array e executar uma função para cada elemento.

forEach((elemento, indice, array) => {
  // código a ser executado para cada elemento
});

*/


const contacts = [
  {
    name: "João",
    phone: "(18) 3622-9598",
    email: "joao@email.com",
  },
  {
    name: "Maria",
    phone: "(21) 98765-4321",
    email: "maria@email.com",
  },
  {
    name: "Pedro",
    phone: "(71) 45678-9123",
    email: "pedro@email.com",
  },
];

contacts.some((item,index) => {
    console.log(`${index +1} - Nome: ${item.name}, Telefone: ${item.phone}`);
    if (item.name === "Maria") {
        console.log("Maria foi encontrada!");
    }
    return false
    
});