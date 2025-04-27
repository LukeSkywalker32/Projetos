import * as Yup from "yup";
import Category from "../models/Category.js";
import User from "../models/User.js";

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

		const { admin: isAdmin } = await User.findByPk(req.userId);
		if (!isAdmin) {
			return res.status(401).json({ error: "Acesso não autorizado" });
		}

		const { filename: path } = req.file;
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
			path,
		});
		return res.status(201).json({ id, name });
	}

	async update(req, res) {
		const schema = Yup.object().shape({
			name: Yup.string().strict(),
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
		const categoryExists = await Category.findByPk(id);
		if (!categoryExists) {
			return res.status(400).json({ error: "Categoria não existe" });
		}

		let path;
		if (req.file) {
			path = req.file.filename;
		}

		const { name } = req.body;
		if (name) {
			const categoryNameExists = await Category.findOne({
				where: {
					name,
				},
			});
			if (categoryNameExists && categoryNameExists.id !== +id) {
				return res.status(400).json({ error: "Categoria já existe" });
			}
		}

		await Category.update(
			{ name, path },
			{
				where: {
					id,
				},
			},
		);

		return res
			.status(200)
			.json({ message: "Categoria atualizada com sucesso" });
	}

	async index(req, res) {
		const categories = await Category.findAll();
		return res.status(200).json(categories);
	}
}
export default new CategoryController();
