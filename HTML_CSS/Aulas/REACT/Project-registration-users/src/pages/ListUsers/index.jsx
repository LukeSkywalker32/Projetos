import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";
import { Container, Title} from "../Home/styles"

import { useNavigate } from "react-router-dom";

function ListUsers() {
  const navigate = useNavigate();

  return (
    <Container>
      <TopBackground />
      <Title>Usuários Cadastrados</Title>
      <Button onClick={() => navigate("/")}>Voltar</Button>
    </Container>
  );
}

export default ListUsers;
