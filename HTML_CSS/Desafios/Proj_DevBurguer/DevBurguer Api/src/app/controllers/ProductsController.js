import * as Yup from "yup";

class ProductsController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().strict().required(),
      price: Yup.number().strict().required(),
      category: Yup.string().strict().required(),
    });
    try {
      schema.validateSync(req.body, { abortEarly: false });
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }
    return res.status(200).json({ message: "ok" });
  }
}

export default new ProductsController();
