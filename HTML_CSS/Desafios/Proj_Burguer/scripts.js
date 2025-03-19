const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".showAll");
const buttonDiscount = document.querySelector(".discountAll");
const buttonSum = document.querySelector(".sumFull");
const buttonFilter = document.querySelector(".filterAll");

function showAll(newArrayProducts) {
  let myLi = "";

  newArrayProducts.forEach((product) => {
    myLi += `
    <li>
        <img src=${product.src}>
        <p>${product.name}</p>
        <p class="itemPrice">${product.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}</p>
    </li>
    `;
  });

  list.innerHTML = myLi;
}



function showDiscount() {
  const newPrice = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9,
  }));

  showAll(newPrice);
}



function sumFull() {
  const sum = menuOptions.reduce((acc, curr) => acc + curr.price, 0);
  const sumDiscount = sum * 0.9;

  list.innerHTML = `
                    <li>
                        <p>
                        O valor total sem descontos é <br><span>${sum.toLocaleString(
                          "pt-BR",
                          { style: "currency", currency: "BRL" }
                        )}</span>
                        </p>
                        <p><br>
                        O valor total com desconto é <br><span>${sumDiscount.toLocaleString(
                          "pt-BR",
                          {
                            style: "currency",
                            currency: "BRL",
                          }
                        )}
                    </li></span>
                  `;
}



function filterAll() {
  const productsFilter = menuOptions.filter(
    (product) => product.vegan === true
  );

  showAll(productsFilter);
}

buttonSum.addEventListener("click", sumFull);
buttonShowAll.addEventListener("click", () => showAll(menuOptions));
buttonDiscount.addEventListener("click", showDiscount);
buttonFilter.addEventListener("click", filterAll);
