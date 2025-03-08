import {
  Title,
  Container,
  Form,
  ContainerInputs,
  Input,
  InputLabel,
} from "./styles";


import { useRef } from "react";
import api from "../../services/api.js";
import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";

function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function submitRegister() {
    const data = await api.post("/usuariosCadastroBD", {
      name: inputName.current.value,
      age: parseInt(inputAge.current.value),
      email: inputEmail.current.value,
    });
  }

  return (
    <Container>
      <TopBackground />

      <Form>
        <Title>Cadastrar Usuários</Title>

        <ContainerInputs>
          <div>
            <InputLabel>
              Nome<span> *</span>
            </InputLabel>
            <Input
              type="text"
              placeholder="Nome do Usuário"
              ref={inputName}
            ></Input>
          </div>

          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input
              type="number"
              placeholder="Idade do Usuário"
              ref={inputAge}
            ></Input>
          </div>
        </ContainerInputs>

        <div style={{ width: "100%" }}>
          <InputLabel>
            E-mail<span> *</span>
          </InputLabel>
          <Input
            type="e-mail"
            placeholder="E-mail do usuário"
            ref={inputEmail}
          ></Input>
        </div>

        <Button type="button" onClick={submitRegister} theme="primary">
          Cadastrar Usuários
        </Button>
      </Form>
      <Button type="button">
        Visualizar Usuários
      </Button>
    </Container>
  );
}

export default Home;
