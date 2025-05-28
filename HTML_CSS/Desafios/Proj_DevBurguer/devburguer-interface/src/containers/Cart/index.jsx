import Logo from "../../assets/SectionCart/small_logo.svg";
import { CartItems, CartResume } from "../../components";
import { Banner, Container, Content, Title } from "./styles";

export function Cart() {
  return (
    <Container>
      <Banner>
        <img src={Logo} alt="logo devburguer" />
      </Banner>
      <Title>Checkout - Pedido</Title>
      <Content>
        <CartItems />
        <CartResume />
      </Content>
    </Container>
  );
}
