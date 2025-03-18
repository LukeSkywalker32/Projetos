import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";
import { Container, ContainerUsers } from "../../components/Container/styles";
import { Title } from "../../components/Title/styles";
import Trash from "../../assets/trash.svg";
import { AvatarUser, CardUsers, TrashIcon } from "./styles";

function ListUsers() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const { data } = await api.get("/usuariosCadastroBD");
      // console.log(data);

      setUsers(data);
    }
    loadUsers();
  }, []);

  async function deleteUsers(id) {
    await api.delete(`/usuariosCadastroBD/${id}`);
    setUsers(users.filter((user) => user.id !== id));
  }

  return (
    <Container>
      <TopBackground />
      <Title>Usuários Cadastrados</Title>

      <ContainerUsers>
        {users.map((user) => (
          <CardUsers key={user.id}>
            <AvatarUser
              src={`https://avatar.iran.liara.run/public?username=${user.id}`}
            />
            <div>
              <h4>{user.name}</h4>
              <p>{user.email}</p>
              <p>{user.age} anos</p>
            </div>
            <TrashIcon src={Trash} onClick={() => deleteUsers(user.id)} />
          </CardUsers>
        ))}
      </ContainerUsers>
      <Button onClick={() => navigate("/")}>Voltar</Button>
    </Container>
  );
}

export default ListUsers;
