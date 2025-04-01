/*
 * store => Cadastrar / Adicionar
 * index => Listar vários
 * show => Listar apenas um
 * update => Atualizar
 * destroy ou delete => Deletar
 */

import { v4 } from "uuid";
import * as Yup from "yup";

import User from "../models/User.js";

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string()
        .strict(true)
        .matches(/^[A-Za-z\s]+$/, "O nome deve conter apenas letras")
        .required(),
      email: Yup.string().email("E-mail deve ser um e-mail válido").required(),
      password_hash: Yup.string().min(6, "Minimo de 6 caracteres").required(),
      admin: Yup.boolean(),
    });

    try {
      schema.validateSync(req.body, { abortEarly: false });
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }

    const { name, email, password_hash, admin } = req.body;

    const user = await User.create({
      id: v4(),
      name,
      email,
      password_hash,
      admin,
    });
    return res.status(201).json({
      // retorna apenas o que é necesssário
      id: user.id,
      name,
      email,
      admin,
    });
    //res.status(200).json({ message: "Hello World" });
  }
}
export default new UserController();
