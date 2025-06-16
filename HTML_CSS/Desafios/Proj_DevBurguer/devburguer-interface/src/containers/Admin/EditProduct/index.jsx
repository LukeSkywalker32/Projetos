import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Image } from "@phosphor-icons/react";
import { api } from "../../../services/api";

import { Controller, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

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
  offer: yup.boolean(),
  
});

export function EditProduct() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate()

  const {
    state: { product },
  } = useLocation();

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
    console.log(data)

    productFormData.append("name", data.name);
    productFormData.append("price", Math.round(data.price * 100));
    productFormData.append("category_id", data.category.id);
    productFormData.append("file", data.file[0]);
    productFormData.append("offer", data.offer);

    await toast.promise(api.put(`/products/${product.id}`, productFormData), {
      pending: "Editando produto...",
      success: "Produto editado com sucesso!",
      error: "Erro ao editar produto! Tente novamente",
    });
    setTimeout(() => {
      navigate("/admin/produtos")
    }, 2000)

  };
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Label>Nome</Label>
          <Input
            type="text"
            {...register("name")}
            defaultValue={product.name}
          />
          <ErrorMessage>{errors?.name?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <Label>Preço</Label>
          <Input
            type="number"
            {...register("price")}
            defaultValue={product.price / 100}
          />
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
            defaultValue={product.category}
            render={({ field }) => (
              <Select
                {...field}
                options={categories}
                getOptionLabel={(category) => category.name}
                getOptionValue={(category) => category.id}
                placeholder="Selecione uma categoria"
                defaultValue={product.category}
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
              defaultChecked={product.offer}
              {...register("offer")}
            />
            <Label>Produto em Oferta ?</Label>
          </ContainerCheckBox>
        </InputGroup>
        <SubmitButton>Editar Produto</SubmitButton>
      </Form>
    </Container>
  );
}
