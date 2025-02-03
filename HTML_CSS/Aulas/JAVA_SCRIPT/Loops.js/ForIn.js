const users = {
    name: "Luke",
    age: 33,
    email: "luke@gmail.com",
    number: 123456789,
}

for (const key in users) {
  console.log(key); // Retorna as chaves do objeto
  console.log(users[key]); // Retorna as chaves do objeto
  console.log(`${key} : ${users[key]}`) // Retorna as chaves e valores do objeto
}
for (const key in users) {
    console.log(key) // Retorna as chaves do objeto
}
for (const value in users) {
    console.log(users[value]) // Retorna os valores do objeto
}
for (const full in users) {
    console.log(`${full} : ${users[full]}`) // Retorna as chaves e valores do objeto
}