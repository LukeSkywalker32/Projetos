import * as Yup from "yup";
import Product from "../models/Product.js";
import Category from "../models/Category.js";
import User from "../models/User.js";

class ProductsController {
	async store(req, res) {
		// req.body.price = parseFloat(String(req.body.price).replace(",", "."));
		const schema = Yup.object().shape({
			name: Yup.string().strict().required(),
			price: Yup.number().required("O preço é obrigatório"),
			category_id: Yup.number().required(),
			offer: Yup.boolean(),
		});

		try {
			schema.validateSync(req.body, { abortEarly: false });
		} catch (err) {
			return res.status(400).json({ error: err.errors });
		}

		const { admin: isAdmin } = await User.findByPk(req.userId);
		if (!isAdmin) {
			return res.status(401).json({ error: "Acesso não autorizado" });
		}

		const { filename: path } = req.file;
		const { name, price, category_id, offer } = req.body;

		const product = await Product.create({
			name,
			price,
			category_id,
			path,
			offer,
		});

		return res.status(200).json({ product });
	}

	async update(req, res) {
		// req.body.price = parseFloat(String(req.body.price).replace(",", "."));
		const schema = Yup.object().shape({
			name: Yup.string(),
			price: Yup.number(),
			category_id: Yup.number(),
			offer: Yup.boolean(),
		});

		try {
			schema.validateSync(req.body, { abortEarly: false });
		} catch (err) {
			return res.status(400).json({ error: err.errors });
		}

		const { admin: isAdmin } = await User.findByPk(req.userId);
		if (!isAdmin) {
			return res.status(401).json({ error: "Acesso não autorizado" });
		}

		const { id } = req.params;
		const findProduct = await Product.findByPk(id);
		if (!findProduct) {
			return res.status(400).json({ error: "Produto não encontrado" });
		}

		let path;
		if (req.file) {
			path = req.file.filename;
		}

		// const { filename: path } = req.file;
		const { name, price, category_id, offer } = req.body;

		await Product.update(
			{
				name,
				price,
				category_id,
				path,
				offer,
			},
			{
				where: {
					id,
				},
			},
		);
		const updatedProduct = await Product.findByPk(id);
		return res.status(200).json({
			message: `O produto "${updatedProduct.name}" foi atualizado com sucesso!`,
		});
	}

	async index(req, res) {
		const products = await Product.findAll({
			include: [
				{
					model: Category,
					as: "category",
					attributes: ["id", "name"],
				},
			],
		});
		return res.status(200).json(products);
	}
}

export default new ProductsController();
