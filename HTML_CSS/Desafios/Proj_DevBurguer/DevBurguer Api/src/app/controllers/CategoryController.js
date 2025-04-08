import * as Yup from "yup";
import Category from "../models/Category.js";

class CategoryController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().strict().required(),
    });

    try {
      schema.validateSync(req.body, { abortEarly: false });
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }

    const { name } = req.body;

    const categoryExists = await Category.findOne({
      where: {
        name,
      },
    });
    if (categoryExists) {
      return res.status(400).json({ error: "Categoria já existe" });
    }

    const { id } = await Category.create({
      name,
    });
    return res.status(201).json({ id, name });
  }

  async index(req, res) {
    const categories = await Category.findAll();
    return res.status(200).json({ categories });
  }
}
export default new CategoryController();
