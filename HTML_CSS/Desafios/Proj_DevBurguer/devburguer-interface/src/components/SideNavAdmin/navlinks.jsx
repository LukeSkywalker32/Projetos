import { List, ListPlus, NotePencil,  } from "@phosphor-icons/react";


export const navLinks = [
  {
    id: 1,
    label: "Pedidos",
    path: "/admin/pedidos",
    icon: <NotePencil />,
  },
  {
    id: 2,
    label: "Produtos",
    path: "/admin/produtos",
    icon: <List />,
  },
  {
    id: 3,
    label: "Adicionar Produto",
    path: "/admin/novo-produto",
    icon: <ListPlus />,
  },
];
