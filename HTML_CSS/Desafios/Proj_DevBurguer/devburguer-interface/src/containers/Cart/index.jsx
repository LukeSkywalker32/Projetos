import Logo from "../../assets/SectionCart/small_logo.svg";
import { Banner, Container, Content, Title } from "./styles";

export function Cart() {
  return (
    <Container>
      <Banner>
        <img src={Logo} alt="logo devburguer"/>
      </Banner>
      <Title>Checkout - Pedido</Title>
      <Content>
        {/* <CartItems></CartItems>
        <CartResume></CartResume> */}
      </Content>
    </Container>
  );
}
