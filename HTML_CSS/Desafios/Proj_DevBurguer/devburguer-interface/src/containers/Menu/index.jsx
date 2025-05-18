import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { CardProduct } from "../../components/CardProduct";
import { api } from "../../services/api";
import { formatPrice } from "../../utils/formatPrice.js";
import {
  Container,
  Banner,
  CategoryMenu,
  ProductsContainer,
  CategoryBotton,
} from "./styles";

export function Menu() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  const navigate = useNavigate();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  
  const [selectedCategory, setSelectedCategory] = useState(() =>{
    const categoryId = +query.get("categoria");//busca o id da categoria e converte em number
    if (categoryId) {
      return categoryId;
    }
    return 0;
    
  });

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("/Categories");
      const newCategories = [{ id: 0, name: "Todas" }, ...data];

      setCategories(newCategories);
    }

    async function loadProducts() {
      const { data } = await api.get("/Products");

      const newProducts = data.map((product) => ({
        currencyValue: formatPrice(product.price),
        ...product,
      }));
      setProducts(newProducts);
    }
    loadCategories();
    loadProducts();
  }, []);

  useEffect(() => {
    if (selectedCategory === 0) {
      setFilteredProducts(products);
    } else {
      const newFilteredProducts = products.filter(
        (product) => product.category_id === selectedCategory
      );
      setFilteredProducts(newFilteredProducts);
    }
  }, [products, selectedCategory]);
  return (
    <Container>
      <Banner>
        <h1>
          O MELHOR <br />
          HAMBURGUER <br />
          ESTA AQUI! <br />
          <span>Esse cardápio está irresistível!</span>
        </h1>
      </Banner>
      <CategoryMenu>
        {categories.map((category) => (
          <CategoryBotton
            key={category.id}
            $isActiveCategory={category.id === selectedCategory}
            onClick={() => {
              navigate(
                {
                  pathname: "/cardapio",
                  search: `?categoria=${category.id}`,
                },
                {
                  replace: true,
                }
              );
              setSelectedCategory(category.id);
            }}
          >
            {category.name}
          </CategoryBotton>
        ))}
      </CategoryMenu>

      <ProductsContainer>
        {filteredProducts.map((product) => (
          <CardProduct product={product} key={product.id} />
        ))}
      </ProductsContainer>
    </Container>
  );
}
