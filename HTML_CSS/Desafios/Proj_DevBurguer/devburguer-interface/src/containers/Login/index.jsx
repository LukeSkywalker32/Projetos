import Logo from "../../assets/SectionOne/logo.svg";
import * as S from "./styles";
import { Button } from "../../components/Button";
import { toast } from "react-toastify";

import { api } from "../../services/api.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export function Login() {
  const schema = yup
    .object({
      email: yup
        .string()
        .email("Digite um e-mail válido")
        .required("O email é obrigatório"),
      password: yup
        .string()
        .min(6, "Digite no minimo 6 caracteres")
        .required("A senha é obrigatória"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const response = await toast.promise(
      api.post("/session", {
        email: data.email,
        password: data.password,
      }),
      {
        pending: "Aguarde...",
        success: "Login realizado com sucesso!",
        error: "Usuário ou senha inválidos",
      }
    );

    console.log(response);
  };

  return (
    <S.Container>
      <S.LeftContainer>
        <img src={Logo} alt="Logo DevBurguer" />
      </S.LeftContainer>
      <S.RightContainer>
        <S.Title>
          Olá, seja bem vindo ao <span>Dev Burguer!</span>
          <br /> Acesse com seu <span>Login e senha.</span>
        </S.Title>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.InputContainer>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu email"
              {...register("email")}
            />
            <p>{errors?.email?.message}</p>
          </S.InputContainer>

          <S.InputContainer>
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              placeholder="Digite sua Senha"
              {...register("password")}
            />
            <p>{errors?.password?.message}</p>
          </S.InputContainer>

          <Button type="submit">ENTRAR</Button>
        </S.Form>
        <p>
          Não possui conta? <a href="##">Clique aqui.</a>
        </p>
      </S.RightContainer>
    </S.Container>
  );
}
