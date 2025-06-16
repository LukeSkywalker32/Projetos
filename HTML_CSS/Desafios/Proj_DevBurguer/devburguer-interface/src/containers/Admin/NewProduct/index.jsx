import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Image } from "@phosphor-icons/react";
import { api } from "../../../services/api";

import { Controller, useForm } from "react-hook-form";

import {
  Container,
  Form,
  Input,
  InputGroup,
  Label,
  LabelUpload,
  Select,
  SubmitButton,
  ErrorMessage,
  ContainerCheckBox,
} from "./styles";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const schema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  price: yup
    .number()
    .positive()
    .required("Preço é obrigatório")
    .typeError("Preço é obrigatório"),
  category: yup.object().required("Categoria é obrigatória"),
  file: yup
    .mixed()
    .test("required", "Escolha um arquivo", (value) => {
      return value && value.length > 0;
    })
    .test("fileSiza", "Carregue arquivo até 3Mb", (value) => {
      return value && value.length > 0 && value[0].size <= 3145728;
    })
    .test("type", "Apenas formato PNG, JPG ou JPEG", (value) => {
      return (
        value &&
        value.length > 0 &&
        (value[0].type === "image/png" ||
          value[0].type === "image/jpeg" ||
          value[0].type === "image/jpg")
      );
    }),
});

export function NewProduct() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("/categories");
      setCategories(data);
    }
    loadCategories();
  }, []);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const productFormData = new FormData();

    productFormData.append("name", data.name);
    productFormData.append("price", data.price * 100);
    productFormData.append("category_id", data.category.id);
    productFormData.append("file", data.file[0]);
    productFormData.append("offer", data.offer);

    await toast.promise(api.post("/products", productFormData), {
      pending: "Cadastrando produto...",
      success: "Produto cadastrado com sucesso!",
      error: "Erro ao cadastrar produto! Tente novamente",
    });
    reset();
    setFileName(null);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Label>Nome</Label>
          <Input type="text" {...register("name")} />
          <ErrorMessage>{errors?.name?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <Label>Preço</Label>
          <Input type="number" {...register("price")}/>
          <ErrorMessage>{errors?.price?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <LabelUpload>
            <Image />
            <input
              type="file"
              {...register("file")}
              accept="image/png, image/jpeg, image/jpg"
              onChange={(value) => {
                setFileName(value?.target?.files[0]?.name);
                register("file").onChange(value);
              }}
            />
            {fileName || "Selecione uma imagem"}
          </LabelUpload>
          <ErrorMessage>{errors?.file?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <Label>Categoria</Label>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={categories}
                getOptionLabel={(category) => category.name}
                getOptionValue={(category) => category.id}
                placeholder="Selecione uma categoria"
                // menuPortalTarget={document.body}
              />
            )}
          />
          <ErrorMessage>{errors?.category?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <ContainerCheckBox>
            <input
              type="checkbox"
              {...register("category")}
            />
            <Label>Produto em Oferta ?</Label>
          </ContainerCheckBox>
        </InputGroup>

        <SubmitButton>Cadastrar Produto</SubmitButton>
      </Form>
    </Container>
  );
}
