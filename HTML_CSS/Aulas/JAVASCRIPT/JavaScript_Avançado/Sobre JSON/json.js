
const users = [
  {
    id: 1,
    name: "Lucas Oliveira",
    email: "lucas.oliveira@example.com",
    age: 28,
    address: {
      street: "Rua das Flores, 123",
      city: "São Paulo",
      state: "SP",
      zip: "01000-000",
    },
    active: true,
  },
  {
    id: 2,
    name: "Mariana Santos",
    email: "mariana.santos@example.com",
    age: 32,
    address: {
      street: "Avenida Central, 456",
      city: "Rio de Janeiro",
      state: "RJ",
      zip: "20000-000",
    },
    active: false,
  },
];

const toJSON = JSON.stringify(users)

const toObject = JSON.parse(toJSON)

console.log(toObject);