import { Table } from "../index";
import { useCart } from "../../hooks/CartContext";
import { formatPrice } from "../../utils/formatPrice";
import {
  ButtonGroup,
  EmptyCart,
  ProductImage,
  TotalPrice,
  TrashImage,
} from "./styles";
import Trash from "../../assets/trash.svg";

export function CartItems() {
  const { cartProducts, decreaseQuantity, increaseQuantity, deleteProduct } =
    useCart();

  return (
    <Table.Root>
      <Table.Header>
        <Table.Tr>
          <Table.Th />
          <Table.Th>Itens</Table.Th>
          <Table.Th>Preço</Table.Th>
          <Table.Th>Quantidade</Table.Th>
          <Table.Th style={{ textAlign: "center" }}>Total</Table.Th>
          <Table.Th />
        </Table.Tr>
      </Table.Header>
      <Table.Body>
        {cartProducts?.length ? (
          cartProducts.map((product) => (
            <Table.Tr key={product.id}>
              <Table.Td>
                <ProductImage src={product.url} alt={product.name} />
              </Table.Td>
              <Table.Td>{product.name}</Table.Td>
              <Table.Td>{product.currencyValue}</Table.Td>
              <Table.Td>
                <ButtonGroup>
                  <button
                    type="button"
                    onClick={() => decreaseQuantity(product.id)}
                  >
                    -
                  </button>
                  {product.quantity}
                  <button
                    type="button"
                    onClick={() => increaseQuantity(product.id)}
                  >
                    +
                  </button>
                </ButtonGroup>
              </Table.Td>
              <Table.Td>
                <TotalPrice>
                  {formatPrice(product.quantity * product.price)}
                </TotalPrice>
              </Table.Td>
              <Table.Td>
                <TrashImage
                  src={Trash}
                  alt="Lixeira"
                  onClick={() => deleteProduct(product.id)}
                />
              </Table.Td>
            </Table.Tr>
          ))
        ) : (
          <Table.Tr>
            <Table.Td colSpan={6}>
              <EmptyCart>Carrinho Vazio</EmptyCart>
            </Table.Td>
          </Table.Tr>
        )}
      </Table.Body>
    </Table.Root>
  );
}
