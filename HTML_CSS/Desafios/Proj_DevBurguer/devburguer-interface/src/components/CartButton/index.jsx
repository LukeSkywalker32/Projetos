import Cart from "../../assets/SectionTwo/Cart.svg"
import { ContainerButton } from "./styles";



export function CartButton({ ...props }) {
  return (
    <ContainerButton {...props}>
        <img src={ Cart } alt="Carrinhos de compras" />
    </ContainerButton>
  );
}
