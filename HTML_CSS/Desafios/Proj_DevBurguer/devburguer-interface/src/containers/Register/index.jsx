import BackLogo from "../../components/AlterLogo";
import * as S from "./styles";
import { Button } from "../../components/Button";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

import { api } from "../../services/api.js";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export function Register() {
  const navigate = useNavigate();

  const schema = yup
    .object({
      name: yup
        .string()
        .required("O nome é obrigatório")
        .matches(/^[A-Za-zÀ-ÿ\s]+$/, "O nome deve conter apenas letras"),
      email: yup
        .string()
        .email("Digite um e-mail válido")
        .required("O email é obrigatório"),
      password: yup
        .string()
        .min(6, "Digite no minimo 6 caracteres")
        .required("A senha é obrigatória"),
      confirmpassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "As senhas não conferem")
        .required("A confirmação de senha é obrigatória"),
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
    try {
      const { status } = await api.post(
        "/users",
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true,
        }
      );
      if (status === 200 || status === 201) {
        setTimeout(() => {
          navigate("/login");
        }, 2000);
        toast.success("🎉🎉 Cadastro realizado com sucesso!");
      } else if (status === 409) {
        toast.error("🤦‍♂️ E-mail já cadastrado!");
      } else {
        throw new Error();
      }
    } catch (erro) {
      toast.error("😭😭 Erro ao cadastrar! Tente novamente");
    }
  };

  return (
    <S.Container>
      <S.LeftContainer>
        <BackLogo/>
      </S.LeftContainer>

      <S.RightContainer>
        <S.Title>Criar Conta</S.Title>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.InputContainer>
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              placeholder="Digite seu nome"
              {...register("name")}
            />
            <p>{errors?.name?.message}</p>
          </S.InputContainer>

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

          <S.InputContainer>
            <label htmlFor="confimPas">Confirme sua Senha</label>
            <input
              id="confimPas"
              type="password"
              placeholder="Confirme sua Senha"
              {...register("confirmpassword")}
            />
            <p>{errors?.confirmpassword?.message}</p>
          </S.InputContainer>

          <Button type="submit">Criar Conta</Button>
        </S.Form>
        <p>
          Já possui conta? <S.Link to="/login">Clique aqui.</S.Link>
        </p>
      </S.RightContainer>
    </S.Container>
  );
}
