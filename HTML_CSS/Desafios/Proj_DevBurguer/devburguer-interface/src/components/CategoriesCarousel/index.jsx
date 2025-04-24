import { useEffect, useState } from "react";
import { api } from "../../services/api.js";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, ContainerItems, Title } from "./styles.js";

export function CategoriesCarousel() {
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("/Categories");

      setcategories(data.categories);
      // console.log(data);
    }
    loadCategories();
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1280, min: 690 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 690, min: 0 },
      items: 2,
    },
  };
  console.log(categories);

  return (
    <Container>
      <Title>Categorias</Title>
      <Carousel
        responsive={responsive}
        infinite={true}
        partialVisible={false}
        itemClass="carousel-item"
      >
        {categories.map((category) => (
          <ContainerItems key={category.id} $imgUrl={category.url}>
            {category.name}
          </ContainerItems>
            
        ))}
      </Carousel>
    </Container>
  );
}
