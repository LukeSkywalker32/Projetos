import {
  Title,
  Container,
  Form,
  ContainerInputs,
  Input,
  Button,
  TopBackgound,
  InputLabel,
} from "./styles";
import ImgUsers from "../../assets/users.png";
import { useRef } from "react";

function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  function submitRegister() {
    console.log(inputName.current.value);
  }

  return (
    <Container>
      <TopBackgound>
        <img src={ImgUsers} alt="Logo" />
      </TopBackgound>

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
              type="numer"
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

        <Button type="button" onClick={submitRegister}>
          Cadastrar Usuários
        </Button>
      </Form>
    </Container>
  );
}

export default Home;
